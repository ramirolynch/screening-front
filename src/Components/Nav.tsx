import { useContext } from "react";
import { Link } from "react-router-dom";
import { ScreeningContext } from "../Context/ScreeningContext";

export function Nav() {

    let { user_id, authenticated } = useContext(ScreeningContext);
    return(
        <div>
            <nav>
                <ul>
                <li><Link to='login'>Login</Link></li>
                    <li><Link to='signup'>Sign Up</Link></li>
                    <li><Link to={`matchreview/${user_id}`}>Match Reviews</Link></li>
                    <li><Link to={`nomatch/${user_id}`}>White List</Link></li>
                    <li><Link to='/'>Search</Link></li>
                </ul>       
            </nav>
        </div>
    );

}