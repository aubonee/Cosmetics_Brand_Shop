import React from 'react';
import Home from '../../pages/home/Home';
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from '../../layout/Mainlayout';
import AddProduct from '../../pages/addProduct/AddProduct';
import BrandlProducts from '../../pages/brandProductPages/BrandlProducts';
import Login from '../../pages/login/Login';
import Register from '../../pages/Signup/Register';
import Update from '../update/Update';
import ViewDetail from '../../firebase/ViewDetail';
import ErrorPage from '../../pages/ErrorPage';
import PrivateRoute from '../PrivateRoute';
import MyCart from '../../pages/cart/MyCart';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
          loader :()=> fetch('/brands.json'),
         
        },
        {
          path: "/addproduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
         
        },
        // {
        //   path: "/whychoose",
        //   element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
         
        // },
   
        {
          
          path: "/brand/:brandName",
          element: <BrandlProducts></BrandlProducts>,
          loader: ({params})=>fetch(`https://cosmetics-brand-server.vercel.app/brand/${params.brandName}`),
        },
        
        {
         
          path: "/brand/update/:id",
          element:<PrivateRoute><Update></Update></PrivateRoute> ,
          loader: ({params})=>fetch(`https://cosmetics-brand-server.vercel.app/brand/update/${params.id}`),
        },
        {
         
          path: "/viewDetail/:id",
          element: <PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
          loader: ({params})=>fetch(`https://cosmetics-brand-server.vercel.app/viewDetail/${params.id}`),
        },

       
        {
          path: "/myCart",
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
          
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