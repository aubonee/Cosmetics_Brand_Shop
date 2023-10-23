import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import GoogleLogin from '../login/GoogleLogin';

const Register = () => {
    
    const [registerError,setRegisterError]=useState('');
    const {createUser,updateUser,setUser} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(' register page', location);
    const handleRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
       
        const name = form.get('name');
        const photourl = form.get('photourl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photourl,email,password);


        setRegisterError('')

        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,}$/.test(password)){
          setRegisterError('password invalid');
          return;

        }

  
       createUser(email,password)
       .then(result=>{
        updateUser(name, photourl)
        .then(()=>{
          setUser((prev)=>
          {
                    const updatedUser={...prev,displayName:name,photoURL:photourl}
                    return updatedUser;
          })
          navigate(location?.state ? location.state : '/');
          console.log(result.user)
          console.log(result.user)
          Swal.fire({
           icon: 'success',
           title: 'Registration  Succesful',
           showConfirmButton: false,
           timer: 1500
         })
        })
          // navigate after login
         

       })
        .catch(error=>{
          console.error(error)
          setRegisterError(error.message);
         
        
        } )
       


    }
    return (
        <div className='w-full'> 
        <div>
     
  <div><h2 className='text-center'> </h2></div>

     <div className="hero w-full min-h-screen bg-base-200">
<div className="hero-content flex-col ">
<div className="text-center lg:text-left">
<h1 className="text-5xl font-bold text-[#702632]">Register now!</h1>

</div>
<div className="card mx-24 flex-shrink-0 w-full  shadow-2xl bg-base-100">
<form onSubmit={handleRegister}  className="card-body">
<div className="form-control ">
   <label className="label">
     <span className="label-text">Full Name</span>
   </label>
   <input type="text" name='fullname' placeholder="Full Name" className="input input-bordered" required />
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Photo URL</span>
   </label>
   <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" required />
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Email</span>
   </label>
   <input type="email" name='email' placeholder="email" className="input input-bordered" required />
 </div>
 <div className="form-control">
   <label className="label">
     <span className="label-text">Password</span>
   </label>
   <input type="password" name='password' placeholder="password" className="input input-bordered" required />
   {
 registerError && <p className='text-red-600 p-3'>{registerError}</p> }
  
 </div>
 <div className="form-control mt-6">
   <button className="btn bg-[#702632] text-white">Register</button>
 
   <div className='flex items-center justify-center my-2'><GoogleLogin ></GoogleLogin></div>
 </div>
</form>

<div className='mx-auto text-center my-5'><p>Already have an account?</p>  <span className='font-bold text-[#702632]'> <Link to="/Login">Login</Link></span></div>
</div>
</div>
</div>
 </div>

   </div>
    );
};

export default Register;