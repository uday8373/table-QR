"use client";
import {
  fetchCategoriesData,
  fetchIsBooked,
  fetchRestaurantData,
  fetchRestaurantMenuData,
  fetchSpecialMenuData,
  fetchTableData,
  getSession,
  updateVisitorCheckout,
  updateVisitors,
} from "@/apis/restaurantApi";
import ScreenError from "@/components/pages/Screen-Error";
import useSmallScreen from "@/hooks/useSmallScreen";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "./Hero";
import { Button, Spinner, table, useDisclosure } from "@nextui-org/react";
import { notFound } from "next/navigation";
import BookTable from "@/components/modal/Book-Table";
import SpecialMenu from "./Special-Menu";
import CartPopup from "@/components/elements/Cart-Popup";
import FoodMenu from "./Food-Menu";
import useStatusNavigate from "@/hooks/useStatusRedirect";
import SadIcon from "@/components/icons/sad";
import { ArrowLeftFromLine } from "lucide-react";
import supabase from "@/config/supabase";
import { clearLocalStorage } from "@/hooks/clearLocalStorage";

const RestuarantMainPage = ({ restaurantId, tableId }) => {
  const router = useRouter();
  const navigateBasedOnStatus = useStatusNavigate();
  const restaurantName = restaurantId;
  const storedCartItems =
    typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
  const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  const isSmallScreen = useSmallScreen();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const [tableData, setTableData] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [notFoundError, setNotFoundError] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [specialMenuData, setSpecialMenuData] = useState([]);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [menuItems, setMenuItems] = useState([]);
  const [maxItems, setMaxItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dataLoading, setDataLoading] = useState(true);
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const [selfBooked, setSelfBooked] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const storeIsBooked =
    typeof window !== "undefined" ? localStorage.getItem("isBooked") : null;
  const initialIsBooked = storeIsBooked ? true : false;
  const [isBooked, setIsBooked] = useState(initialIsBooked);

  const pageSize = 10;

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const customerStatus =
    typeof window !== "undefined" ? localStorage.getItem("status") : null;

  const localTableId =
    typeof window !== "undefined" ? localStorage.getItem("tableId") : null;

  const checkUserSessions = async () => {
    if (tableId !== localTableId || !userId) {
      return;
    }

    const result = await getSession(userId);
    const isReload = false;

    if (result.count < 1) {
      await handleLogout(isReload);
      return;
    }
    if (customerStatus) {
      navigateBasedOnStatus();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        const [tableResponse, restaurantResponse] = await Promise.all([
          fetchTableData(tableId),
          fetchRestaurantData(restaurantName),
        ]);

        if (!tableResponse || !restaurantResponse) {
          setNotFoundError(true);
          return;
        }

        setTableData(tableResponse);
        setRestaurantData(restaurantResponse);

        if (!isBooked) {
          await updateVisitors(restaurantResponse.id);
        }

        if (tableResponse.restaurant_id !== restaurantResponse.id) {
          setNotFoundError(true);
        }
        // Redirect Algorithm
        if (isBooked) {
          if (isBooked && !tableResponse.is_booked) {
            const isReload = false;
            await handleLogout(isReload);
            return;
          }
          const isDifferentTable =
            !tableResponse.is_booked ||
            localTableId !== tableResponse.id ||
            tableResponse.user_id !== userId;

          if (isDifferentTable) {
            setSelfBooked(true);
            return;
          }

          await checkUserSessions();
        } else if (tableResponse.is_booked) {
          setAlreadyBooked(true);
          return;
        }

        const [categoryResponse, specialMenuResponse, menuResponse] =
          await Promise.all([
            fetchCategoriesData(restaurantResponse.id),
            fetchSpecialMenuData(restaurantResponse.id, pageSize),
            fetchRestaurantMenuData(
              restaurantResponse.id,
              currentPage,
              selectedCategory,
              pageSize
            ),
          ]);

        setCategoryData(categoryResponse);
        setSpecialMenuData(specialMenuResponse.data);
        setMenuItems((prevItems) =>
          currentPage === 1
            ? menuResponse.data
            : [...prevItems, ...menuResponse.data]
        );
        setMaxItems(menuResponse.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setDataLoading(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    fetchData();
  }, [
    tableId,
    restaurantName,
    localTableId,
    currentPage,
    selectedCategory,
    pageSize,
  ]);

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

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    setIsCheckoutLoading(true);
    const result = await updateVisitorCheckout(restaurantData.id);
    if (result) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("tableData", JSON.stringify(tableData));
      localStorage.setItem("restaurantData", JSON.stringify(restaurantData));
      localStorage.setItem("status", "checkout");
      router.push("/checkout");
    }
    setIsCheckoutLoading(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLogout = async (isReload = true) => {
    try {
      const updateTablePromise = await supabase
        .from("tables")
        .update({
          is_booked: false,
          persons: null,
          order_id: null,
          user_id: null,
        })
        .eq("id", localTableId)
        .select();

      const updateUserPromise = await supabase
        .from("users")
        .update({ is_active: false, closed_at: new Date().toISOString() })
        .eq("id", userId)
        .select();

      const [
        { data: tableData, error: tableError },
        { data: userData, error: userError },
      ] = await Promise.all([updateTablePromise, updateUserPromise]);

      if (tableError) throw tableError;
      if (userError) throw userError;

      await clearLocalStorage();
      setIsBooked(false);
      if (isReload) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!isSmallScreen) {
    return <ScreenError />;
  }
  if (notFoundError) {
    return notFound();
  }

  if (alreadyBooked) {
    return (
      <div className="w-full h-svh flex justify-center items-center flex-col gap-8">
        <SadIcon size={150} />
        <h2 className="text-center text-default-700">
          This table is already booked.
          <br /> Please try to book a different table.
        </h2>
        <Button
          onClick={() => router.replace("/")}
          color="primary"
          startContent={<ArrowLeftFromLine size={20} />}
        >
          Back to Home
        </Button>
      </div>
    );
  }
  if (selfBooked) {
    return (
      <div className="w-full h-svh flex justify-center items-center flex-col gap-8 px-5">
        <SadIcon size={150} />
        <h2 className="text-center text-default-700">
          {`You have already booked a table.`}
          <br /> Would you like to keep this reservation?
        </h2>
        <div className="w-full flex justify-between items-center">
          <Button
            variant="light"
            onClick={() =>
              router.replace(`/${restaurantData?.unique_name}/${localTableId}`)
            }
            color="success"
          >
            Continue Reservation
          </Button>
          <Button onClick={handleLogout} color="danger">
            Close Session
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-svh flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <Hero
          tableData={tableData}
          restaurantData={restaurantData}
          userId={userId}
        />
        <SpecialMenu
          specialMenuData={specialMenuData}
          onCartChange={handleCartChange}
          cartItems={cartItems}
        />
        <FoodMenu
          categoryData={categoryData}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          menuItems={menuItems}
          onCartChange={handleCartChange}
          cartItems={cartItems}
          maxItems={maxItems}
          onLoadMore={handleLoadMore}
          dataLoading={dataLoading}
        />
        {!isBooked && (
          <BookTable
            isOpen={!isBooked}
            onOpenChange={onOpenChange}
            setIsBooked={setIsBooked}
            tableId={tableId}
            restaurantId={restaurantData.id}
            tableNo={tableData.table_no}
          />
        )}
        {cartItems.length !== 0 && (
          <CartPopup
            totalPrice={totalPrice}
            totalQuantity={totalQuantity}
            handleCheckout={handleCheckout}
            isLoading={isCheckoutLoading}
          />
        )}
      </>
    );
  }
};
export default RestuarantMainPage;
