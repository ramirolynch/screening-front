import { useContext, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { ScreeningContext } from "../Context/ScreeningContext";
import {getAuth, signOut} from "firebase/auth"
import { auth } from "../firebase";

export function Nav() {

    let { user_id, authenticated } = useContext(ScreeningContext);
    const navigate = useNavigate();
    const isActive = useState<boolean>(false);

    const user = auth.currentUser;

    function handleClick (){

        signOut(auth).then(() => {
            navigate('/');  
        })  
    }
    
    return(
        <div>
            <nav>
                <ul>
                    {!user && <li><NavLink style={({ isActive }) => ({borderBottom: isActive? "#64bbe3 solid 2px" : '', opacity: isActive? 1:""})} to='login'>Login</NavLink></li>}
                    {user && <li><NavLink style={({ isActive }) => ({borderBottom: isActive? "#64bbe3 solid 2px" : '', opacity: isActive? 1:""})} to='/'>Search</NavLink></li>}
                    {user && <li><NavLink style={({ isActive }) => ({borderBottom: isActive? "#64bbe3 solid 2px" : '', opacity: isActive? 1:""})} to={`matchreview/${user_id}`}>Match Reviews</NavLink></li>}
                    {user && <li><NavLink style={({ isActive }) => ({borderBottom: isActive? "#64bbe3 solid 2px" : '', opacity: isActive? 1:""})} to={`nomatch/${user_id}`}>White List</NavLink></li>}
                    {user && <li><a onClick={handleClick}>Log Out</a></li>}
                </ul>       
            </nav>
        </div>
    );

}