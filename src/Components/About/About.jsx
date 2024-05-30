// import React from 'react';
// import { Link } from 'react-router-dom';
import Heading from '../Shop/Heading';
import HeroSectionForAbout from './HeroSectionForAbout';
import AditionalInformation from "../Shop/AditionalInformation"
// import Testimonials from './Testimoinal';
import LatestProduct from './LatestProduct';
import AboutIcons from './AboutIcons';
import ScrollToTop from '../ScrollToTop';
import { FaArrowAltCircleUp } from "react-icons/fa";


export default function About() {
    const handleTop = () => {
      window.scrollTo({ top: 0, Left: 0, behavior: "smooth" });
    };
  return (
    <>
      <ScrollToTop />
      {/* Heding */}
      <Heading />

      {/* Top Section */}
      <div className="text-4xl text-center font-bold py-10">About Us</div>
      {/* Slidier Animation */}
      <HeroSectionForAbout />

      {/* Icon */}
      <AboutIcons />

      {/* Latest Product */}
      <LatestProduct />

      {/* AditionInformation */}
      <AditionalInformation />
      <button className="bottom-12 right-7 fixed  z-50 " onClick={handleTop}>
        <FaArrowAltCircleUp className="text-orange-300 text-5xl animate-bounce" />
      </button>
    </>
  );
}
