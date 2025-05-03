import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword,signInWithPopup,signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const signUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const userUpdate = (userData) => {
        return updateProfile(auth.currentUser,userData)
    }
    const resetPasswordEmail = (email) => {
        return sendPasswordResetEmail(auth,email);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
       return signInWithPopup(auth,googleProvider)
    }
    const gitHubProvider = new GithubAuthProvider();
    const gitHubLogin = () => {
       return signInWithPopup(auth,gitHubProvider);
    }
    
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authData = {
        user,
        loading,
        signUp,
        logOut,
        login,
        userUpdate,
        resetPasswordEmail,
        googleLogin,
        gitHubLogin
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