import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth';
export const AuthContext = createContext(null);
import app from '../firebase/firebase.config';
const AuthProvider = ({children}) => {
    const auth =getAuth(app)

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(displayName,photoURL)=>{
        console.log(displayName);
        return updateProfile(auth.currentUser,{displayName,photoURL})
        

    }
    
    const signIn=(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);  
      }
    

    const googleSignIn=() =>{
        const provider = new GoogleAuthProvider();
       
        // .then((result) => {
            
        //     const loggedInUser = result.user;
        //     console.log(loggedInUser);
        //     setUser(loggedInUser);
          
        //   })
        //   .catch((error) => {
        //     console.error(error);
        // });
        setLoading(true);
        return      signInWithPopup (auth, provider)  }

        
        const logOut =()=>{
            setLoading(true);
            return signOut(auth);
        }
        useEffect(()=>{
        const  unSubscribe =  onAuthStateChanged(auth,currentUser => {
               console.log('auth state changed', currentUser)
               setUser(currentUser);
               setLoading(false);
    
          });
          return () =>{
            unSubscribe ();
    
          }
              
       }, [])
    
    const authInfo ={
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut,
        updateUser,
        setUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;