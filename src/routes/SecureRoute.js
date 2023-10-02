import React from "react";
import {Outlet, Navigate} from 'react-dom'
export const SecureRoutes = () =>{

    const userSession = () =>{
        return true
    }
   
    return(
        userSession() ? <Outlet/> : <Navigate to="/"/>
    )
}