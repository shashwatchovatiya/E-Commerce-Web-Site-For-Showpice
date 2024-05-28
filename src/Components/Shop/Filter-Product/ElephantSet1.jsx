

/* eslint-disable no-unused-vars */
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import img1 from '../../../../Image/Changes/ELEPHANT IN ELEPHANT BLACK RED/01.jpg'
import img2 from '../../../../Image/Changes/ELEPHANT IN ELEPHANT BLACK RED/02.jpg'
import AOS from "aos";


import Pagination from '../Pagination'

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
 

]

function ElephantSet1() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };


  useEffect(() => {
    AOS.init({
      duration: 500, // You can set a default duration for the animations
    });
  }, []);

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
              className="group relative flex flex-col justify-center items-center transition-all duration-500 ease-in-out  overflow-hidden"
              key={data.id}
            >
              <img
                src={data.img}
                alt={data.heading}
                className="w-full h-64 object-fill transform transition-transform duration-500 group-hover:scale-110 "
                data-aos="fade-up"
                // data-aos-delay={data.aosDelay}
              />
              <div className="flex flex-col justify-between bg-gray-200 space-y-2 p-4 w-full transition-all duration-500 ease-in-out">
                <h2
                  className="text-lg font-bold"
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                >
                  {data.heading}
                </h2>

                <div
                  className="flex justify-between items-center"
                  data-aos="fade-up"
                  //   data-aos-delay={data.aosDelay}
                >
                  <p className="text-sm font-bold">{data.price} RS</p>
                  <p className="text-sm font-bold line-through">
                    {data.orignialPrice} RS
                  </p>
                </div>
                <Link
                  to={data.link}
                  target="_blank"
                  className="w-full flex justify-center"
                >
                  <button className="bg-white w-[90%] text-[#B88E2F] py-2 px-6 rounded">
                    Buy on Filpkart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default ElephantSet1