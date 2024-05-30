/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import img1 from '../../../Image/Shop/Shopping List/image-1.png'
// import img2 from '../../../Image/Shop/Shopping List/image-2.png'
// import img3 from '../../../Image/Shop/Shopping List/image-3.png'
// import img4 from '../../../Image/Shop/Shopping List/image-4.png'
import Buy from "../../../Image/Logo/Buynow.png";
import img1001 from "../../../Image/Landing-Page/Showpice/Budha.jpg";
import img1002 from "../../../Image/Landing-Page/Showpice/camera.jpg";
import img1003 from "../../../Image/Landing-Page/Showpice/CoperLadyFace.jpg";
import img1004 from "../../../Image/Landing-Page/Showpice/Dear.jpg";
import img1005 from "../../../Image/Landing-Page/Showpice/DollFine.jpg";
import img1006 from "../../../Image/Landing-Page/Showpice/Kirshan.jpg";
import img1007 from "../../../Image/Landing-Page/Showpice/RoyalElephant.jpg";
import img1008 from "../../../Image/Landing-Page/Showpice/OldMusicPlayer.jpg";
import img1009 from "../../../Image/Landing-Page/Showpice/Monk.jpg";
import img1010 from "../../../Image/Landing-Page/Showpice/PinkParakeet.jpg";
import img1011 from "../../../Image/Landing-Page/Showpice/LadyWithBasket2.jpg";
import img1012 from "../../../Image/Landing-Page/Showpice/TreeForDecore.jpg";
import img1013 from "../../../Image/Landing-Page/Showpice/TrendigRajasthani3Statu.jpg";
import img1014 from "../../../Image/Landing-Page/Showpice/WallShowpice.jpg";
import img1015 from "../../../Image/Landing-Page/Showpice/RajastaniStatue.jpg";
import img1016 from "../../../Image/Landing-Page/Showpice/CarftVatika.jpg";

import img1 from "../../../Image/Changes/Black Barasingha/01.jpg";
import img2 from "../../../Image/Changes/Black Barasingha/02.jpg";
import img3 from "../../../Image/Changes/Black Barasingha/03.jpg";
import img4 from "../../../Image/Changes/Black Barasingha/04.jpg";
import img5 from "../../../Image/Changes/Black Barasingha/05.jpg";
import img6 from "../../../Image/Changes/Black Barasingha/06.jpg";
import img7 from "../../../Image/Changes/Black Barasingha/07.jpg";
import img8 from "../../../Image/Changes/Black Barasingha/08.jpg";

import img9 from "../../../Image/Changes/Black penthar/01.jpg";
import img10 from "../../../Image/Changes/Black penthar/02.jpg";
import img11 from "../../../Image/Changes/Black penthar/03.jpg";
import img12 from "../../../Image/Changes/Black penthar/04.jpg";
import img13 from "../../../Image/Changes/Black penthar/05.jpg";
import img14 from "../../../Image/Changes/Black penthar/06.jpg";
import img15 from "../../../Image/Changes/Black penthar/07.jpg";
import img16 from "../../../Image/Changes/Black penthar/08.jpg";
import img17 from "../../../Image/Changes/Black penthar/09.jpg";
import img18 from "../../../Image/Changes/Black penthar/10.jpg";

import img19 from "../../../Image/Changes/DANDIYA COUPLES/1.jpg";
import img20 from "../../../Image/Changes/DANDIYA COUPLES/2.jpg";
import img21 from "../../../Image/Changes/DANDIYA COUPLES/3.jpg";
import img22 from "../../../Image/Changes/DANDIYA COUPLES/4.jpg";
import img23 from "../../../Image/Changes/DANDIYA COUPLES/5.jpg";
import img24 from "../../../Image/Changes/DANDIYA COUPLES/6.jpg";
import img25 from "../../../Image/Changes/DANDIYA COUPLES/7.jpg";

import img26 from "../../../Image/Changes/ELEPHANT IN ELEPHANT BLACK RED/01.jpg";
import img27 from "../../../Image/Changes/ELEPHANT IN ELEPHANT BLACK RED/02.jpg";

