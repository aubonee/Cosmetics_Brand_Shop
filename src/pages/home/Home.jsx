import React from 'react';
import Brands from '../../components/brands/Brands';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';
import FAQ from '../../components/faq/FAQ';


const Home = () => {
    const brands = useLoaderData()

    return (
        <div className='home-section'>
          
            <Banner></Banner>
            <Brands brands ={brands}></Brands>
            <WhyChooseUs></WhyChooseUs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;