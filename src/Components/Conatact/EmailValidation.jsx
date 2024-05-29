/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "236, 5th SE Avenue,New York NY10000,United States",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

function EmailValidation() {
  return (
    <>
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-center text-xs font-semibold leading-normal md:text-sm">
            Share your thoughts
          </p>
        </div>
        <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Love to hear from you
        </p>
        <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </p>
      </div>
      <div className="conatiner md:px-20 mt-10 md:flex justify-center gap-10 mb-28">
        {/* Div1 Left side */}
        <div className="md:w-[40%]  flex flex-col space-y-7 bg-[#F9F1E7] md:px-6 px-3 py-6">
          {/* Contact Information */}
          <div className="">
            <span className="text-xl md:text-3xl ">Contact Information</span>
          </div>
          <div className="">
            <span className="text-lg">
              Convinced yet? Let's make something great together.
            </span>
          </div>

          <div className="">
            {/* First Icon an text */}
            <div className="flex justify-around">
              {/* Icon */}
              <div className="">
                <div className="bg-white p-2 rounded-full">
                  <div className="border border-dashed border-black p-4 text-3xl rounded-full ">
                    <IoCall />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col w-1/2">
                <span className="text-lg">Call Us 7/24</span>
                <span className="lg:text-xl text-xl break-words">
                  +91 9054044429
                </span>
              </div>
            </div>

            {/* Second Icon an text */}
            <div className="mt-5 flex justify-around">
              {/* Icon */}
              <div className="">
                <div className="bg-white p-2 rounded-full">
                  <div className="border border-dashed border-black p-4 text-3xl rounded-full ">
                    <IoMdMail />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col w-1/2">
                <span className="text-lg">Make a Quote</span>
                <span className="break-words">info@ygntechnologies.com</span>
              </div>
            </div>

            {/* Third Icon an text */}
            <div className="mt-5 flex justify-around">
              {/* Icon */}
              <div className="">
                <div className="bg-white p-2 rounded-full">
                  <div className="border border-dashed border-black p-4 text-3xl rounded-full ">
                    <FaLocationDot />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col w-1/2">
                <span className="text-lg">Call Us 7/24</span>
                <span className="">
                  99, Nikol - Naroda Rd, behind POONAM BAKERY, Sakar Society,
                  Nikol, Ahmedabad, Gujarat 382350
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <span className="text-xl font-semibold">Follow Social:</span>
            </div>
            <div className="flex gap-1 md:gap-3 mt-4">
              <Link
                to="https://www.facebook.com/share/gMASg9Snh2sob9NW/?mibextid=qi2Omg"
                target="_blank"
              >
                <div className="bg-white p-3 rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300">
                  <span className="">
                    <FaFacebookF />
                  </span>
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/shashwat_0046?igsh=NGVhN2U2NjQ0Yg=="
                target="_blank"
              >
                <div className="bg-white p-3 rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300">
                  <span className="">
                    <FaInstagram />
                  </span>
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/in/shashwat-chovatiya-1151a92b8/"
                target="_blank"
              >
                <div className="bg-white p-3 rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300">
                  <span className="">
                    <FaLinkedinIn />
                  </span>
                </div>
              </Link>
              <Link
                to="https://wa.me/918866187676?text=Hello How can ihelp u ?"
                target="_blank"
              >
                <div className="bg-white p-3 rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300">
                  <span className="">
                    <FaWhatsapp />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Div 2 Right side */}
        <div className="md:w-[60%]  px-10 py-12">
          <div className="">
            <span className="md:text-4xl text-3xl sm:font-semibold font-bold">
              Drop Us A Line
            </span>
          </div>
          <div className="mt-5">
            <span className="text-xl">
              Reach out to us from our contact form and we will get back to you
              shortly.
            </span>
          </div>
          <div className="">
            <form action="" className="mt-8 space-y-4">
              <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="text"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone_number"
                >
                  Phone number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="tel"
                  id="phone_number"
                  placeholder="Phone number"
                />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  id="message"
                  placeholder="Leave us a message"
                  cols={3}
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="text-center">
        <div className="mb-10">
          <span className="text-4xl font-bold">Our Location in map</span>
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.468740557827!2d72.67120247392522!3d23.043270665558133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871a7106075f%3A0x9b4bc7d6fcd30bbe!2sDivyajivan%20Elegance%2C%20B-504%2C%20Divyajivan%20Elegance%2C%20Nikol%20Gam%20Rd%2C%20opp.%20Vrundavan%20Farm%2C%20Jivanvadi%2C%20Nicol%20Gam%2C%20Nikol%2C%20Ahmedabad%2C%20Gujarat%20382350!5e0!3m2!1sen!2sin!4v1716800845865!5m2!1sen!2sin"
          width="90%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mx-auto "
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14685.628934993385!2d72.665177!3d23.0455271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87aa4f308b37%3A0xc34158b36896d956!2sFAME%20ADDA!5e0!3m2!1sen!2sin!4v1716978439173!5m2!1sen!2sin"
          width="90%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mx-auto "
        ></iframe>
      </div>
    </>
  );
}

export default EmailValidation;
