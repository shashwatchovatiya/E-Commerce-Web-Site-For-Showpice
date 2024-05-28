/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import img1 from '../../../Image/Landing-Page/our-Product/image-1.png'
// import img2 from '../../../Image/Landing-Page/our-Product/image-2.png'
// import img3 from '../../../Image/Landing-Page/our-Product/image-3.png'
// import img4 from '../../../Image/Landing-Page/our-Product/image-4.png'
// import img5 from '../../../Image/Landing-Page/our-Product/image-5.png'
// import img6 from '../../../Image/Landing-Page/our-Product/image-6.png'
// import img7 from '../../../Image/Landing-Page/our-Product/image-7.png'
// import img8 from '../../../Image/Landing-Page/our-Product/image-8.png'
import AOS from "aos";

import img1 from "../../../Image/Landing-Page/Showpice/Budha.jpg";
import img2 from "../../../Image/Landing-Page/Showpice/camera.jpg";
import img3 from "../../../Image/Landing-Page/Showpice/CoperLadyFace.jpg";
import img4 from "../../../Image/Landing-Page/Showpice/Dear.jpg";
import img5 from "../../../Image/Landing-Page/Showpice/DollFine.jpg";
import img6 from "../../../Image/Landing-Page/Showpice/Kirshan.jpg";
import img7 from "../../../Image/Landing-Page/Showpice/RoyalElephant.jpg";
import img8 from "../../../Image/Landing-Page/Showpice/OldMusicPlayer.jpg";

import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

// const ImageListForOurProduct = [
//     {
//         id: 1,
//         img: img1,
//         heading: "Syltherine",
//         title: "Stylish cafe chair",
//         price: 2500.00,
//         orignialPrice: 3500
//     },
//     {
//         id: 2,
//         img: img2,
//         heading: "Leviosa",
//         title: "Stylish cafe chair",
//         price: 2500.00,
//         orignialPrice: 3500
//     },
//     {
//         id: 3,
//         img: img3,
//         heading: "Lolito",
//         title: "Luxury big sofa",
//         price: 70000.00,
//         orignialPrice: 13500
//     },
//     {
//         id: 4,
//         img: img4,
//         heading: "Respria",
//         title: "Outdoor bar table and stool",
//         price: 5000.00,
//         orignialPrice: 3500
//     },
//     {
//         id: 5,
//         img: img5,
//         heading: "Grifo",
//         title: "Night lampe For bad Room & Living ",
//         price: 2500.00,
//         orignialPrice: 3500
//     },
//     {
//         id: 6,
//         img: img6,
//         heading: "Small Sofa",
//         title: "Divine Arts Wood 4 Seater Sofa Set ",
//         price: 25000.00,
//         orignialPrice: 35000
//     },
//     {
//         id: 7,
//         img: img7,
//         heading: "Big Soffa",
//         title: "Big Soffa for six seat",
//         price: 35000.00,
//         orignialPrice: 40000
//     },
//     {
//         id: 8,
//         img: img8,
//         heading: "Two seat sofa",
//         title: "Stylish sofa chair",
//         price: 5000.00,
//         orignialPrice: 6300
//     }
// ]

const ImageListForOurProduct = [
  {
    id: 1,
    img: img1,
    heading: "Budhha Showpice",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 2,
    img: img2,
    heading: "Old Cemara Showpice",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 3,
    img: img3,
    heading: "Coper Lady Face",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
  },
  {
    id: 4,
    img: img4,
    heading: "Dear Showpice",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
  },
  {
    id: 5,
    img: img5,
    heading: "Dolphine",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
  },
  {
    id: 6,
    img: img6,
    heading: "Stylish Kirshna",
    title: "God Of the World Showpice ",
    price: 25000.0,
    orignialPrice: 35000,
  },
  {
    id: 7,
    img: img7,
    heading: "Old Style Elephant",
    title: "Royal style Elephnat ",
    price: 35000.0,
    orignialPrice: 40000,
  },
  {
    id: 8,
    img: img8,
    heading: "Old Musice Player",
    title: "1980's Musice Player ",
    price: 5000.0,
    orignialPrice: 6300,
  },
];

function OurProduct() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // You can set a default duration for the animations
    });
  }, []);
  return (
    <div>
      <div className="text-center py-5">
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

export default OurProduct;
