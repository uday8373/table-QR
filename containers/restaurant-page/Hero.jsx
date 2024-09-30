"use client";
import ProfileSidebar from "@/components/drawer/Profile-Sidebar";
import { Avatar, Button } from "@nextui-org/react";
import { AlignLeft, X } from "lucide-react";
import React, { useState } from "react";

const Hero = ({ restaurantData, tableData, userId }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const formatTableNumber = (tableNo) => {
    return tableNo && tableNo < 10 ? `0${tableNo}` : tableNo;
  };

  return (
    <>
      <section
        id="restaurant_hero_section"
        className="pl-5 relative bg-background z-50 border-b"
      >
        <div className="flex w-full items-center justify-between relative">
          <div className="flex gap-2 items-center">
            <Button
              size="sm"
              variant="light"
              color="default"
              isIconOnly
              className="w-fit"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <AlignLeft />}
            </Button>
            <Avatar
              src={restaurantData?.logo}
              className="w-8 h-8 text-large text-white"
            />
            <h1 className="text-medium font-semibold">
              {restaurantData.restaurant_name.length > 15
                ? `${restaurantData.restaurant_name.slice(0, 15)}...`
                : restaurantData.restaurant_name}
            </h1>
          </div>
          <div className="bg-secondary flex flex-col px-4 py-2 justify-center items-center h-full">
            <h3 className="text-sm font-bold text-white">TABLE</h3>
            <p className="text-3xl font-black tracking-wider text-white leading-7">
              {formatTableNumber(tableData?.table_no)}
            </p>
          </div>
        </div>
      </section>

      <ProfileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        tableId={tableData?.id}
        restaurantId={restaurantData?.id}
        userId={userId}
      />
    </>
  );
};

export default Hero;
