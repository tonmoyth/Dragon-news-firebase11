import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    console.log(user)

    const authData = {
        signUp
    }
    return (
        <div>
            <AuthContext value={authData}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;