import CallWaiter from "@/components/modal/Call-Waiter";
import supabase from "@/config/supabase";
import { Button, useDisclosure } from "@nextui-org/react";
import { ConciergeBell, UserPen } from "lucide-react";
import React, { useState, useEffect } from "react";

const CheckoutButton = ({ onOpen, tableData, restaurantData, loading }) => {
  const {
    isOpen: isWaiterOpen,
    onOpen: onWaiterOpen,
    onOpenChange: onWaiterOpenChange,
  } = useDisclosure();
  const [isCalling, setIsCalling] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (isCalling && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCalling(false);
    }

    return () => clearInterval(timer);
  }, [isCalling, countdown]);

  const handleCallWaiter = async () => {
    const message = `Please call the waiter for table number: ${tableData?.table_no}`;

    const { data, error } = await supabase
      .from("messages")
      .insert({
        table_id: tableData?.id,
        restaurant_id: restaurantData?.id,
        message: message,
      })
      .select();
    if (error) {
      return console.error(error);
    } else {
      onWaiterOpen();
      setIsCalling(true);
      setCountdown(120);
    }
  };

  return (
    <section
      id="checkout_bottom"
      className="fixed bottom-0 backdrop-blur-xl shadow-small flex justify-center mx-auto w-full px-5 rounded-t-large"
    >
      <div className="py-5 gap-2 w-full grid grid-cols-2">
        <Button
          onPress={handleCallWaiter}
          isDisabled={isCalling}
          size="lg"
          variant="flat"
          aria-label="call waiter"
          className="text-small font-medium rounded-large"
          startContent={<ConciergeBell size={18} className="mb-1" />}
        >
          {isCalling
            ? `${Math.floor(countdown / 60)}:${(countdown % 60)
                .toString()
                .padStart(2, "0")}`
            : "Call Waiter"}
        </Button>
        <Button
          isLoading={loading}
          onPress={onOpen}
          size="lg"
          color="primary"
          className="text-small font-medium rounded-large"
          startContent={<UserPen size={18} className="mb-1" />}
        >
          Add Details
        </Button>
      </div>
      <CallWaiter isOpen={isWaiterOpen} onOpenChange={onWaiterOpenChange} />
    </section>
  );
};

export default CheckoutButton;
