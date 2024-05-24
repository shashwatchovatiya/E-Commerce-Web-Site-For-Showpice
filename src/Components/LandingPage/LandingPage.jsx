// import React from 'react'
import bgImage from '../../../Image/Landing-Page/background-1.png'
import BrowserRang from './BrowserRang'
import FuniroFurniture from './FuniroFurniture'
import OurProduct from './OurProduct'
import Testimorinal from './Testimorinal'
function LandingPage() {
  return (
    <>
    {/* First image section */}
      <main className="w-full lg:h-[95vh] h-screen bg-repeat-x bg-center m-0 lg:bg-contain  bg-cover flex justify-end shadow-zinc-500 shadow-md " style={{ backgroundImage: `url(${bgImage})`,}}>
          <div className="md:h-80 md:w-96 w-1/2 h-1/2 bg-[#FFF3E3]  lg:mr-36 my-auto px-6 py-8 space-y-5  overflow-auto" >
            <p className='text-xs font-bold pb-5'>  New Arravial </p>
            <span className='lg:text-3xl md:text-2xl text-xl text-[#B88E2F] font-extrabold '>Discover Our</span><br />
            <span className='lg:text-3xl md:text-2xl text-xl text-[#B88E2F] font-extrabold'>New Collection</span>
            <p className='md:text-sm text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita cum asperiores aperiam blanditiis perferendis nostrum itaque officiis dolorum</p>
          </div>
      </main>


    {/* Browser Section */}
    <BrowserRang />

    {/* OurProducts Section */}
    <OurProduct />

    {/* Slider Section */}
    <Testimorinal />
    
    {/* FuniroFurniture */}
    <FuniroFurniture />
    </>
  )
}

export default LandingPage