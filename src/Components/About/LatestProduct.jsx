/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Image1 from '../../../Image/Changes/Dark Bule Horse .png'
import Image2 from '../../../Image/Changes/magicstudio-6jsbt8.png'
import Image3 from '../../../Image/Changes/magicstudio-bs3iql.png'
import Image5 from '../../../Image/Changes/1233.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import Buy from "../../../Image/Logo/Buynow.png";

const ProuctsData = [
  {
    id: 1,
    img: Image1,
    heading: "Stylish Hoursh",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Antique-Polyresin-Galloping/dp/B0D2B941KK/ref=sr_1_3?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064379&s=merchant-items&sr=1-3`,
  },
  {
    id: 2,
    img: Image2,
    heading: "Black Bird",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2P65NRP/ref=sr_1_16?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064379&s=merchant-items&sr=1-16`,
  },
  {
    id: 3,
    img: Image3,
    heading: "New Owel",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },

  {
    id: 5,
    img: Image5,
    heading: "Dolphine",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Astronaut-Dashboard-Accessories/dp/B0D3XS48K5/ref=sr_1_14?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064379&s=merchant-items&sr=1-14`,
  },
];



export default function LatestProduct() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // You can set a default duration for the animations
        });
    }, []);


    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        console.log('Product added to cart:', product);
    };



    return (
      <div className="conatiner mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {ProuctsData.map((data) => (
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
    );
}