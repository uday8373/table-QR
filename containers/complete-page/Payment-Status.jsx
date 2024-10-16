import Happy from "@/components/icons/happy";
import { Button, Chip } from "@nextui-org/react";
import {
  BookCheck,
  CheckIcon,
  CircleCheckBig,
  CircleDashed,
  Download,
  Hourglass,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Invoice from "./Invoice";

export default function PaymentStatus({ orderData, isClaimed }) {
  return (
    <section id="thankyou" className="w-full px-5">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-default-700 font-medium text-medium mt-3">
          Order Details
        </h2>
        <div className="w-full h-full bg-default-100 p-3 rounded-large flex justify-between items-center">
          <div>
            <h3 className="text-default-500 flex items-center gap-1 font-medium text-small">
              Total Bill Amount
            </h3>
            <h2 className="text-primary text-xl font-bold">
              ₹ {orderData?.grand_amount.toFixed(2)}
            </h2>
          </div>
          <Chip
            radius="sm"
            startContent={
              orderData?.is_paid ? (
                <CircleCheckBig size={18} />
              ) : (
                <Hourglass size={18} className="animate-pulse" />
              )
            }
            variant="solid"
            color={orderData?.is_paid ? "success" : "danger"}
            size="lg"
            className="gap-1 text-white font-bold"
          >
            {orderData?.is_paid ? "paid" : "Unpaid"}
          </Chip>
        </div>
        <h2 className="text-default-700 font-medium text-medium mt-1">
          Payment Preparence
        </h2>

        <div
          className={`w-full h-full bg-default-100 px-3 py-5 rounded-large flex justify-center items-center flex-col gap-3 mb-3 ${
            isClaimed && "mb-40"
          }`}
        >
          <h3 className="text-xl font-bold uppercase text-secondary">
            Scan to Pay
          </h3>
          <Image
            src={orderData?.restaurant_id?.payment_qr}
            alt="PaymentQR"
            width={1080}
            height={1080}
            className="w-52 border-8 rounded-lg border-background"
          />
          <h5 className="text-small text-default-700 text-center">
            Scan this QR code with your mobile payment app to complete the
            transaction
          </h5>
          <Invoice orderData={orderData} />
        </div>
      </div>
    </section>
  );
}
