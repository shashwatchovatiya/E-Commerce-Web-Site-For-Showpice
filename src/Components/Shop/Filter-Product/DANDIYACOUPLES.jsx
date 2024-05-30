/* eslint-disable no-unused-vars */

// import React from 'react'

// function DandiyaCouple() {
//   return (
//     <div>DANDIYACOUPLES</div>
//   )
// }

// export default DandiyaCouple

/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'

import img19 from "../../../../Image/Changes/DANDIYA COUPLES/1.jpg";
import img20 from "../../../../Image/Changes/DANDIYA COUPLES/2.jpg";
import img21 from "../../../../Image/Changes/DANDIYA COUPLES/3.jpg";
import img22 from "../../../../Image/Changes/DANDIYA COUPLES/4.jpg";
import img23 from "../../../../Image/Changes/DANDIYA COUPLES/5.jpg";
import img24 from "../../../../Image/Changes/DANDIYA COUPLES/6.jpg";
import img25 from "../../../../Image/Changes/DANDIYA COUPLES/7.jpg";


import AOS from "aos";
import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"

import Buy from "../../../../Image/Logo/Buynow.png";



import Pagination from '../Pagination'

const ShopingList12 = [
  {
    id: 19,
    img: img19,
    heading: "DANDIYA COUPLES-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  {
    id: 20,
    img: img20,
    heading: "DANDIYA COUPLES-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  {
    id: 21,
    img: img21,
    heading: "DANDIYA COUPLES-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  {
    id: 22,
    img: img22,
    heading: "DANDIYA COUPLES-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  {
    id: 23,
    img: img23,
    heading: "DANDIYA COUPLES-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  {
    id: 24,
    img: img24,
    heading: "DANDIYA COUPLES-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  {
    id: 25,
    img: img25,
    heading: "DANDIYA COUPLES-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-21`,
  },
  // {
  //     id: 8,
  //     img: img8,
  //     heading: "Old Musice Player",
  //     title: "1980's Musice Player ",
  //     price: 5000.00,
  //     orignialPrice: 3500,
  //     link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`
  // },
];


function DandiyaCouple() {

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

              <div className="flex flex-col space-y-3 justify-between bg-gray-200 p-4 w-full transition-all duration-500 ease-in-out">
                {/* <img src={logo} alt="" className="w-24" /> */}
                <h2 className="text-zinc-600">FameAdda</h2>
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
                  <p className="text-sm font-bold line-through text-red-600">
                    {data.orignialPrice} RS
                  </p>
                </div>
                <Link
                  to={data.link}
                  target="_blank"
                  className="w-full  justify-center bg-white text-lg text-[#B88E2F] py-1 px-6 rounded flex items-center gap-2"
                >
                  <button className=" p-0 m-0">Buy on</button>
                  <span className="flex justify-center items-center ">
                    <img src={Buy} alt="" className="w-20 mt-2" />
                  </span>
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

export default DandiyaCouple