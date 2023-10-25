import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

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
  .then(res=>res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Succesfully Added to Cart!',
                'success'
              )


        }
      })
   

   
    }
   
    return (
        <div className='flex items-center justify-center'>
           

            <div className=" my-3 card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='h-[600px] w-[280px] bg-gray-300' src={photourl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      <div className="badge badge-secondary">{price} BDT</div>
    </h2>
    <p>{shortDesc}</p>
    <div>
     <div className="badge badge-outline  p-2 m-2">Brand:{brandname}</div> 
      <div className="badge badge-outline p-2 m-2">Rating : {rating}</div>
      <div className="badge badge-outline  p-2 m-2">Category :{category}</div>
     </div>
    <div className="card-actions justify-center">
    
       <br />
       <div className='flex justify-end items-center'> 
        <button className='btn bg-red-400' onClick={()=>handleCart()}>Add to Cart</button>
      </div>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetail;