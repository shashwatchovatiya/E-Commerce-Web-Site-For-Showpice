/* eslint-disable no-unused-vars */
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Heading from "../Heading"
import FilterForShopping from "../FilterForShopping"
import AOS from "aos";
import Buy from "../../../../Image/Logo/Buynow.png";

import img112 from "../../../../Image/T-Shirt/Black.jpg";
import img113 from "../../../../Image/T-Shirt/Kathai.jpg";
import img114 from "../../../../Image/T-Shirt/NaviBlue.jpg";
import img115 from "../../../../Image/T-Shirt/OffGreen.jpg";
import img116 from "../../../../Image/T-Shirt/Orange.jpg";
import img117 from "../../../../Image/T-Shirt/S-color.jpg";
import img118 from "../../../../Image/T-Shirt/White.jpg";
import img119 from "../../../../Image/T-Shirt/Yellow.jpg";

import Pagination from '../Pagination';

const ShopingList12 = [
  {
    id: 112,
    img: img112,
    heading: "Black T-shirt",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 113,
    img: img113,
    heading: "Brown T-shirt",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 114,
    img: img114,
    heading: "DarkBlue T-shirt",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 115,
    img: img115,
    heading: "Light Grren  T-shirt",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 116,
    img: img116,
    heading: "Orange T-shirt",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 117,
    img: img117,
    heading: "Gray T-shirt",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 118,
    img: img118,
    heading: "White T-shirt",
    title: "Royal style Elephnat ",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 119,
    img: img119,
    heading: "Yellow T-shirt",
    title: "1980's Musice Player ",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
];

function Tshirt() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // You can set a default duration for the animations
    });
  }, []);

  return (
    <>
      {/* Heading Section */}
      <Heading />

      {/* Filter path */}
      <FilterForShopping />
      <div className="conatiner mt-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {ShopingList12.map((data) => (
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
      <Pagination />
    </>
  );
}

export default Tshirt
