import React from "react";
import { Button } from "@nextui-org/react";
import { ChevronsRight, Loader } from "lucide-react";

const CartPopup = ({
  totalPrice,
  totalQuantity,
  handleCheckout,
  isLoading,
}) => {
  return (
    <section className="w-full relative overflow-hidden ">
      <div className="fixed bottom-0 backdrop-blur-xl z-50 w-full left-0 pt-3 pb-5 rounded-t-3xl shadow-container">
        <div className="flex items-center justify-center w-full">
          <div className="w-full h-full flex-col max-w-screen-xl relative px-5">
            <div className="w-full h-full flex flex-col gap-3">
              <div className="w-full h-full flex justify-between">
                <div>
                  <h4 className="text-large font-medium">
                    Items: <span className="font-bold">{totalQuantity}</span>
                  </h4>
                </div>
                <div>
                  <div className="text-large font-medium flex items-center gap-1">
                    <h2>Total:</h2>

                    <h3 className="text-success-500 font-bold">
                      ₹{totalPrice.toFixed(2)}
                    </h3>
                  </div>
                </div>
              </div>
              <Button
                spinner={<Loader size={20} className="animate-spin" />}
                isLoading={isLoading}
                onClick={handleCheckout}
                size="lg"
                color="primary"
                className="font-semibold"
                endContent={<ChevronsRight />}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPopup;
