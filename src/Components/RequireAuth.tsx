import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ScreeningContext } from "../Context/ScreeningContext";
import { auth } from "../firebase";


export function RequireAuth({ children }: {children :JSX.Element}) {
    const { authenticated } = useContext(ScreeningContext);
    let location = useLocation();
    
        
        return authenticated ? children :  <Navigate to="/login" state={{ from: location }} replace />;


        
}
