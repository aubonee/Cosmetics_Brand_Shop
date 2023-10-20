import React from 'react';
import BrandCard from './BrandCard';
const Brands = ({brands,brandName}) => {

    return (
        <div>
             <div  className=' grid grid-cols-3 '>
         
        {brands &&
          brands
            .filter(brand => brand.brandname === brandName)
            .map(brand => <BrandCard key={brand.id} brand={brand} />)}
   </div>
            
 
        </div>
    );
};

export default Brands;