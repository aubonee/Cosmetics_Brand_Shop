import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const ViewDetail = () => {
  const {user} =useContext(AuthContext)
    const detail =useLoaderData();
   const { _id ,name, brandname,category, photourl, price, rating, shortDesc} = detail;
   
    
    const handleCart =() => {
      const newItem={...detail,email:user?.email}
  fetch(`http://localhost:5000/cart`,{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },body:JSON.stringify(newItem)
  })
   

   
    }
   
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
        <button className='btn bg-red-400' onClick={()=>handleCart()}>Add to Cart</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetail;