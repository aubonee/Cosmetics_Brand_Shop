import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div >
               <div className="card flex flex-col w-[400px]  mx-10 my-10 bg-base-100 shadow-xl">
                <div> <figure><img className='  w-[400px] h-[280px]' src={photourl} alt="Album"/></figure></div>
 
  <div className="my-5 card-body text-center p-0 px-3">
  <h2 className=' text-yellow-500'>{rating}  <FontAwesomeIcon icon={ faStar} /></h2> 
    <h2 className="text-2xl font-bold text-center">{name}</h2>
   <div className='mx-0  flex  justify-between items-center'> 
    <h2 className=" text-2xl font-bold text-[#FF6969] ">{brandname}</h2>
    <h2 className='text-sm text-white px-2 py-1  bg-[#FF6969] rounded-lg '>{category}</h2>
   </div>
    <p>{shortDesc}</p>
   
    <br />
    <div className=' gap-5'>
      
        {/* <button className="btn btn-primary">Edit</button> */}
        <div className='flex justify-around items-center'>

        <div><Link to={`/brand/update/${_id}`} ><button className="font-2xl text-blue-500">Edit</button></Link></div>  
        <div><Link to={`/viewDetail/${_id}`} > <button className="btn text-white bg-[#141E46]">View Details</button> </Link></div>  
   <div className='-mt-2 mb-5'> <button onClick={()=>handleDelete(_id)} className=" text-blue-500">Delete</button></div> 

        </div>
    
   
    
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandlProductCard;