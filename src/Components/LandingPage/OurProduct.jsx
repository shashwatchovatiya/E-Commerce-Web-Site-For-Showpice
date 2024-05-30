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

import img19 from "../../../Image/Changes/DANDIYA COUPLES/1.jpg";
import img29 from "../../../Image/Changes/elephant set of 2/H4add44c2abbd47619d63d4607eac4de49_2_11zon79376.jpg-magic-jckc.jpg";
import img51 from "../../../Image/Changes/GANESH ORANGE/3.jpg";
import img57 from "../../../Image/Changes/Ganesh T Light/002.jpg";
import img67 from "../../../Image/Changes/Goden Cycle/05.jpg";
import img74 from "../../../Image/Changes/Lion/5.webp";
import img79 from "../../../Image/Changes/Monk/51LVxT+DROL._AC_SL1081_.jpg";
import img82 from "../../../Image/Changes/pen Green Ganesh/02.jpg";
import Buy from "../../../Image/Logo/Buynow.png";
import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";


const ImageListForOurProduct = [
  {
    id: 19,
    img: img19,
    heading: "DANDIYA COUPLES-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 33,
    img: img29,
    heading: "Elephant Set - 2 product 6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 55,
    img: img51,
    heading: "Orange Ganesh-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 57,
    img: img57,
    heading: "Ganesh T-light -2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 67,
    img: img67,
    heading: "Golden Cycle -5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 74,
    img: img74,
    heading: "Lion-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 79,
    img: img79,
    heading: "Monk Showpice - 1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Figurines-Showpiece-Dashboard/dp/B0D3BRXNPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717060801&s=merchant-items&sr=1-1`,
  },
  {
    id: 86,
    img: img82,
    heading: "Pan Ganesh-2",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
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
      <div className="flex justify-center items-center my-16">
        <Link to="shop" >
          <button
            className="mt-4 px-4 py-2 rounded border border-[#B88E2F] h hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurProduct;
