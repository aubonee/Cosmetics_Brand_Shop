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
        <div className=''>
          <div  className='grid grid-cols-2 gap-5'>
          {
                  cart.map(detail =><CartCard key={detail._id} detail={detail}></CartCard>)
        }
          </div>

          
        </div>
    );
};

export default MyCart;