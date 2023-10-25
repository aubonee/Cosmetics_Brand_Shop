import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
const Mainlayout = () => {
    return (
        <div className='bg-[#F8F0E5] dark:bg-slate-900 dark:text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Mainlayout;