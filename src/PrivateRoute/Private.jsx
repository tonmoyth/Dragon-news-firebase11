import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const {pathname} = useLocation();
    

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }else{
        return <Navigate state={pathname} to={`/auth/login`}></Navigate>
    }
   
};

export default Private;