import React from 'react';
import BrandCard from './BrandCard';
const Brands = ({brands,brandName}) => {

    return (
        <div className='flex flex-col justify-center items-center'>
           <div className='text-[#C70039] font-extrabold my-10 text-4xl text-center'>Our Brands</div>
             <div  className=' grid sm:grid-cols-1  lg:grid-cols-2 gap-3 '>
         
        {brands &&
          brands
            .filter(brand => brand.brandname === brandName)
            .map(brand => <BrandCard key={brand.id} brand={brand} />)}
   </div>
            
 
        </div>
    );
};

export default Brands;