// import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";

import ScrollToTop from "../ScrollToTop"
import Heading from "../Shop/Heading"
import EmailValidation from "./EmailValidation"

function Contact() {
  const handleTop = () => {
    window.scrollTo({ top: 0, Left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <ScrollToTop />
      {/* Heding */}
      <Heading />

      {/* Email  */}
      <EmailValidation />
      <button className="bottom-12 right-7 fixed  z-50 " onClick={handleTop}>
        <FaArrowAltCircleUp className="text-orange-300 text-5xl animate-bounce" />
      </button>
    </div>
  );
}

export default Contact