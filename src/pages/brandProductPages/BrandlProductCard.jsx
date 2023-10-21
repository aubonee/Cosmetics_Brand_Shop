import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BrandlProductCard = ({oneproduct}) => {
  
    const { _id ,name, brandname,category, photourl, price, rating, shortDesc} = oneproduct;
   
    const handleDelete=_id=>{
             console.log(_id);
             Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
                //console.log("delete confirmed");
                fetch(`https://cosmetics-brand-server.vercel.app/products/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log("data");
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                         )
                    }
                })
                }
              })
    }
  
    return (
        <div>
               <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={photourl} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{brandname}</h2>
    <p>{category}</p>
    <p>{shortDesc}.</p>
    <div className="card-actions justify-end">
        <p>{category}</p>
        {/* <button className="btn btn-primary">Edit</button> */}
      <Link to={`/brand/update/${_id}`} ><button className="btn btn-primary">Edit</button></Link>
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
      <Link to={`/viewDetail/${_id}`} > <button className="btn bg-red-400">View Details</button> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandlProductCard;