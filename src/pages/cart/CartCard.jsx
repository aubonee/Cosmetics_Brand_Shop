import React from 'react';
import Swal from 'sweetalert2';

const CartCard = ({detail,cart,setCart}) => {

    
    const { _id ,name, brandname,category, photourl, price, rating, shortDesc} = detail;

    const handleCartDelete =(_id )=>{
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
           fetch(`http://localhost:5000/cart/${_id}`, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               console.log("data");
               console.log(data);
               if(data.deletedCount > 0){
                   Swal.fire(
                       'Deleted!',
                       'This product is deleted from your cart.',
                       'success'
                    )
                    const cartdelete = cart.filter(item=>item._id!=_id)
                    setCart(cartdelete);
               }
           })
          }
         })
}


    return (
        

            <div className="mx-auto py-5 my-5 card max-w-[900px] h-[250px] card-side bg-base-100 shadow-xl">
  <figure className='h-full'><img className='ml-5 h-full' src={photourl} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"> {name}</h2>
    <p>{shortDesc}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleCartDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
           
      
    );
};

export default CartCard;