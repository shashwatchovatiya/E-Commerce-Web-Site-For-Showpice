/* eslint-disable no-unused-vars */


import React from "react";
import Buy from "../../../Image/Logo/Buynow.png";
import img1 from "../../../Image/T-Shirt/Black.jpg";
import img2 from "../../../Image/T-Shirt/Kathai.jpg";
import img3 from "../../../Image/T-Shirt/NaviBlue.jpg";
import img4 from "../../../Image/T-Shirt/OffGreen.jpg";
import img5 from "../../../Image/T-Shirt/Orange.jpg";
import img6 from "../../../Image/T-Shirt/S-color.jpg";
import img7 from "../../../Image/T-Shirt/White.jpg";
import img8 from "../../../Image/T-Shirt/Yellow.jpg";

import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const ImageListForOurProduct = [
  {
    id: 1,
    img: img1,
    heading: "Black T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 2,
    img: img2,
    heading: "Brown T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 3,
    img: img3,
    heading: "NaviBlue T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!   ",
    price: 70000.0,
    orignialPrice: 13500,
  },
  {
    id: 4,
    img: img4,
    heading: "NaviBlue T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!   ",
    price: 5000.0,
    orignialPrice: 3500,
  },
  {
    id: 5,
    img: img5,
    heading: "Orange T-Shrit",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 6,
    img: img6,
    heading: "Gray T-Shrit",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping!",
    price: 25000.0,
    orignialPrice: 35000,
  },
  {
    id: 7,
    img: img7,
    heading: "White T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping! ",
    price: 35000.0,
    orignialPrice: 40000,
  },
  {
    id: 8,
    img: img8,
    heading: "Yellow T-Shirt",
    title:
      "Discover your perfect fit and style at unbeatable prices with our online t-shirt shopping! ",
    price: 5000.0,
    orignialPrice: 6300,
  },
];

function FuniroFurniture() {
  return (
    <div>
      <div className="text-center py-5 mt-28">
        <span className="text-xl md:text-3xl font-bold">Our Product </span>
      </div>
      <div className="conatiner mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {ImageListForOurProduct.map((data) => (
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
      <div className="flex justify-center items-center mt-16">
        <Link to="/shop">
          <button
            className="mt-4 px-4 py-2 rounded border border-[#B88E2F] h hover:bg-orange-500 hover:text-white transition duration-300"
            href=""
          >
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FuniroFurniture;