import img28 from "../../../Image/Changes/elephant set of 2/1_1_11zon51509.jpg-magic-wymw.jpg";
import img29 from "../../../Image/Changes/elephant set of 2/H4add44c2abbd47619d63d4607eac4de49_2_11zon79376.jpg-magic-jckc.jpg";
import img30 from "../../../Image/Changes/elephant set of 2/H91e2ee333c73441f9ae6e9f42d890b74B_3_11zon58062.jpg-magic-ytxa.jpg";
import img31 from "../../../Image/Changes/elephant set of 2/H82734bc4bf9849f6b34bf2649d3bddcfU_4_11zon43956.jpg-magic-eqgy.jpg";
import img32 from "../../../Image/Changes/elephant set of 2/Hd7e357bd3aff4d40afb4f9d6891d40c5r_6_11zon46954.jpg-magic-hhez.jpg";
import img33 from "../../../Image/Changes/elephant set of 2/Hc3b266bada05450290a76502012ce2e05_5_11zon29741.jpg-magic-qwof.jpg";
import img34 from "../../../Image/Changes/elephant set of 2/Hfd7bfb07ed7140c6b8f55830337ffb21S_7_11zon84383.jpg-magic-jbte.jpg";

import img35 from "../../../Image/Changes/Engine Pen Stand/001.jpg";
import img36 from "../../../Image/Changes/Engine Pen Stand/002.jpg";
import img37 from "../../../Image/Changes/Engine Pen Stand/003.jpg";
import img38 from "../../../Image/Changes/Engine Pen Stand/004.jpg";
import img39 from "../../../Image/Changes/Engine Pen Stand/005.jpg";
import img40 from "../../../Image/Changes/Engine Pen Stand/006.jpg";
import img41 from "../../../Image/Changes/Engine Pen Stand/007.jpg";

import img42 from "../../../Image/Changes/GANESH BLUE/1.jpg";
import img43 from "../../../Image/Changes/GANESH BLUE/2.jpg";
import img44 from "../../../Image/Changes/GANESH BLUE/3.jpg";
import img45 from "../../../Image/Changes/GANESH BLUE/4.jpg";
import img46 from "../../../Image/Changes/GANESH BLUE/5.jpg";
import img47 from "../../../Image/Changes/GANESH BLUE/6.jpg";
import img48 from "../../../Image/Changes/GANESH BLUE/7.jpg";

import img49 from "../../../Image/Changes/GANESH ORANGE/1.jpg";
import img50 from "../../../Image/Changes/GANESH ORANGE/2.jpg";
import img51 from "../../../Image/Changes/GANESH ORANGE/3.jpg";
import img52 from "../../../Image/Changes/GANESH ORANGE/4.jpg";
import img53 from "../../../Image/Changes/GANESH ORANGE/5.jpg";
import img54 from "../../../Image/Changes/GANESH ORANGE/6.jpg";
import img55 from "../../../Image/Changes/GANESH ORANGE/7.jpg";

import img56 from "../../../Image/Changes/Ganesh T Light/001.jpg";
import img57 from "../../../Image/Changes/Ganesh T Light/002.jpg";
import img58 from "../../../Image/Changes/Ganesh T Light/003.jpg";
import img59 from "../../../Image/Changes/Ganesh T Light/004.jpg";
import img60 from "../../../Image/Changes/Ganesh T Light/005.jpg";
import img61 from "../../../Image/Changes/Ganesh T Light/006.jpg";
import img62 from "../../../Image/Changes/Ganesh T Light/007.jpg";

import img63 from "../../../Image/Changes/Goden Cycle/01.jpg";
import img64 from "../../../Image/Changes/Goden Cycle/02.jpg";
import img65 from "../../../Image/Changes/Goden Cycle/3.jpg";
import img66 from "../../../Image/Changes/Goden Cycle/04.jpg";
import img67 from "../../../Image/Changes/Goden Cycle/05.jpg";
import img68 from "../../../Image/Changes/Goden Cycle/06.jpg";
import img69 from "../../../Image/Changes/Goden Cycle/07.jpg";

