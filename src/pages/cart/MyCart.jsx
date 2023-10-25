import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import CartCard from './CartCard';


const MyCart = () => {
   const [cart, setCart]=useState([])
    const {user} =useContext(AuthContext)
    useEffect(()=>
    {
        fetch(`http://localhost:5000/cart/${user?.email}`).then(res=>res.json())
        .then(data=>setCart(data))
    },[user])

         console.log(cart);
    return (
        <div className='min-h-[60vh]'>
          <div  className='flex-flex-col justify-center items-center'>

          {cart.length !== 0 ? (
      
      
     
      cart.map(detail =><CartCard cart={cart} setCart={setCart} key={detail._id} detail={detail}></CartCard>))
      : <div className='flex justify-center items-center'>  <h2 className=' text-5xl font-extra-bold mt-10 w-[500px] text-center'>There is no products in the Cart</h2></div>
        
    }
          {/* {
                  cart.map(detail =><CartCard key={detail._id} detail={detail}></CartCard>)
        } */}
          </div>

          
        </div>
    );
};

export default MyCart;