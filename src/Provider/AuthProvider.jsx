import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        signUp,
        logOut,
        login
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