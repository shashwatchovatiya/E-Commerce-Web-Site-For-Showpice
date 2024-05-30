/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import bgImage from "../../../Image/Landing-Page/background-1.png";
// import BrowserRang from './ProductList'
import FuniroFurniture from "./FuniroFurniture";
import OurProduct from "./OurProduct";
import Testimorinal from "./Testimorinal";
import AOS from "aos";
import Categories from "./Categories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { FaArrowAltCircleUp } from "react-icons/fa";

import Image1 from "../../../Image/HomePage-Slider/11.jpeg";
import Image2 from "../../../Image/HomePage-Slider/12.jpeg";
import Image3 from "../../../Image/HomePage-Slider/13.jpeg";
import Image4 from "../../../Image/HomePage-Slider/14.jpeg";

import Image10 from "../../../Image/HomePage-Slider/1.jpg";
import Image11 from "../../../Image/HomePage-Slider/2.webp";
import Image12 from "../../../Image/HomePage-Slider/3.jpg";
// import Image14 from "../../../Image/HomePage-Slider/4.jpg";

import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Know More About Us? ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 2,
    img: Image2,
    title: "Know More About Product?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 3,
    img: Image3,
    title: "Know More About our team?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 4,
    img: Image4,
    title: "Know More About our team?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 5,
    img: Image10,
    title: "Know More About our team?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 4,
    img: Image11,
    title: "Know More About our team?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 4,
    img: Image12,
    title: "Know More About our team?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  // {
  //   id: 4,
  //   img: Image14,
  //   title: "Know More About our team?",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  // },
];

function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 500, // You can set a default duration for the animations
    });
  }, []);

  const handleTop = () => {
    window.scrollTo({top:0, Left:0,behavior:"smooth"});
  };

  var setting = {
    dots: true,
    arrows: false,
    infinite: true, // Corrected typo here
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <ScrollToTop />
      {/* First image section */}

      <Slider {...setting}>
        {ImageList.map((data) => (
          <div className="" key={data.id}>
            {/* <div className="grid grid-cols-1 "> */}
            {/* Text Content Section  */}

            {/* Image Content Section  */}
            <div className="">
              <div
                className="relative "
                data-aos="zoom-in"
                data-aos-once="true"
              >
                <img
                  src={data.img}
                  alt=""
                  className="md:w-full md:h-screen h-[70vh]    mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button className="bottom-12 right-7 fixed  z-50 " onClick={handleTop}>
        <FaArrowAltCircleUp className="text-orange-300 text-5xl animate-bounce" />
      </button>
      {/* Browser Section */}
      <Categories />

      {/* <BrowserRang /> */}

      {/* OurProducts Section */}
      <OurProduct />

      {/* Slider Section */}
      <Testimorinal />

      {/* FuniroFurniture */}
      {/* <FuniroFurniture /> */}
    </>
  );
}

export default LandingPage;
