// // import React from 'react'
// import Root from './Root'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import LandingPage from './Components/LandingPage/LandingPage'
// import './App.css'
// import About from './Components/About/About'
// import Contact from './Components/Conatact/Contact'
// import Shop from './Components/Shop/Shop'
// import Cart from './Components/Cart/Cart'
// import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
// import NotFoundPage2 from './Components/NotFoundPage/NotFoundPage2'
// import Tshirt from './Components/Shop/Filter-Product/Tshirt'
// import BlackBarasingha from './Components/Shop/Filter-Product/BlackBarasingha'
// import BlackPenthar from './Components/Shop/Filter-Product/BlackPenthar'
// import ElephantSet1 from './Components/Shop/Filter-Product/ElephantSet1'
// import ElephantSet2 from './Components/Shop/Filter-Product/ElephantSet2'
// import Engine from './Components/Shop/Filter-Product/Engine'
// import DandiyaCouple from './Components/Shop/Filter-Product/DANDIYACOUPLES'
// import GaneshBlue from './Components/Shop/Filter-Product/GaneshBlue'
// import GaneshOrange from './Components/Shop/Filter-Product/GaneshOrange'
// import GaneshTLight from './Components/Shop/Filter-Product/GaneshTLight'
// import GoldenCycle from './Components/Shop/Filter-Product/GoldenCycle'
// import Lion from './Components/Shop/Filter-Product/Lion'
// import Monk from './Components/Shop/Filter-Product/Monk'
// import PenGreenGanesh from './Components/Shop/Filter-Product/PenGreenGanesh'
// import SmallChidiya from './Components/Shop/Filter-Product/SmallChidiya'
// import SmallDolls from './Components/Shop/Filter-Product/SmallDolls'
// import Swan from './Components/Shop/Filter-Product/Swan'
// import TreeElephant from './Components/Shop/Filter-Product/TreeElephant'
// import WhiteBarsingha from './Components/Shop/Filter-Product/WhiteBarsingha'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <LandingPage />,
//       },
//       {
//         path: 'shop',
//         element: <Shop />,
//         children: [
//           {
//             path: 't-Shirt',
//             element: <Tshirt />,
//           },
//           {
//             path: 'black-Barasingha',
//             element: <BlackBarasingha />,
//           },
//           {
//             path: 'black-penthar',
//             element: <BlackPenthar />,
//           },
//           {
//             path: 'dandiya-couple',
//             element: <DandiyaCouple />,
//           },
//           {
//             path: 'elephant-set-1',
//             element: <ElephantSet1 />,
//           },
//           {
//             path: 'elephant-set-2',
//             element: <ElephantSet2 />,
//           },
//           {
//             path: 'engine-stand',
//             element: <Engine />,
//           },
//           {
//             path: 'ganesh-blue',
//             element: <GaneshBlue />,
//           },
//           {
//             path: 'ganesh-orange',
//             element: <GaneshOrange />,
//           },
//           {
//             path: 'ganesh-t-light',
//             element: <GaneshTLight />,
//           },
//           {
//             path: 'golden-cycle',
//             element: <GoldenCycle />,
//           },
//           {
//             path: 'lion',
//             element: <Lion />,
//           },
//           {
//             path: 'monk',
//             element: <Monk />,
//           },
//           {
//             path: 'pen-green-ganesh',
//             element: <PenGreenGanesh />,
//           },
//           {
//             path: 'small-chidiya',
//             element: <SmallChidiya />,
//           },
//           {
//             path: 'small-dolls',
//             element: <SmallDolls />,
//           },
//           {
//             path: 'swan',
//             element: <Swan />,
//           },
//           {
//             path: 'tree-elephant',
//             element: <TreeElephant />,
//           },
//           {
//             path: 'white-barasingha',
//             element: <WhiteBarsingha />,
//           },

//         ]
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'cart',
//         element: <Cart />,
//       },
//       {
//         path: 'notfoundpage',
//         element: <NotFoundPage />,
//       },
//       {
//         path: 'notfoundpage2',
//         element: <NotFoundPage2 />,
//       },


//     ]
//   }
// ])
// // console.log("Shashwat");
// function App() {

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App


// import React from 'react'
import Root from './Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Conatact/Contact'
import Shop from './Components/Shop/Shop'
 import Cart from './Components/Cart/Cart'
 import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
//  import NotFoundPage2 from './Components/NotFoundPage/NotFoundPage2'
 import Tshirt from './Components/Shop/Filter-Product/Tshirt'
 import BlackBarasingha from './Components/Shop/Filter-Product/BlackBarasingha'
 import BlackPenthar from './Components/Shop/Filter-Product/BlackPenthar'
 import ElephantSet1 from './Components/Shop/Filter-Product/ElephantSet1'
 import ElephantSet2 from './Components/Shop/Filter-Product/ElephantSet2'
 import Engine from './Components/Shop/Filter-Product/Engine'
 import DandiyaCouple from './Components/Shop/Filter-Product/DANDIYACOUPLES'
 import GaneshBlue from './Components/Shop/Filter-Product/GaneshBlue'
 import GaneshOrange from './Components/Shop/Filter-Product/GaneshOrange'
 import GaneshTLight from './Components/Shop/Filter-Product/GaneshTLight'
 import GoldenCycle from './Components/Shop/Filter-Product/GoldenCycle'
 import Lion from './Components/Shop/Filter-Product/Lion'
 import Monk from './Components/Shop/Filter-Product/Monk'
 import PenGreenGanesh from './Components/Shop/Filter-Product/PenGreenGanesh'
 import SmallChidiya from './Components/Shop/Filter-Product/SmallChidiya'
 import SmallDolls from './Components/Shop/Filter-Product/SmallDolls'
 import Swan from './Components/Shop/Filter-Product/Swan'
 import TreeElephant from './Components/Shop/Filter-Product/TreeElephant'
 import WhiteBarsingha from './Components/Shop/Filter-Product/WhiteBarsingha'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop',
        children: [
          { path: 't-shirt', element: <Tshirt /> },
          { path: 'black-barasingha', element: <BlackBarasingha /> },
          { path: 'black-penthar', element: <BlackPenthar /> },
          { path: 'dandiya-couple', element: <DandiyaCouple /> },
          { path: 'elephant-set-1', element: <ElephantSet1 /> },
          { path: 'elephant-set-2', element: <ElephantSet2 /> },
          { path: 'engine-stand', element: <Engine /> },
          { path: 'ganesh-blue', element: <GaneshBlue /> },
          { path: 'ganesh-orange', element: <GaneshOrange /> },
          { path: 'ganesh-t-light', element: <GaneshTLight /> },
          { path: 'golden-cycle', element: <GoldenCycle /> },
          { path: 'lion', element: <Lion /> },
          { path: 'monk', element: <Monk /> },
          { path: 'pen-green-ganesh', element: <PenGreenGanesh /> },
          { path: 'small-chidiya', element: <SmallChidiya /> },
          { path: 'small-dolls', element: <SmallDolls /> },
          { path: 'swan', element: <Swan /> },
          { path: 'tree-elephant', element: <TreeElephant /> },
          { path: 'white-barasingha', element: <WhiteBarsingha /> },
          
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
   
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
