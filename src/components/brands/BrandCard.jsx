import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
    const { id,brandName, brandImage} =brand || {};

    return (
       < div>

       <Link to={`/brand/${id}`} relative="path">
        <div >
           <div className="card"></div>
           <img src={brandImage} alt="" width="450" height="300" className='rounded-none' />
           <h2>{brandName}</h2>
        </div>
        </Link>

       </div>
    
       
    );
};

export default BrandCard;