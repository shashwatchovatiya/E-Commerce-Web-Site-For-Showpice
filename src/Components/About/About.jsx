// import React from 'react';
// import { Link } from 'react-router-dom';
import Heading from '../Shop/Heading';
import HeroSectionForAbout from './HeroSectionForAbout';
import AditionalInformation from "../Shop/AditionalInformation"
// import Testimonials from './Testimoinal';
import LatestProduct from './LatestProduct';
import AboutIcons from './AboutIcons';



export default function About() {
  return (
    <>
      {/* Heding */}
      <Heading />

      {/* Top Section */}
      <div className="text-4xl text-center font-bold py-10">
        About Us
      </div>
      {/* Slidier Animation */}
      <HeroSectionForAbout />

      {/* Icon */}
      <AboutIcons />

      {/* Latest Product */}
      <LatestProduct />
      
      {/* AditionInformation */}
      <AditionalInformation />
    </>
  );
}
