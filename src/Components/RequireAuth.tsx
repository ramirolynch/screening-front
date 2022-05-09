import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ScreeningContext } from "../Context/ScreeningContext";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";


export function RequireAuth({ children }: {children :JSX.Element}) {
    
    const user = auth.currentUser;

    let location = useLocation();
    
    return user ? children :  <Navigate to="/login" state={{ from: location }} replace />;
        
}
