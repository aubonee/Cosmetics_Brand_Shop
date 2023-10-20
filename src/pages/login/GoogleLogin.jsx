import { getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    // const[user,setUser] =useState(null);
    const {googleSignIn} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(' login page', location);
    
   // const auth = getAuth(app);
   // const provider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{
        console.log('google sign in')
      
        googleSignIn()
          .then((result) => {
                
                const loggedInUser = result.user;
                console.log(loggedInUser);
                console.log(result.user.displayName)
                console.log(loggedInUser.displayName)
                 // navigate after login
                 navigate(location?.state ? location.state : '/');
               
              
              })
              .catch((error) => {
                console.error(error);
            });
   
     }
    return (
        <div>
            <button onClick={handleGoogleSignIn } className='font-extrabold underline underline-offset-4  text-[#702632]'>Google Login</button>
       {/* {
        user && <div>
            <h1>{user?.displayName}</h1>
           
            </div>
       } */}
        </div>
    );
};

export default GoogleLogin;