import React from 'react';
import BrandCard from './BrandCard';
const Brands = ({brands}) => {

    return (
        <div>
             <div  className=' grid grid-cols-3 '>
           {
               brands?.map(brand=><BrandCard key={brand.id} brand={brand}></BrandCard> )
           }
   </div>
            
        </div>
    );
};

export default Brands;