import CallWaiter from "@/components/modal/Call-Waiter";
import supabase from "@/config/supabase";
import { Button, useDisclosure } from "@nextui-org/react";
import { ConciergeBell } from "lucide-react";
import React, { useEffect, useState } from "react";

const WaiterStatus = ({ orderData }) => {
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
    const message = `Please call the waiter ${orderData?.waiters?.name} for table no: ${orderData?.table_id?.table_no}`;

    const { data, error } = await supabase
      .from("messages")
      .insert({
        table_id: orderData?.table_id?.id,
        restaurant_id: orderData?.restaurant_id?.id,
        message: message,
      })
      .select();
    if (error) {
      return console.log(error);
    } else {
      onWaiterOpen();
      setIsCalling(true);
      setCountdown(120);
    }
  };
  return (
    <section id="waiter_status" className="mt-5 px-5">
      <div className="w-full flex py-4 bg-default-100 rounded-large gap-4 px-3">
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex justify-center items-center">
            <ConciergeBell size={24} className="text-primary mb-1" />
          </div>
        </div>
        <div className="col-span-5 flex gap-0.5 justify-between w-full">
          <div>
            <h2 className="text-medium font-medium text-default-700">
              Assigned Waiter :
            </h2>
            <h2 className="text-small text-default-600">
              {orderData?.waiters?.name ? (
                orderData?.waiters?.name
              ) : (
                <span className="animate-pulse">pending ...</span>
              )}
            </h2>
          </div>
          <div className="flex items-center">
            <Button
              size="sm"
              variant="solid"
              color="primary"
              onClick={handleCallWaiter}
              isDisabled={isCalling}
            >
              {isCalling
                ? `${Math.floor(countdown / 60)}:${(countdown % 60)
                    .toString()
                    .padStart(2, "0")}`
                : "Call Waiter"}
            </Button>
          </div>
        </div>
      </div>
      <CallWaiter isOpen={isWaiterOpen} onOpenChange={onWaiterOpenChange} />
    </section>
  );
};

export default WaiterStatus;
