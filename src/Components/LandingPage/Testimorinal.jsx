import img1 from '../../../Image/Landing-Page/Showpice/TabelDecoration.jpg'
import img2 from '../../../Image/Landing-Page/Showpice/WallDecoration2.jpg'
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ImageForSlider = [
  {
    id: 1,
    img: img1
  },
  {
    id: 2,
    img: img2
  },
  {
    id: 3,
    img: img1
  },
  {
    id: 4,
    img: img2
  },  
  {
    id: 5,
    img: img1
  },
  {
    id: 6,
    img: img2
  }

]


function Testimorinal() {
  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);

  return (
    <div className=' bg-[#FCF8F3] py-16 conatiner md:flex justify-between items-center  w-full md:h-screen md:mt-20 mt-10 bg-cover'>

        {/* Left Side */}
        <div className="  flex flex-col justify-center md:text-start text-center item center md:w-[25%] sm:h-screen h-auto sm:p-0 py-10 px-5">
          <span className='text-3xl font-bold'>50+ Beautiful rooms  <br /> inspiration</span>
          <span className='break-normal md:w-64'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>
          <div className="flex md:justify-start justify-center items-center">
            <button className='mt-4 px-4 py-2 rounded border bg-[#B88E2F] border-white hover:border-[#B88E2F] font-semibold hover:bg-white hover:text-black transition duration-300 text-white'>Explore More</button>
          </div>
      </div>

      {/* Right Side  */}
      <div className="flex justify-center overflow-hidden py-10">
        <Swiper
          className="h-auto md:h-full "
          // navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={2}
          slidesPerGroup={2}
          modules={[Navigation, Pagination, A11y,Autoplay]}
          autoplay={{ delay: 3000 }}
        >
          {ImageForSlider?.map((data, index) => (
            <SwiperSlide className="w-1/2 h-[90%] flex justify-center" key={index}>
              <img
                src={data.img}
                alt="Images"
                loading="Loading..."
                className="h-[300px] md:h-[90%] w-[1/2] md:object-cover object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



    </div>


  )
}

export default Testimorinal;