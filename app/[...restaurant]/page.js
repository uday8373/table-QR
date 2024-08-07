import RestuarantMainPage from "@/containers/restaurant-page/Restaurant-Main";
import React from "react";

const page = ({ params }) => {
  const restaurantId = params.restaurant[0];
  const tableId = params.restaurant[1];

  return (
    <>
      <RestuarantMainPage restaurantId={restaurantId} tableId={tableId} />
    </>
  );
};

export default page;
