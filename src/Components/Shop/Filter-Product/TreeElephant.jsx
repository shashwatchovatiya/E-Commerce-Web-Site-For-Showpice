/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import img1 from '../../../../Image/Changes/Tree elephant/01.jpg'
import img2 from '../../../../Image/Changes/Tree elephant/02.jpg'
import img3 from '../../../../Image/Changes/Tree elephant/03.jpg'
import img4 from '../../../../Image/Changes/Tree elephant/04.jpg'
import img5 from '../../../../Image/Changes/Tree elephant/05.jpg'
import img6 from '../../../../Image/Changes/Tree elephant/06.jpg'



import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";

const ShopingList12 = [
  {
    id: 1,
    img: img1,
    heading: "Budhha Showpice",
    title: "Stylish Budha ShowPice",
    price: 2500.00,
    orignialPrice: 3500,
    link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`
  },
  {
    id: 2,
    img: img2,
    heading: "Old Cemara Showpice",
    title: "Stylish Old Camera",
    price: 2500.00,
    orignialPrice: 3500,
    link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`
  },
  {
    id: 3,
    img: img3,
    heading: "Coper Lady Face",
    title: "Stylish Coper Lady Face   ",
    price: 70000.00,
    orignialPrice: 13500,
    link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`
  },
  {
    id: 4,
    img: img4,
    heading: "Dear Showpice",
    title: "for Hall stylish Decoration",
    price: 5000.00,
    orignialPrice: 3500,
    link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`
  },
  {
    id: 5,
    img: img5,
    heading: "Dolphine",
    title: "Creating Mirror Dolphine",
    price: 2500.00,
    orignialPrice: 3500,
    link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`
  },
  {
    id: 6,
    img: img6,
    heading: "Stylish Kirshna",
    title: "God Of the World Showpice ",
    price: 2500.00,
    orignialPrice: 3500,
    link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`
  },
  // 

]

function TreeElephant() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };



  return (
  <>
      {/* Heading Section */}
      <Heading />

      {/* Filter path */}
      <FilterForShopping />
      <div className="conatiner mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {ShopingList12.map((data) => (
            <div
              className="group relative flex flex-col justify-center items-center transition-all duration-500 ease-in-out"
              key={data.id}
            >
              <img
                src={data.img}
                alt={data.heading}
                className="w-full h-64 object-cover transition-transform duration-500"
              />
              <div className="flex flex-col justify-between bg-gray-200 space-y-2 p-4 w-full transition-all duration-500 ease-in-out">
                <h2 className="text-lg font-bold">{data.heading}</h2>
                <p className="text-sm">{data.title}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold">{data.price} RS</p>
                  <p className="text-sm font-bold line-through">{data.orignialPrice} RS</p>
                </div>
              </div>
              <div className="absolute hover-Property inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 opacity-0 group-hover:opacity-100 transform translate-y-3/4 group-hover:translate-y-0 group-hover:mb-40 transition-all duration-500 ease-in-out">
                <div className="flex justify-center items-center">
                  <Link to={data.link} target='_blank'>
                    <button className="bg-[#F9F1E7] text-[#B88E2F] py-2 px-6 rounded">Buy Now</button>
                  </Link>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => {
                      handleAddToCart(data);
                      alert("Adding cart success Full ");
                    }
                    }

                    className="bg-[#F9F1E7] text-[#B88E2F] py-2 px-6 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center justify-around">
                  <p className="text-sm mt-2 flex gap-2 items-center text-white"><IoShareSocial /> Share</p>
                  <p className="text-sm mt-2 flex gap-2 items-center text-white"><VscArrowSwap /> Compare</p>
                  <p className="text-sm mt-2 flex gap-2 items-center text-white"><IoIosHeartEmpty /> Like</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div >
        </>
  )
}

export default TreeElephant