import img70 from "../../../Image/Changes/Lion/1.jpg";
import img71 from "../../../Image/Changes/Lion/2.webp";
import img72 from "../../../Image/Changes/Lion/3.jpg";
import img73 from "../../../Image/Changes/Lion/4.jpg";
import img74 from "../../../Image/Changes/Lion/5.webp";
import img75 from "../../../Image/Changes/Lion/6.jpg";
import img76 from "../../../Image/Changes/Lion/7.jpg";
import img77 from "../../../Image/Changes/Lion/8.webp";
import img78 from "../../../Image/Changes/Lion/9.jpg";

import img79 from "../../../Image/Changes/Monk/51LVxT+DROL._AC_SL1081_.jpg";
import img80 from "../../../Image/Changes/Monk/610DHm3BLdL._AC_SL1081_.jpg";

import img81 from "../../../Image/Changes/pen Green Ganesh/01.jpg";
import img82 from "../../../Image/Changes/pen Green Ganesh/02.jpg";
import img83 from "../../../Image/Changes/pen Green Ganesh/03.jpg";
import img84 from "../../../Image/Changes/pen Green Ganesh/04.jpg";
import img85 from "../../../Image/Changes/pen Green Ganesh/05.jpg";
import img86 from "../../../Image/Changes/pen Green Ganesh/06.jpg";
import img87 from "../../../Image/Changes/pen Green Ganesh/07.jpg";

import img88 from "../../../Image/Changes/Small Chidiya Pain Black Red/01.jpg";
import img89 from "../../../Image/Changes/Small Chidiya Pain Black Red/02.jpg";
import img90 from "../../../Image/Changes/Small Chidiya Pain Black Red/03.jpg";
import img91 from "../../../Image/Changes/Small Chidiya Pain Black Red/04.jpg";
import img92 from "../../../Image/Changes/Small Chidiya Pain Black Red/05.jpg";
import img93 from "../../../Image/Changes/Small Chidiya Pain Black Red/06.jpg";

import img94 from "../../../Image/Changes/Small Dolls/01.jpg";
import img95 from "../../../Image/Changes/Small Dolls/02.jpg";
import img96 from "../../../Image/Changes/Small Dolls/03.jpg";
import img97 from "../../../Image/Changes/Small Dolls/04.jpg";
import img98 from "../../../Image/Changes/Small Dolls/05.jpg";
import img99 from "../../../Image/Changes/Small Dolls/06.jpg";

import img100 from "../../../Image/Changes/Swan rt of 2/6-11-wps8754-craft-junction-19-original-imageqy8asgufzyk35590.jpg-magic-sdgt.jpg";
import img101 from "../../../Image/Changes/Swan rt of 2/6-11-wps8754-craft-junction-19-original-imagezbeyjgahhrt103729.jpg-magic-rfsx.jpg";
import img102 from "../../../Image/Changes/Swan rt of 2/410309745_18247285339234497_7191841028993447914_n78912.jpg-magic-fkuc.jpg";
import img103 from "../../../Image/Changes/Swan rt of 2/wallmantra-table-decor-luxe-swan-figurine-set-of-2-33508458758310334670.jpg-magic-xgsm.jpg";
import img104 from "../../../Image/Changes/Swan rt of 2/wallmantra-table-decor-room-decor-garden-decor-showpiece-copy-of-tropical-flamingo-table-accent-set--magic-zrsq.jpg";
import img105 from "../../../Image/Changes/Swan rt of 2/wallmantra-table-decor-room-decor-garden-decor-showpiece-luxe-flamingo-figurine-set-of-2-30381251559-magic-ugyf.jpg";

import img106 from "../../../Image/Changes/Tree elephant/01.jpg";
import img107 from "../../../Image/Changes/Tree elephant/02.jpg";
import img108 from "../../../Image/Changes/Tree elephant/03.jpg";
import img109 from "../../../Image/Changes/Tree elephant/04.jpg";
import img110 from "../../../Image/Changes/Tree elephant/05.jpg";
import img111 from "../../../Image/Changes/Tree elephant/06.jpg";

