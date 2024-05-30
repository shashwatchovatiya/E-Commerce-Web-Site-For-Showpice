// import React from 'react'

import AditionalInformation from "./AditionalInformation"
import FilterForShopping from "./FilterForShopping"
import Heading from "./Heading"
// import Pagination from "./Pagination"
import PaginationRounded from "./Pagination2"
// import RelatedTab from "./RelatedTab"
import ShopingList from "./ShopingList"
import { FaArrowAltCircleUp } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop"

function Shop() {
  const handleTop = () => {
    window.scrollTo({ top: 0, Left: 0, behavior: "smooth" });
  };
  return (
    <>
      <ScrollToTop />
      {/* Heading Section */}
      <Heading />

      {/* Filter path */}
      <FilterForShopping />

      {/* <RelatedTab /> */}

      {/* Shoping List  */}
      <ShopingList />

      {/* Pagination */}
      {/* <Pagination  /> */}
      <PaginationRounded />
      {/* AditionInformation */}
      <AditionalInformation />

      <button className="bottom-12 right-7 fixed  z-50 " onClick={handleTop}>
        <FaArrowAltCircleUp className="text-orange-300 text-5xl animate-bounce" />
      </button>
    </>
  );
}

export default Shop