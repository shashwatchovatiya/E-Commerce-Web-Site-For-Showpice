/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import AOS from 'aos';
import BrowseImage1 from '../../../Image/Landing-Page/LandingPage-Image-1.png'
import BrowseImage2 from '../../../Image/Landing-Page/LandingPage-Image-2.png'
import BrowseImage3 from '../../../Image/Landing-Page/LandingPage-Image-3.png'


const ImageList = [
    {
        id: 1,
        img: BrowseImage1,
        title: "Dining",
    },
    {
        id: 2,
        img: BrowseImage2,
        title: "Living",
    },
    {
        id: 3,
        img: BrowseImage3,
        title: "Bedroom",
    },
]



function BrowserRang() {
    useEffect(() => {
        AOS.init({
            duration: 500, // You can set a default duration for the animations
        });
    }, []);
    return (
        <div className="conatiner">

          <div className="text-center pt-12 flex flex-col">
            <span className='font-extrabold text-xl md:text-2xl '>
            Browse The Range
            </span>
            <span className='pt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ipsum
            </span>
          </div>
            <div className=' md:flex w-full justify-around pt-12'>
                {
                    ImageList.map((data) => (
                        <div className="flex flex-col justify-center items-center" key={data.id}
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        >
                            <img src={data.img} className='w-[95%] h-[90%] bg-contain ' />
                            <p className='text-center pt-3 font-bold md:text-xl text-2xl py-5'> {data.title} </p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BrowserRang