import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Image from "next/image";
export default function OrderPreview({ isOpen, onOpenChange, orderData }) {
  return (
    <>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Your Order Details
              </ModalHeader>
              <ModalBody className="relative !p-0">
                <Divider />

                <Table
                  shadow="none"
                  removeWrapper={true}
                  hideHeader
                  aria-label="Example static collection table"
                >
                  <TableHeader>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>QTY</TableColumn>
                    <TableColumn>Total</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {orderData.fooditem_ids.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="flex items-center gap-2">
                          <Image
                            src={item.image}
                            alt={item.food_name}
                            width={100}
                            height={100}
                            className="w-10 h-10 rounded-full object-cover"
                          />{" "}
                          {item.food_name}
                        </TableCell>
                        <TableCell> x {item.quantity}</TableCell>
                        <TableCell>
                          ₹ {(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter className="w-full flex flex-col !p-0 ">
                <Divider />
                <div className="pr-6 pl-4 pb-4 flex flex-col items-center  w-full gap-2">
                  <div className="flex w-full items-center justify-between">
                    <h3 className=" text-default-900 font-medium ">Subtotal</h3>
                    <h3>₹ {orderData?.total_amount.toFixed(2)}</h3>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h3 className=" text-default-900 font-medium">GST</h3>
                    <h3>₹ {orderData?.tax_amount.toFixed(2)}</h3>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h3 className=" text-default-900 font-medium text-lg">
                      Total
                    </h3>
                    <h3>₹ {orderData?.grand_amount.toFixed(2)}</h3>
                  </div>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
