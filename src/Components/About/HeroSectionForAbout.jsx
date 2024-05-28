/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import Image1 from '../../../Image/Landing-Page/LandingPage-Image-3.png'
import Image2 from '../../../Image/Landing-Page/LandingPage-Image-2.png'
import Image3 from '../../../Image/Landing-Page/LandingPage-Image-1.png'
import Slider from 'react-slick'
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Know More About Us? ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        id: 2,
        img: Image2,
        title: "Know More About Product?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        id: 3,
        img: Image3,
        title: "Know More About our team?",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }
]

export default function HeroSectionForAbout() {
    var setting = {
        dots: false,
        arrows: false,
        // infintie: true,
        infinite: true, // Corrected typo here
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };


        useEffect(() => {
            AOS.init({
                duration: 500, // You can set a default duration for the animations
            });
        }, []);

    return (
        <div className='conatiner relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-[#FAF3EA] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* Background Pattern  */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

            </div>
            {/* Hero Pattern or Section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...setting}>
                    {ImageList.map((data) => (
                        <div className="" key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* Text Content Section  */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10x">
                                    <h1 className='text-4xl sm:text-6xl font-bold'
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    > {data.title}</h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-sm'>
                                            {data.description}
                                    </p>
                                    <Link to='/ contact'>
                                    <div className=""
                                         data-aos="fade-up"
                                         data-aos-duration="500"
                                         data-aos-delay="300"
                                    >
                                       
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 border bg-orange-400 text-white sm:ml-4 py-2 px-4 rounded-full'>
                                            Contact Us
                                        </button>
                                    </div>
                                        </Link>
                                </div>

                                {/* Image Content Section  */}
                                <div className="order-1 sm:order-2">
                                    <div 
                                    className="relative "
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    >
                                        <img src={data.img} alt="" className='w-[300px] h-[400px] md:h-[400px] md:w-[400px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>

            </div>
        </div>
    )
}