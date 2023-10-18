import React from 'react';
import Home from '../../pages/home/Home';
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from '../../layout/Mainlayout';
import AddProduct from '../../pages/addProduct/AddProduct';
import BrandlProducts from '../../pages/brandProductPages/BrandlProducts';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader :()=> fetch('/brands.json'),
         
        },
        {
          path: "/addproduct",
          element: <AddProduct></AddProduct>,
         
        },
        // {
        //   path: "/brand/:id",
        //   element: <LorealProducts></LorealProducts>,
        // },
        {
          // path: "/brand/:brandname",
          path: "/brand",
          element: <BrandlProducts></BrandlProducts>,
          loader: ()=>fetch('http://localhost:5000/products'),
        },

        // {
        //   path: "/Login",
        //   element: <Login></Login>,
        // },
        // {
        //   path: "/Register",
        //   element: <Register></Register>,
        // },
      
  
      ]
    },
  ]);

export default router;