import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const Protected = () => {
    const auth = useSelector(state=>state.auth)
    if (!auth) {
        console.log("l");
        return  <Navigate to="/" />;
    }else{
        console.log("l");

        return <Navigate to="/signIn" />;
    }
    
}
