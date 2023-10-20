import React from 'react';
import Home from '../../pages/home/Home';
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from '../../layout/Mainlayout';
import AddProduct from '../../pages/addProduct/AddProduct';
import BrandlProducts from '../../pages/brandProductPages/BrandlProducts';
import Login from '../../pages/login/Login';
import Register from '../../pages/Signup/Register';
import Update from '../update/Update';
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
   
        {
          
          path: "/brand/:brandName",
          element: <BrandlProducts></BrandlProducts>,
          loader: ({params})=>fetch(`http://localhost:5000/brand/${params.brandName}`),
        },
        
        {
         
          path: "/brand/update/:id",
          element: <Update></Update>,
          loader: ({params})=>fetch(`http://localhost:5000/brand/update/${params.id}`),
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