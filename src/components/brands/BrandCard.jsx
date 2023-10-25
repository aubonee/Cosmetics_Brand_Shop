import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
    const { id,brandName, brandImage} =brand || {};

    return (
       < div>
      

       <Link to={`/brand/${brandName}`} relative="path">
        <div >
           <div className="card mb-10"></div>
          <div className='mb-10 relative w-[480px] h-[300px] '> <img src={brandImage} className='w-[480px] h-[300px]' alt=""   />
          <button className='absolute bg-[#FF6969] rounded-none text-white top-50 btn w-[480px]'>{brandName}</button> </div>
         
        </div>
        </Link>

       </div>
    
       
    );
};

export default BrandCard;