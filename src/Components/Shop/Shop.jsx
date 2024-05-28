// import React from 'react'

import AditionalInformation from "./AditionalInformation"
import FilterForShopping from "./FilterForShopping"
import Heading from "./Heading"
// import Pagination from "./Pagination"
import PaginationRounded from "./Pagination2"
import RelatedTab from "./RelatedTab"
import ShopingList from "./ShopingList"

function Shop() {
  return (
   <>
    {/* Heading Section */}
    <Heading />

    {/* Filter path */}
    <FilterForShopping />

    <RelatedTab />

    {/* Shoping List  */}
    <ShopingList />



    {/* Pagination */}
    {/* <Pagination  /> */}
    <PaginationRounded />
    {/* AditionInformation */}
    <AditionalInformation />
   </>
  )
}

export default Shop