import React from 'react';
import Brands from '../../components/brands/Brands';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const brands = useLoaderData()

    return (
        <div className='home-section'>
          
            <Banner></Banner>
            <Brands brands ={brands}></Brands>
        </div>
    );
};

export default Home;