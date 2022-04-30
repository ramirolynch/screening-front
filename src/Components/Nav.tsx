import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ScreeningContext } from "../Context/ScreeningContext";
import {getAuth, signOut} from "firebase/auth"
import { auth } from "../firebase";

export function Nav() {

    let { user_id, authenticated } = useContext(ScreeningContext);
    const navigate = useNavigate();

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
                    {!user && <li><Link to='login'>Login</Link></li>}
                    {user && <li><Link to='/'>Search</Link></li>}
                    {user && <li><Link to={`matchreview/${user_id}`}>Match Reviews</Link></li>}
                    {user && <li><Link to={`nomatch/${user_id}`}>White List</Link></li>}
                    {user && <li><button onClick={handleClick}>Log Out</button></li>}
                </ul>       
            </nav>
        </div>
    );

}