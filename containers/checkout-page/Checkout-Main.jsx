"use client";
import React, { useState } from "react";
import Header from "./Header";
import ItemList from "./Item-List";
import Preferences from "./Preferences";
import { useDisclosure } from "@nextui-org/react";
import Instructions from "@/components/modal/Instructions";
import Bill from "./Bill";
import CheckoutButton from "./Checkout-Button";
import AddDetails from "@/components/modal/Add-Details";
import { notFound, useRouter } from "next/navigation";
import useSmallScreen from "@/hooks/useSmallScreen";
import ScreenError from "@/components/pages/Screen-Error";
import supabase from "@/config/supabase";
import useStatusNavigate from "@/hooks/useStatusRedirect";
import moment from "moment";

const CheckoutMain = () => {
  const router = useRouter();
  const navigateBasedOnStatus = useStatusNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDetailsOpen,
    onOpen: onDetailsOpen,
    onOpenChange: onDetailsOpenChange,
  } = useDisclosure();
  const storeRestaurantData =
    typeof window !== "undefined"
      ? localStorage.getItem("restaurantData")
      : null;
  const storeTableData =
    typeof window !== "undefined" ? localStorage.getItem("tableData") : null;
  const storeCartData =
    typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
  const storeInstructionsData =
    typeof window !== "undefined" ? localStorage.getItem("instructions") : null;
  const initialRestaurantData = storeRestaurantData
    ? JSON.parse(storeRestaurantData)
    : null;
  const initialTableData = storeTableData ? JSON.parse(storeTableData) : null;
  const initialCartData = storeCartData ? JSON.parse(storeCartData) : [];
  const initialInstructionsData = storeInstructionsData
    ? JSON.parse(storeInstructionsData)
    : null;
  const [restaurantData, setRestaurantData] = useState(initialRestaurantData);
  const [tableData, setTableData] = useState(initialTableData);
  const [cartItems, setCartItems] = useState(initialCartData);
  const [mainInstructions, setMainInstructions] = useState(
    initialInstructionsData
  );
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    mobile: "",
  });
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useSmallScreen();

  if (!restaurantData || !tableData || !cartItems) {
    return notFound();
  }

  const customerStatus =
    typeof window !== "undefined" ? localStorage.getItem("status") : null;

  if (customerStatus !== "checkout") {
    navigateBasedOnStatus();
  }

  const handleCartChange = (menuItem, quantity) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex(
        (item) => item.id === menuItem.id
      );
      let updatedCartItems;

      if (itemIndex !== -1) {
        updatedCartItems = [...prevCartItems];
        updatedCartItems[itemIndex].quantity = quantity;
        updatedCartItems = updatedCartItems.filter((item) => item.quantity > 0);
      } else {
        updatedCartItems = [...prevCartItems, { ...menuItem, quantity }];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return updatedCartItems;
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const gst = restaurantData?.gst_percentage;

  const gstAmount = (totalPrice * gst) / 100;
  const grandTotal = totalPrice + gstAmount;

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/\s{2,}/.test(value)) {
      setNameError("Double spaces are not allowed");
    } else {
      setNameError("");
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        name: value,
      }));
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/\s{2,}/.test(value)) {
      setMobileError("Double spaces are not allowed");
    } else {
      setMobileError("");
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        mobile: value,
      }));
    }
  };
  const insertOrder = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const { data: maxOrderData, error: maxOrderError } = await supabase
        .from("orders")
        .select("order_id")
        .eq("restaurant_id", restaurantData.id)
        .order("order_id", { ascending: false })
        .limit(1);
      if (maxOrderError) throw maxOrderError;

      let newOrderId = "00001";
      if (maxOrderData && maxOrderData.length > 0) {
        const maxOrderId = maxOrderData[0].order_id;
        newOrderId = String(parseInt(maxOrderId) + 1).padStart(5, "0");
      }
      const { data, error } = await supabase
        .from("orders")
        .insert([
          {
            restaurant_id: restaurantData.id,
            table_id: tableData.id,
            user_id: userId,
            fooditem_ids: cartItems,
            instructions: mainInstructions,
            total_amount: totalPrice,
            tax_amount: gstAmount,
            grand_amount: grandTotal,
            order_id: newOrderId,
          },
        ])
        .select("id");
      if (error) throw error;
      if (data) {
        return data;
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const updateUser = async () => {
    if (!personalDetails.name) {
      setNameError("Name is required");
      return;
    }
    if (!personalDetails.mobile) {
      setMobileError("Mobile number is required");
      return;
    }
    if (nameError || mobileError) return;

    try {
      const userId = localStorage.getItem("userId");
      const { data, error } = await supabase
        .from("users")
        .update({
          name: personalDetails.name,
          mobile: personalDetails.mobile,
        })
        .eq("id", userId)
        .select("id");

      if (error) {
        throw error;
      }
      if (data) {
        return data;
      }
    } catch (error) {
      console.error("Error creating user or order:", error);
    }
  };

  const updateVisitor = async () => {
    try {
      const startDate = moment().startOf("day").format("YYYY-MM-DD");
      const endDate = moment()
        .add(1, "day")
        .startOf("day")
        .format("YYYY-MM-DD");

      const { data: existingRecord, error: fetchError } = await supabase
        .from("visitors")
        .select("id, place_order_count")
        .eq("restaurant_id", restaurantData.id)
        .gte("created_at", startDate)
        .lt("created_at", endDate)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") throw fetchError;

      let count = 1;
      let upsertData;

      if (existingRecord) {
        count = parseInt(existingRecord.place_order_count) + 1;
        upsertData = { id: existingRecord.id, place_order_count: count };
      } else {
        upsertData = {
          restaurant_id: restaurantData.id,
          place_order_count: count,
        };
      }

      const { data, error: upsertError } = await supabase
        .from("visitors")
        .upsert(upsertData, { onConflict: ["id"] })
        .select("id");

      if (upsertError) throw upsertError;

      if (data) return data;
    } catch (error) {
      console.error("Error updating visitors:", error);
    }
  };

  const insertMessage = async () => {
    const message = `A new order has been placed at Table No. ${tableData?.table_no}`;
    const sub_message = "For more details, please visit the order list page.";
    const userId = localStorage.getItem("userId");

    const { data, error } = await supabase
      .from("messages")
      .insert({
        table_id: tableData?.id,
        restaurant_id: restaurantData?.id,
        user_id: userId,
        order_id: null,
        waiter_id: null,
        message: message,
        sub_message: sub_message,
        is_read: false,
        user_read: true,
      })
      .select("id");
    if (error) {
      return console.error(error);
    }
    if (data) {
      return data;
    }
  };

  const updateTable = async (id) => {
    try {
      const { data, error } = await supabase
        .from("tables")
        .update({
          order_id: id,
        })
        .eq("id", tableData.id)
        .select("id");

      if (error) {
        throw error;
      }
      if (data) {
        return data;
      }
    } catch (error) {
      console.error("Error updating table:", error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const [userResponse, orderResponse, visitorsResponse, messageResponse] =
        await Promise.all([
          updateUser(),
          insertOrder(),
          updateVisitor(),
          insertMessage(),
        ]);

      if (
        !userResponse ||
        !orderResponse ||
        !visitorsResponse ||
        !messageResponse
      ) {
        throw new Error("Failed to create order");
      } else {
        const result = await updateTable(orderResponse[0].id);
        if (result) {
          localStorage.setItem("orderId", orderResponse[0].id);
          localStorage.setItem("status", "preparing");
          router.replace("/preparing");
          localStorage.removeItem("cartItems");
          localStorage.removeItem("restaurantData");
          localStorage.removeItem("instructions");
        }
      }
    } catch (error) {
      console.error("Error updating:", error);
    } finally {
      onDetailsOpenChange(false);
      setLoading(false);
    }
  };

  if (!isSmallScreen) {
    return <ScreenError />;
  }

  return (
    <>
      <Header restaurantData={restaurantData} tableData={tableData} />
      <ItemList menuItems={cartItems} handleCartChange={handleCartChange} />
      <Preferences
        mainInstructions={mainInstructions}
        onOpen={onOpen}
        tableId={tableData?.id}
        restaurantName={restaurantData?.unique_name}
      />
      <Bill
        totalPrice={totalPrice}
        gstAmount={gstAmount}
        grandTotal={grandTotal}
      />
      <CheckoutButton
        onOpen={onDetailsOpen}
        restaurantData={restaurantData}
        tableData={tableData}
        loading={loading}
      />
      <Instructions
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        mainInstructions={mainInstructions}
        setMainInstructions={setMainInstructions}
      />
      <AddDetails
        isOpen={isDetailsOpen}
        onOpenChange={onDetailsOpenChange}
        setPersonalDetails={setPersonalDetails}
        personalDetails={personalDetails}
        handleNameChange={handleNameChange}
        handleMobileChange={handleMobileChange}
        handleSubmit={handleSubmit}
        nameError={nameError}
        mobileError={mobileError}
        loading={loading}
      />
    </>
  );
};

export default CheckoutMain;
