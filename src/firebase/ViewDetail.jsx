import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetail = () => {
    const oneproduct =useLoaderData();
    const { _id ,name, brandname,category, photourl, price, rating, shortDesc} = oneproduct;
   
    
    // console.log(loadData);
    return (
        <div className='flex items-center justify-center'>
           

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photourl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      <div className="badge badge-secondary">{price} BDT</div>
    </h2>
    <p>{shortDesc}</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline">Brand:{brandname}</div> 
      
      <div className="badge badge-outline">Rating : {rating}</div>
      <div className="badge badge-outline">Category :{category}</div>
      <div>
        <Link> <button>Add to Cart</button></Link>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetail;