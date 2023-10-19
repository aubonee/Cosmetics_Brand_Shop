import React from 'react';
import Home from '../../pages/home/Home';
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from '../../layout/Mainlayout';
import AddProduct from '../../pages/addProduct/AddProduct';
import BrandlProducts from '../../pages/brandProductPages/BrandlProducts';
import Login from '../../pages/login/Login';
import Register from '../../pages/Signup/Register';
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
          path: "/brand/:brandName",
          element: <BrandlProducts></BrandlProducts>,
          loader: ()=>fetch('http://localhost:5000/products'),
        },
    

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      
  
      ]
    },
  ]);

export default router;