// import React from 'react'
// import { Link } from 'react-router-dom'


function Footer() {
  return (

    <div className="py-8 conatiner">
      <hr />
      <footer className="grid md:grid-cols-3 py-10">
        {/* Logo */}
        <div className="pt-7 md:text-start text-center">
          <h1 className="font-bold text-2xl pb-12">Furniro</h1>
          <p>400 University Drive Suite 200 Coral</p> <p> Gables, </p> <p>FL 33134 USA</p>
        </div>

        <div className="flex justify-evenly md:pt-0 pt-10">

          {/* Important  link */}
          <div className="pt-5  flex flex-col justify-center items-center">
            <h1 className=' text-[#9F9F9F] pb-12'> Links</h1>
            <ul className='flex- flex-col gap-5 space-y-5 '>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>Home</li>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>Shop</li>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>About</li>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>Contact</li>
            </ul>
          </div>


          {/* Help */}
          <div className=" flex flex-col justify-center items-center mb-6">
            <h1 className=' pb-12 text-[#9F9F9F]'> Help</h1>
            <ul className='flex- flex-col gap-5 space-y-5  '>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>Payment Options</li>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>Returns</li>
              <li className='hover:translate-x-1 hover:text-primary duration-150'>Privacy Policies</li>
            </ul>
          </div>
        </div>

        {/* icons */}
        <div className="md:pt-5 mx-auto md:mx-0 pt-10 flex flex-col items-start">
          <span className="text-[#9F9F9F] "> Newsletter</span>
          <form action="" className="md:flex gap-5  mt-9">
            <span>
              <input type="text" className="border-b-black outline-none" placeholder="Enter your email address" />
              <hr className="border-black" />
            </span>
            <span className="">
              <button className="md:mt-0  mt-5"> SUBSCRIBE</button>
              <hr className="border-black" />
            </span>

          </form>
        </div>
      </footer>
      {/* hr  */}

      <hr />
    </div>

  )
}

export default Footer