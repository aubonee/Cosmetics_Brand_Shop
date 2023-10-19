import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin=e=>{
    
        e.preventDefault();
        const form =new FormData(e.currentTarget);
      const email=form.get('email');
      const password=form.get('password');
    console.log(email,password);

    }
    return (
        <div className=' flex flex-col justify-center items-center'>
   
        <div className="hero min-h-screen ">
<div className="hero-content flex-col ">
<div className="text-center lg:text-left">
  <h1 data-aos="fade-right"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="text-5xl text-[#702632] font-bold text-center">Login now!</h1>

</div>
<div data-aos="fade-down"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="card mx-24 flex-shrink-0 w-full  shadow-2xl bg-base-100">
  <form  onSubmit={handleLogin} className="card-body ">
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
     
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-[#702632] text-white">Login</button>

      {/* <div className='flex items-center justify-center my-2'><GoogleLogin ></GoogleLogin></div> */}
      
    </div>
  </form>
  <div className='text-center mb-5'><p>Dont have an account?</p> <span className='text-[#702632] font-bold'> <Link to="/register">Register</Link></span> </div>
</div>
</div>
</div>



    </div>
    );
};

export default Login;