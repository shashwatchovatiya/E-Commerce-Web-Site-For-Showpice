/* eslint-disable no-unused-vars */

import React from "react";
import img from "../../../Image/footer.jpg";
import logo from "../../../Image/Landing-Page/House_Logos-05.png";

import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const FooterImg = {
  backgroundImage: `url(${img})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Footer() {
  return (
    <div
      style={FooterImg}
      className="w-full bg-gray-100 pb-36 dark:bg-gray-800 text-white mt-24"
    >
      <footer className=" conatiner grid md:grid-cols-4 py-10">
        {/* Logo */}
        <div className="pt-7 md:text-start text-center">
          <h1 className="font-bold text-2xl pb-12">Furniro</h1>
          <p>400 University Drive Suite 200 Coral</p> <p> Gables, </p>
          <p>FL 33134 USA</p>
        </div>

        {/* Get in touch */}
        <div className="md:pt-5 mx-auto md:mx-0 pt-10 flex flex-col items-start">
          <div className="">
            <h1 className=" text-white font-bold pb-12"> Links</h1>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex gap-2 ">
              <CiLocationOn className="w-10" />
              <Link
                to="https://maps.app.goo.gl/idbGtcbggVY9XJx47"
                target="_blank"
              >
                99, Nikol - Naroda Rd, behind POONAM BAKERY, Sakar Society,
                Nikol, Ahmedabad, Gujarat 382350
              </Link>
            </div>

            <div className="flex gap-2">
              <CiMobile3 />
              <Link to="tel:+919054044429" target="_blank">
                +91 9054044429
              </Link>
            </div>

            <div className="flex gap-2">
              <CiMail />
              <Link target="_blank" to="mailto:fameadda18@gmail.com">
                fameadda18@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Important  link */}
        <div className="pt-5  flex flex-col justify-center items-center">
          <h1 className=" text-white font-bold pb-12"> Links</h1>

          <ul className="flex- flex-col gap-5 space-y-5">
            <Link className=" flex space-y-5" to="/">
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Home
              </li>
            </Link>
            <Link className=" flex space-y-5" to="/about">
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                About
              </li>
            </Link>
            <Link className=" flex space-y-5" to="/contactus">
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Contact
              </li>
            </Link>
            <Link className=" flex space-y-5" to="/shop">
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Shop
              </li>
            </Link>
          </ul>
        </div>

        {/* Help */}
        <div className="pt-5  flex flex-col justify-center items-center">
          <h1 className=" text-white font-bold pb-12"> Follow</h1>

          <ul className="flex- flex-col gap-5 space-y-5">
            <Link
              to="https://www.instagram.com/fame_adda_18?igsh=Z215eHh1azVpcmt0"
              target="_blank"
              className=" flex space-y-5"
            >
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Instagram
              </li>
            </Link>
            <Link
              className=" flex space-y-5"
              to="https://www.facebook.com/profile.php?id=100094475768450&mibextid=ZbWKwL"
              target="_blank"
            >
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Facebook
              </li>
            </Link>
            <Link
              className=" flex space-y-5"
              to="https://www.amazon.in/s?i=merchant-items&me=A32EUMRBRYC431&fs=true&ref=sr_pg_1" target="_blank"
            >
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Amazon
              </li>
            </Link>
            <Link
              className=" flex space-y-5"
              to="https://wa.me/919054044429?text=Hello How can ihelp u ?"
              target="_blank"
            >
              <li className="hover:translate-x-1 hover:text-primary duration-150">
                Whatsapp
              </li>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
}
