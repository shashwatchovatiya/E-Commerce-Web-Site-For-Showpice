
/* eslint-disable no-unused-vars */

// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import Logo from '../../../Image/Landing-Page/House_Logos-05.png';
// import { MdPersonOutline } from "react-icons/md";
// // import { IoSearch } from "react-icons/io5";
// // import { FaRegHeart } from "react-icons/fa";
// // import { MdOutlineShoppingCart } from "react-icons/md";
// import { FiMenu, FiX } from "react-icons/fi";
// import img1 from '../../../Image/Cart/CartHover1.png'
// import img2 from '../../../Image/Cart/CartHover2.png'
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa6";

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [cartItems, setCartItems] = useState([
//         { id: 1, img: img1, name: 'Asgaard sofa' },
//         { id: 2, img: img2, name: 'Casaliving Wood' }

//     ]); 
//     const [isCartVisible, setIsCartVisible] = useState(false);

//     const handleMouseEnter = () => {
//         setIsCartVisible(true);
//     };

//     const handleMouseLeave = () => {
//         setIsCartVisible(false);
//     };


//     const handleMenuToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const data = [
//         'Apple',
//         'Banana',
//         'Cherry',
//         'Date',
//         'Elderberry',
//         'Fig',
//         'Grape'
//       ];

//     return (
//         <>
//             <header className={`conatiner header flex justify-between items-center transition-all w-full py-5 ${isMenuOpen ? 'bg-red-200 w-auto h-screen flex flex-col transition-all duration-300 justify-end items-end' : 'bg-white'} lg:bg-white`}>

//                 {/* Logo Section */}
//                 <nav className="logo flex justify-center items-center">
//                     <span className='w-7'>
//                         <img src={Logo} alt="Logo" />
//                     </span>
//                     <span className='text-xl font-bold'>
//                         Furniro
//                     </span>
//                 </nav>

//                 {/* Toggle Button for Mobile */}
//                 <button
//                     className="text-xl lg:hidden transition-all duration-300"
//                     onClick={handleMenuToggle}
//                 >
//                     {isMenuOpen ? <FiX /> : <FiMenu />}
//                 </button>

//                 {/* Nav-bar Section */}

//                 <nav className={`nav-bar ${isMenuOpen ? 'flex flex-col w-full h-[100vh] justify-center ' : 'hidden'} transition-all duration-300 flex-col mt-4 font-medium lg:flex lg:flex-row lg:space-x-10 lg:mt-0 lg:bg-transparent`}>
//                     <ul className="md:flex flex-col lg:flex-row lg:space-x-10">
//                         <li>
//                             <NavLink
//                                 to="/"
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 duration-200 border-b
//                   ${isActive ? "text-orange-700" : "text-black"}
//                   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
//                                 }
//                             >
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to="/shop"
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 duration-200 border-b
//                   ${isActive ? "text-orange-700" : "text-black"}
//                   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
//                                 }
//                             >
//                                 Shop
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to='/contact'
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 duration-200 border-b
//                   ${isActive ? "text-orange-700" : "text-black"}
//                   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
//                                 }
//                             >
//                                 Contact
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink
//                                 to='/about'
//                                 className={({ isActive }) =>
//                                     `block py-2 pr-4 pl-3 duration-200 border-b
//                   ${isActive ? "text-orange-700" : "text-black"}
//                   border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
//                                 }
//                             >
//                                 About
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Icon Section */}
//                 <nav className={`nav-bar ${isMenuOpen ? 'flex flex-row w-full h-[100vh] space-y-5 items-end md:items-center ' : 'hidden'} transition-all duration-300 flex-col mt-4 font-medium lg:flex lg:flex-row lg:space-x-10 lg:mt-0`}>
//                     {/* <span className='cursor-pointer hover:text-orange-700 transition-all duration-300 text-2xl md:text-xl'>
//                         <MdPersonOutline />
//                     </span> */}
//                     <div className="flex sm:gap-4 gap-10">
//                         <div className="relative  group sm-block">
//                             <input
//                                 type="text"
//                                 placeholder='Search'
//                                 className='w-[150px] sm:w-[200px] group-hover:w-[200px] md:group-hover:w-[300px] transition-all duration-300 rounded-2xl border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
//                             />
//                             <IoMdSearch className='text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
//                         </div>
//                         {/* Order */}
//                         <button
//                             onClick={() => alert("Oreder is not start")}
//                             className='bg-gradient-to-r bg-orange-400 to-secondary transition-all duration-200 text-white py-1 px-3 rounded-full flex items-center gap-3 group '
//                         >
//                             <span
//                                 className='group-hover:block hidden transition-all duration-200'
//                             > Order
//                             </span>
//                             <FaCartShopping className=' text-xl  drop-shadow-sm cursor-pointer' />
//                         </button>
//                         </div>
//                     {/* <span className='cursor-pointer hover:text-orange-700 transition-all duration-300 text-2xl md:text-xl'>
//                         <FaRegHeart />
//                     </span> */}
//                     {/* Cart Function */}

//                     {/* <div className='cart-main relative hover:transition-all duration-300' onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}>
//                         <span className='cursor-pointer hover:text-orange-700 transition-all duration-300 text-2xl md:text-xl'>
//                             <Link to='/cart'>
                            
//                             <MdOutlineShoppingCart />
//                             </Link>
//                         </span>
//                         <div className={`cart-box absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg p-4 ${isCartVisible ? 'visible' : ''}`}>
//                             <h3 className='font-semibold mb-2'>Shoping Cart</h3>
//                             <ul className=''>
//                                 {cartItems.map(item => (
//                                     <li key={item.id} className='py-1 border-b flex px-2 gap-5 '>
//                                         <img src={item.img} alt="" className='w-1/4 h-1/4' /> {item.name}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div> */}
//                 </nav>
//             </header>
//         </>
//     );
// }


/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../Image/Landing-Page/House_Logos-05.png';
import { MdPersonOutline } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import img1 from '../../../Image/Landing-Page/Showpice/Budha.jpg'
import img2 from '../../../Image/Landing-Page/Showpice/camera.jpg'
import img3 from '../../../Image/Landing-Page/Showpice/CoperLadyFace.jpg'
import img4 from '../../../Image/Landing-Page/Showpice/Dear.jpg'
import img5 from '../../../Image/Landing-Page/Showpice/DollFine.jpg'
import img6 from '../../../Image/Landing-Page/Showpice/Kirshan.jpg'
import img7 from '../../../Image/Landing-Page/Showpice/RoyalElephant.jpg'
import img8 from '../../../Image/Landing-Page/Showpice/OldMusicPlayer.jpg'
import img9 from '../../../Image/Landing-Page/Showpice/Monk.jpg'
import img10 from '../../../Image/Landing-Page/Showpice/PinkParakeet.jpg'
import img11 from '../../../Image/Landing-Page/Showpice/LadyWithBasket2.jpg'
import img12 from '../../../Image/Landing-Page/Showpice/TreeForDecore.jpg'
import img13 from '../../../Image/Landing-Page/Showpice/TrendigRajasthani3Statu.jpg'
import img14 from '../../../Image/Landing-Page/Showpice/WallShowpice.jpg'
import img15 from '../../../Image/Landing-Page/Showpice/RajastaniStatue.jpg'
import img16 from '../../../Image/Landing-Page/Showpice/CarftVatika.jpg'

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

// Sample data for search
const searchData = [
    {
        id: 1,
        img: img1,
        heading: "Budhha Showpice",
        title: "Stylish Budha ShowPice",
        price: 2500.00,
        originalPrice: 3500,
        link: "https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42"
    },
    {
        id: 2,
        img: img2,
        heading: "Old Camera Showpice",
        title: "Stylish Old Camera",
        price: 2500.00,
        originalPrice: 3500,
        link: "https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb"
    },
    // Add more items as needed
    {
        id: 3,
        img: img3,
        heading: "Coper Lady Face",
        title: "Stylish Coper Lady Face   ",
        price: 70000.00,
        orignialPrice: 13500,
        link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`
    },
    {
        id: 4,
        img: img4,
        heading: "Dear Showpice",
        title: "for Hall stylish Decoration",
        price: 5000.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`
    },
    {
        id: 5,
        img: img5,
        heading: "Dolphine",
        title: "Creating Mirror Dolphine",
        price: 2500.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`
    },
    {
        id: 6,
        img: img6,
        heading: "Stylish Kirshna",
        title: "God Of the World Showpice ",
        price: 2500.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`
    },
    {
        id: 7,
        img: img7,
        heading: "Old Style Elephant",
        title: "Royal style Elephnat ",
        price: 70000.00,
        orignialPrice: 13500,
        link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`
    },
    {
        id: 8,
        img: img8,
        heading: "Old Musice Player",
        title: "1980's Musice Player ",
        price: 5000.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`
    },
    {
        id: 9,
        img: img9,
        heading: "Littel Monk ",
        title: "Stylish monk for showpice ",
        price: 2500.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`
    },
    {
        id: 10,
        img: img10,
        heading: "Pink Bird ",
        title: "Pink bird for hall showpice ",
        price: 2500.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`
    },
    {
        id: 11,
        img: img11,
        heading: "Lady with basket",
        title: "BeautiFull Lady with Basket",
        price: 70000.00,
        orignialPrice: 13500,
        link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`
    },
    {
        id: 12,
        img: img12,
        heading: "Wall Tree",
        title: "Wall for Tree decoration ",
        price: 5000.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`
    },
    {
        id: 13,
        img: img13,
        heading: "Trendig Rajasthani",
        title: "3 Rajasthani musician ",
        price: 2500.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`
    },
    {
        id: 14,
        img: img14,
        heading: "Wall Decoration",
        title: "Stylish and unique Wall Wallpaper ",
        price: 2500.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`
    },
    {
        id: 15,
        img: img15,
        heading: "One Rajasthani Couple ",
        title: "New Rajasthani Couple Statue",
        price: 70000.00,
        orignialPrice: 13500,
        link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`
    },
    {
        id: 16,
        img: img16,
        heading: "Respria",
        title: "Outdoor bar table ",
        price: 5000.00,
        orignialPrice: 3500,
        link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`
    },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, img: img1, name: 'Asgaard sofa' },
        { id: 2, img: img2, name: 'Casaliving Wood' }
    ]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleMouseEnter = () => {
        setIsCartVisible(true);
    };

    const handleMouseLeave = () => {
        setIsCartVisible(false);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value) {
            const results = searchData.filter(item =>
                item.heading.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    return (
        <>
            <header className={`container header flex justify-around items-center transition-all w-full py-5 ${isMenuOpen ? 'bg-red-200 w-auto h-screen flex flex-col transition-all duration-300 justify-around items-center px-3' : 'bg-white'} lg:bg-white`}>

                {/* Logo Section */}
                <nav className={`logo flex justify-center  items-center ${isMenuOpen ? 'pb-11' :''} `}>
                    <span className='sm:w-7'>
                        <img src={Logo} alt="Logo" />
                    </span>
                    <span className='sm:text-xl text-2xl  font-bold'>
                        Furniro
                    </span>
                </nav>

                {/* Toggle Button for Mobile */}
                <button
                    className="text-xl lg:hidden transition-all duration-300"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Nav-bar Section */}
                <nav className={`nav-bar ${isMenuOpen ? 'flex flex-col w-full h-[100vh] justify-center items-center ' : 'hidden'} transition-all duration-300 flex-col mt-4 font-medium lg:flex lg:flex-row lg:space-x-10 lg:mt-0 lg:bg-transparent`}>
                    <ul className="md:flex flex-col lg:flex-row lg:space-x-10">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b
                  ${isActive ? "text-orange-700" : "text-black"}
                  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="shop"
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b
                  ${isActive ? "text-orange-700" : "text-black"}
                  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
                                }
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='contact'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b
                  ${isActive ? "text-orange-700" : "text-black"}
                  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='about'
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b
                  ${isActive ? "text-orange-700" : "text-black"}
                  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-semibold`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Icon Section */}
                <nav className={`nav-bar ${isMenuOpen ? 'flex flex-col w-full h-[100vh] space-y-2 items-end md:items-center ' : 'hidden'} transition-all duration-300 flex-col mt-4 font-medium lg:flex lg:flex-row lg:space-x-10 lg:mt-0`}>
                    <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:gap-4 gap-10">
                        <div className="relative group sm-block">
                            <input
                                type="text"
                                placeholder='Search'
                                value={searchInput}
                                onChange={handleSearchChange}
                                className='w-[150px] sm:w-[200px] group-hover:w-[200px] md:group-hover:w-[300px] transition-all duration-300 rounded-2xl border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                            />
                            <IoMdSearch className='text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <button
                            onClick={() => alert("Order is not start")}
                            className='bg-gradient-to-r bg-orange-700 transition-all duration-200 hover:bg-white text-white hover:text-orange-700 border-2 border-orange-700 py-2 px-4 rounded-lg'
                        >
                            <MdPersonOutline className="text-2xl" />
                        </button>
                        <button
                            onClick={() => alert("Order is not start")}
                            className='bg-gradient-to-r bg-orange-700 transition-all duration-200 hover:bg-white text-white hover:text-orange-700 border-2 border-orange-700 py-2 px-4 rounded-lg'
                        >
                            <FaCartShopping className="text-xl" />
                        </button>
                    </div>
                </nav>

                {/* Search Results Section */}
                {searchInput && (
                    <div className='absolute top-16 left-0 w-full bg-white shadow-lg z-10'>
                        {filteredResults.length > 0 ? (
                            filteredResults.map(item => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    className='flex items-center p-2 border-b border-gray-200 hover:bg-gray-100'
                                >
                                    <img src={item.img} alt={item.heading} className='w-10 h-10 mr-2' />
                                    <div>
                                        <h3 className='text-sm font-semibold'>{item.heading}</h3>
                                        <p className='text-xs text-gray-600'>{item.title}</p>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p className='p-2 text-gray-500'>No results found</p>
                        )}
                    </div>
                )}
            </header>
        </>
    );
}
