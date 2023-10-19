import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
export const AuthContext = createContext(null);
import app from '../firebase/firebase.config';
const AuthProvider = ({children}) => {
    const auth =getAuth(app)

    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true);

    const createUser =(email,password,photourl)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
        user,
        loading,
        createUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;