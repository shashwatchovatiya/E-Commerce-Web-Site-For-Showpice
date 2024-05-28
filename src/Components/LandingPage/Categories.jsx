/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import tshirt from "../../../Image/Icone/tshirt.png";
import blackDear from "../../../Image/Icone/Blackdeer.png";
import blackPanther from "../../../Image/Icone/blackPanther.png";
import garba from "../../../Image/Icone/garba1.png";
import elephant1 from "../../../Image/Icone/elephant-1.png";
import elephant2 from "../../../Image/Icone/elephant-2.png";
import train from "../../../Image/Icone/train.png";
import ganeshBlue from "../../../Image/Icone/ganesha-blue.png";
import GaneshOrange from "../../../Image/Icone/ganesha-orange.png";
import GaneshTLight from "../../../Image/Icone/ganeshTLight2.png";
import cycle from "../../../Image/Icone/bicycle.png";
import lion from "../../../Image/Icone/animal.png";
import monk from "../../../Image/Icone/buddhist-monk.png";
import panGanesh from "../../../Image/Icone/sacred.png";
import sparow from "../../../Image/Icone/sparrow.png";
import dolls from "../../../Image/Icone/matryoshka-doll.png";
import sawn from "../../../Image/Icone/love.png";
import treeElephant from "../../../Image/Icone/eco-earth.png";
import Swan from "../../../Image/Icone/deer.png";



function Categories() {
  return (
    <div className="conatiner">
      <h1 className="text-start mt-20 text-4xl ">Categories</h1>

      <div className=" my-10 grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 items-center justify-center w-full grid-cols-3 space-y-2 md:gap-5 gap-3 lg:gap-10   ">
        <Link to="/shop/t-shirt">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={tshirt}
              alt="" 
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            T-Shirt
          </button>
        </Link>
        <Link to="/shop/black-Barasingha">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={blackDear}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Black Barasingha
          </button>
        </Link>
        <Link to="/shop/black-penthar">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={blackPanther}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Black penthar
          </button>
        </Link>
        <Link to="/shop/dandiya-couple">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={garba}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            DANDIYA COUPLES
          </button>
        </Link>
        <Link to="/shop/elephant-set-1">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={elephant1}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            ELEPHANT Set 1
          </button>
        </Link>
        <Link to="/shop/elephant-set-2">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={elephant2}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Elephant set of 2
          </button>
        </Link>

        <Link to="/shop/engine-stand">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={train}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Engine Pen Stand
          </button>
        </Link>
        <Link to="/shop/ganesh-blue">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={ganeshBlue}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            GANESH BLUE
          </button>
        </Link>
        <Link to="/shop/ganesh-orange">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={GaneshOrange}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            GANESH ORANGE
          </button>
        </Link>
        <Link to="/shop/ganesh-t-light">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={GaneshTLight}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Ganesh T Light
          </button>
        </Link>
        <Link to="/shop/golden-cycle">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={cycle}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Goden Cycle
          </button>
        </Link>
        <Link to="/shop/lion">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={lion}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Lion
          </button>
        </Link>
        <Link to="/shop/monk">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={monk}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Monk
          </button>
        </Link>

        <Link to="/shop/pen-green-ganesh">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={panGanesh}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Pen Green Ganesh
          </button>
        </Link>
        <Link to="/shop/small-chidiya">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={sparow}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Small Chidiya Pain Black Red
          </button>
        </Link>
        <Link to="/shop/small-dolls">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={dolls}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Small Dolls
          </button>
        </Link>
        <Link to="/shop/swan">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={sawn}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Swan art of 2
          </button>
        </Link>
        <Link to="/shop/tree-elephant">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={treeElephant}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            Tree elephant
          </button>
        </Link>
        <Link to="/shop/white-barasingha">
          <button className=" w-full  flex justify-center items-center flex-col  rounded-lg bg-[#] break-words">
            <img
              src={Swan}
              alt=""
              className="border-black hover:border-2 border p w-16  rounded-lg p-3 hover:bg-orange-300 transition-all duration-300"
            />
            White Barasingha
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