import img112 from "../../../Image/T-Shirt/Black.jpg";
import img113 from "../../../Image/T-Shirt/Kathai.jpg";
import img114 from "../../../Image/T-Shirt/NaviBlue.jpg";
import img115 from "../../../Image/T-Shirt/OffGreen.jpg";
import img116 from "../../../Image/T-Shirt/Orange.jpg";
import img117 from "../../../Image/T-Shirt/S-color.jpg";
import img118 from "../../../Image/T-Shirt/White.jpg";
import img119 from "../../../Image/T-Shirt/Yellow.jpg";

import img120 from "../../../Image/Changes/White Barasingha/01.jpg";
import img121 from "../../../Image/Changes/White Barasingha/02.jpg";
import img122 from "../../../Image/Changes/White Barasingha/03.jpg";
import img123 from "../../../Image/Changes/White Barasingha/04.jpg";
import img124 from "../../../Image/Changes/White Barasingha/05.jpg";
import img125 from "../../../Image/Changes/White Barasingha/06.jpg";
import img126 from "../../../Image/Changes/White Barasingha/07.jpg";
import img127 from "../../../Image/Changes/White Barasingha/08.jpg";
import { IoShareSocial } from "react-icons/io5";
import { VscArrowSwap } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import AOS from "aos";

const ShopingList12 = [
  {
    id: 1001,
    img: img1001,
    heading: "Budhha Showpice",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    originalPrice: 3500,
    // link: "https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42",
  },
  {
    id: 1002,
    img: img1002,
    heading: "Old Camera Showpice",
    title: "Stylish Old Camera",
    price: 2500.0,
    originalPrice: 3500,
    // link: "https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb",
  },
  // Add more items as needed
  {
    id: 1003,
    img: img1003,
    heading: "Coper Lady Face",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 1004,
    img: img1004,
    heading: "Dear Showpice",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 10055,
    img: img1005,
    heading: "Dolphine",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 1006,
    img: img1006,
    heading: "Stylish Kirshna",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 1007,
    img: img1007,
    heading: "Old Style Elephant",
    title: "Royal style Elephnat ",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 1008,
    img: img1008,
    heading: "Old Musice Player",
    title: "1980's Musice Player ",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 1009,
    img: img1009,
    heading: "Littel Monk ",
    title: "Stylish monk for showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.amazon.in/FAME-ADDA-Figurines-Showpiece-Dashboard/dp/B0D3BRXNPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717060801&s=merchant-items&sr=1-1`,
  },
  {
    id: 1010,
    img: img1010,
    heading: "Pink Bird ",
    title: "Pink bird for hall showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 1011,
    img: img1011,
    heading: "Lady with basket",
    title: "BeautiFull Lady with Basket",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 1012,
    img: img1012,
    heading: "Wall Tree",
    title: "Wall for Tree decoration ",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 1013,
    img: img1013,
    heading: "Trendig Rajasthani",
    title: "3 Rajasthani musician ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 1014,
    img: img1014,
    heading: "Wall Decoration",
    title: "Stylish and unique Wall Wallpaper ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 1015,
    img: img1015,
    heading: "One Rajasthani Couple ",
    title: "New Rajasthani Couple Statue",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 1016,
    img: img1016,
    heading: "Respria",
    title: "Outdoor bar table ",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 1,
    img: img1,
    heading: "Black Barasingha -1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 2,
    img: img2,
    heading: "Black Barasingha -2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 3,
    img: img3,
    heading: "Black Barasingha -3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 4,
    img: img4,
    heading: "Black Barasingha -4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 5,
    img: img5,
    heading: "Black Barasingha -5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 6,
    img: img6,
    heading: "Black Barasingha -6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 7,
    img: img7,
    heading: "Black Barasingha -7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 8,
    img: img8,
    heading: "Black Barasingha -8",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.
  {
    id: 9,
    img: img9,
    heading: "Black penthar-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 10,
    img: img10,
    heading: "Black penthar-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 11,
    img: img11,
    heading: "Black penthar-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 12,
    img: img12,
    heading: "Black penthar-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 13,
    img: img13,
    heading: "Black penthar-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 14,
    img: img14,
    heading: "Black penthar-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 15,
    img: img15,
    heading: "Black penthar-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 16,
    img: img16,
    heading: "Black penthar-8",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },

  {
    id: 17,
    img: img17,
    heading: "Black penthar-9",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 18,
    img: img18,
    heading: "Black penthar-10",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 19,
    img: img19,
    heading: "DANDIYA COUPLES-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 20,
    img: img20,
    heading: "DANDIYA COUPLES-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 21,
    img: img21,
    heading: "DANDIYA COUPLES-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 22,
    img: img22,
    heading: "DANDIYA COUPLES-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 23,
    img: img23,
    heading: "DANDIYA COUPLES-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 24,
    img: img24,
    heading: "DANDIYA COUPLES-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },
  {
    id: 25,
    img: img25,
    heading: "DANDIYA COUPLES-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CZ7D7N1N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063086&s=merchant-items&sr=1-27`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 26,
    img: img26,
    heading: "Elephant Set - 1 product 1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 27,
    img: img27,
    heading: "Elephant Set - 1 product 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 28,
    img: img28,
    heading: "Elephant Set - 2 product 1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 29,
    img: img29,
    heading: "Elephant Set - 2 product 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 30,
    img: img30,
    heading: "Elephant Set - 2 product 3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 31,
    img: img31,
    heading: "Elephant Set - 2 product 4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 32,
    img: img32,
    heading: "Elephant Set - 2 product 5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 33,
    img: img33,
    heading: "Elephant Set - 2 product 6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },
  {
    id: 34,
    img: img34,
    heading: "Elephant Set - 2 product 7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Elephant-Ceramic-Figures/dp/B0D2B8CCGH/ref=sr_1_19?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-19`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 35,
    img: img35,
    heading: "Engine Pen Stand-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 36,
    img: img36,
    heading: "Engine Pen Stand-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 37,
    img: img37,
    heading: "Engine Pen Stand-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 38,
    img: img38,
    heading: "Engine Pen Stand-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 39,
    img: img39,
    heading: "Engine Pen Stand-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 40,
    img: img40,
    heading: "Engine Pen Stand-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },
  {
    id: 41,
    img: img41,
    heading: "Engine Pen Stand-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7G2T1M/ref=sr_1_26?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717061561&s=merchant-items&sr=1-26`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 42,
    img: img42,
    heading: "Blue Ganesh-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 43,
    img: img43,
    heading: "Blue Ganesh-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 44,
    img: img44,
    heading: "Blue Ganesh-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 45,
    img: img45,
    heading: "Blue Ganesh-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 46,
    img: img46,
    heading: "Blue Ganesh-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 47,
    img: img47,
    heading: "Blue Ganesh-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 48,
    img: img48,
    heading: "Blue Ganesh-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 49,
    img: img49,
    heading: "Orange Ganesh-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 50,
    img: img50,
    heading: "Orange Ganesh-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 51,
    img: img51,
    heading: "Orange Ganesh-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 52,
    img: img52,
    heading: "Orange Ganesh-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 53,
    img: img53,
    heading: "Orange Ganesh-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },
  {
    id: 54,
    img: img54,
    heading: "Orange Ganesh-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },

  {
    id: 55,
    img: img55,
    heading: "Orange Ganesh-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Polyresin-Handcrafted-Thoughtful/dp/B0CYSW3T9J/ref=sr_1_32?dib=eyJ2IjoiMSJ9.ZFAOHzvlYPMYfKr8EdE2vJBGlckcM1_275LGIkET03YN2qKFZMgEz4KJ2qRR6o0-WE7d2hDk7eozcmJbsVT6_DftQNpqMGO9Cint5dMFdlbzUOHN7kZWtFggZjKQS9-wNyHqlJP5f5tIC2MpR81kBO7qMEAa_pFvEE9vTmrtE2Wv_vv0C4J_c9SzRpY4ioSxZOuNOZHBjmc_Jmf6-E-yYibD1E3P6KHxr55EXSpKlRQ.AdK7jU8CEHN-pqJ7XA32zXYxQ3ks6Q5aXWHWVFUUSq4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717063627&s=merchant-items&sr=1-32&th=1`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 56,
    img: img56,
    heading: "Ganesh T-light -1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 57,
    img: img57,
    heading: "Ganesh T-light -2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 58,
    img: img58,
    heading: "Ganesh T-light -3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 59,
    img: img59,
    heading: "Ganesh T-light -4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 60,
    img: img60,
    heading: "Ganesh T-light -5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 61,
    img: img61,
    heading: "Ganesh T-light -6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },
  {
    id: 62,
    img: img62,
    heading: "Ganesh T-light -7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Handcrafted-Showpiece-Decorations/dp/B0CZJ28FP7/ref=sr_1_20?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-20`,
  },

  //? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nihil accusamus sit voluptatem corrupti tempore enim expedita fugiat deleniti totam atque, saepe ea explicabo officia blanditiis asperiores placeat, delectus sapiente.

  {
    id: 63,
    img: img63,
    heading: "Golden Cycle -1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 64,
    img: img64,
    heading: "Golden Cycle -2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 65,
    img: img65,
    heading: "Golden Cycle 3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 66,
    img: img66,
    heading: "Golden Cycle -4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 67,
    img: img67,
    heading: "Golden Cycle -5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 68,
    img: img68,
    heading: "Golden Cycle -6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },
  {
    id: 69,
    img: img69,
    heading: "Golden Cycle -7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-thoughtful/dp/B0D12FGJ43/ref=sr_1_18?dib=eyJ2IjoiMSJ9.n3WkSAxhpTbswKNElT43h-JdoM-zLjaYYCmxc7d-8ZeLFMgIZN0lHfxksR4VdgTa91Z7LZVbKHH6G9WiqHS4OJNQr0lVT1GjKmSKxatDOdDZav7GmuXpkIJDxCyjhnc3Qz4so4tLAsNCEqNKMjQdsx0UKTDqjn8JlbT7gfIGfso.E4JaAXtenoPqiHMSqgYbnthT0dus_kQWrFvc4PqMndM&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717064221&s=merchant-items&sr=1-18`,
  },

  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?
  {
    id: 70,
    img: img70,
    heading: "Lion-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 71,
    img: img71,
    heading: "Lion-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 72,
    img: img72,
    heading: "Lion-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 73,
    img: img73,
    heading: "Lion-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 74,
    img: img74,
    heading: "Lion-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 75,
    img: img75,
    heading: "Lion-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 76,
    img: img76,
    heading: "Lion-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 77,
    img: img77,
    heading: "Lion-8",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },
  {
    id: 78,
    img: img78,
    heading: "Lion-9",
    title: "1980's Musice Player ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Sculpture-Showpiece-Figurine/dp/B0D2B8L272/ref=sr_1_18?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-18`,
  },

  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 79,
    img: img79,
    heading: "Monk Showpice - 1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Figurines-Showpiece-Dashboard/dp/B0D3BRXNPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717060801&s=merchant-items&sr=1-1`,
  },

  {
    id: 80,
    img: img80,
    heading: "Monk Showpice - 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Figurines-Showpiece-Dashboard/dp/B0D3BRXNPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aYqgkpOYgvEDR8ZmnUL4XpQwFcIHpXUBsrbvF49ywjxvjGhMDqktLT5WkbC8T0QrUK_tTTlEdO0soZ6U3f-ldoxCdcKSmhyBSw9rwxPcDsRcmU7rrRV5TBOIpv9p-FoAGMpK3SQFMt8I_DMCY8yZ4pGC8wgnBdVjvgUds4ZHhIOYMKcwQ28mSPV-r4nO-h94VYSB5AjxaQRnt6b5Wm_p_0ZNm-bX3whL1XURr2rbxG0.G4SF3evPvrtf90HcX0Fg3WDaVkz5kGImzcT4S0FZaO4&dib_tag=se&m=A32EUMRBRYC431&nsdOptOutParam=true&qid=1717060801&s=merchant-items&sr=1-1`,
  },

  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 81,
    img: img81,
    heading: "Pan Ganesh-1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 82,
    img: img82,
    heading: "Pan Ganesh-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 83,
    img: img83,
    heading: "Pan Ganesh-3",
    title: "Stylish Coper Lady Face   ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 84,
    img: img84,
    heading: "Pan Ganesh-4",
    title: "for Hall stylish Decoration",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 85,
    img: img85,
    heading: "Pan Ganesh-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 86,
    img: img86,
    heading: "Pan Ganesh-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },
  {
    id: 87,
    img: img87,
    heading: "Pan Ganesh-7",
    title: "Royal style Elephnat ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0CYY6SDF2/ref=sr_1_24?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-24`,
  },

  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 88,
    img: img88,
    heading: "Sparrow -1 ",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 89,
    img: img89,
    heading: "Sparrow -2",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 90,
    img: img90,
    heading: "Sparrow -3",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 91,
    img: img91,
    heading: "Sparrow -4",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 92,
    img: img92,
    heading: "Dear Showpice",
    title: "Sparrow -5",
    price: 5000.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },
  {
    id: 93,
    img: img93,
    heading: "Sparrow -6",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Showpieces-Decoration/dp/B0D2BK7LS5/ref=sr_1_2?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-2`,
  },

  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 94,
    img: img94,
    heading: "Small Dolls - 1",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 95,
    img: img95,
    heading: "Small Dolls - 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 96,
    img: img96,
    heading: "Small Dolls - 3",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    link: `https://www.amazon.in/FAME-ADDA-Decorative-Collectible-Thoughtful/dp/B0D12HLK4L/ref=sr_1_21?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 97,
    img: img97,
    heading: "Small Dolls - 4",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 98,
    img: img98,
    heading: "Small Dolls - 5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  {
    id: 99,
    img: img99,
    heading: "Small Dolls - 6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    link: `https://www.amazon.in/FAME-ADDA-Multicolor-Decorative-Collectible/dp/B0CZ7D43N2/ref=sr_1_23?m=A32EUMRBRYC431&nsdOptOutParam=true&s=merchant-items&sr=1-23`,
  },
  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 100,
    img: img100,
    heading: "Swan art - 1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 101,
    img: img101,
    heading: "Swan art - 2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 102,
    img: img102,
    heading: "Swan art - 3",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 103,
    img: img103,
    heading: "Swan art - 4",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 104,
    img: img104,
    heading: "Swan art - 5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 105,
    img: img105,
    heading: "Swan art - 6",
    title: "God Of the World Showpice ",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 106,
    img: img106,
    heading: "Tree Elephant - 1",
    title: "Stylish Budha ShowPice",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 107,
    img: img107,
    heading: "Tree Elephant - 2",
    title: "Stylish Old Camera",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 108,
    img: img108,
    heading: "Tree Elephant - 3",
    title: "Stylish Coper Lady Face   ",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 109,
    img: img109,
    heading: "Tree Elephant - 4",
    title: "for Hall stylish Decoration",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 110,
    img: img110,
    heading: "Tree Elephant - 5",
    title: "Creating Mirror Dolphine",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 111,
    img: img111,
    heading: "Tree Elephant - 6",
    title: "God Of the World Showpice ",
    price: 500.0,
    orignialPrice: 1500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

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
  //? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel similique totam itaque, voluptatem id quis asperiores blanditiis eveniet consequuntur corporis?

  {
    id: 120,
    img: img120,
    heading: "White Swan-1",
    title: "Stylish Budha ShowPice",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 121,
    img: img121,
    heading: "White Swan-2",
    title: "Stylish Old Camera",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 122,
    img: img122,
    heading: "White Swan-3",
    title: "Stylish Coper Lady Face   ",
    price: 70000.0,
    orignialPrice: 13500,
    // link: `https://www.flipkart.com/torque-hatfield-fabric-2-seater-sofa/p/itm32ef26e1c5782?pid=SOFG6EZWDYVNYSQA&lid=LSTSOFG6EZWDYVNYSQAWNAWCK&marketplace=FLIPKART&q=sofa%20set%202%20seater&sattr[]=finish_color&st=finish_color`,
  },
  {
    id: 123,
    img: img123,
    heading: "White Swan-4",
    title: "for Hall stylish Decoration",
    price: 5000.0,
    orignialPrice: 3500,
    //  link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
  {
    id: 124,
    img: img124,
    heading: "White Swan-5",
    title: "Creating Mirror Dolphine",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/wood-you-engineered-4-seater-dining-table/p/itmceae0eeef38d0?pid=DNTGZM2HZHHGA9FZ&lid=LSTDNTGZM2HZHHGA9FZVIFTU6&marketplace=FLIPKART&q=dining+tabel&store=wwe%2Fur9&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=f935edfb-00f3-4dfe-831f-801a94629044.DNTGZM2HZHHGA9FZ.SEARCH&ppt=sp&ppn=sp&ssid=tyxm2cdhvk0000001716283762848&qH=25a474446f5abc42`,
  },
  {
    id: 125,
    img: img125,
    heading: "White Swan-6",
    title: "God Of the World Showpice ",
    price: 2500.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/finch-fox-eames-replica-faux-leather-dining-chair-cafe-chair-side-chair-accent-chair-leatherette/p/itmfbupzwtuga4f8?pid=DNCFBRXWVNZSU86Z&lid=LSTDNCFBRXWVNZSU86ZH5XTVK&marketplace=FLIPKART&q=cafe+chair&store=wwe%2Fy7b&srno=s_1_23&otracker=search&otracker1=search&fm=Search&iid=373a44d6-162b-4a0f-a46a-6ac9aec74bda.DNCFBRXWVNZSU86Z.SEARCH&ppt=sp&ppn=sp&ssid=muxs5l9eps0000001716283868307&qH=1ba16abd0c3368bb`,
  },
  {
    id: 126,
    img: img126,
    heading: "White Swan-7",
    title: "1980's Musice Player ",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },

  {
    id: 127,
    img: img127,
    heading: "White Swan-8",
    title: "1980's Musice Player ",
    price: 5000.0,
    orignialPrice: 3500,
    // link: `https://www.flipkart.com/bharat-lifestyle-benin-l-shape-fabric-6-seater-sofa/p/itm3d23d982be405?pid=SOFGXGK8TGRZGGSY&lid=LSTSOFGXGK8TGRZGGSYSXXICY&marketplace=FLIPKART&fm=productRecommendation%2Fsimilar&iid=R%3As%3Bp%3ASFSGWYHG2KDVRGGX%3Bl%3ALSTSFSGWYHG2KDVRGGXB5EINP%3Bpt%3App%3Buid%3A8d73f3a3-1755-11ef-ae6a-8bdc7ed0479d%3B.SOFGXGK8TGRZGGSY&ppt=pp&ppn=pp&ssid=lr35rqgk740000001716284103980&otracker=pp_reco_Similar%2BProducts_1_38.productCard.PMU_HORIZONTAL_Bharat%2BLifestyle%2BBenin%2BL%2BShape%2BFabric%2B6%2BSeater%2B%2BSofa_SOFGXGK8TGRZGGSY_productRecommendation%2Fsimilar_0&otracker1=pp_reco_PINNED_productRecommendation%2Fsimilar_Similar%2BProducts_GRID_productCard_cc_1_NA_view-all&cid=SOFGXGK8TGRZGGSY`,
  },
];


function ShopingList() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log("Product added to cart:", product);
  };
  useEffect(() => {
    AOS.init({
      duration: 500, // You can set a default duration for the animations
    });
  }, []);

  return (
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
  );
}

export default ShopingList;
