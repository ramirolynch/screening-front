import { Link } from "react-router-dom";

export function Nav() {
    return(
        <div>
            <nav>
                <ul>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='signup'>Sign Up</Link></li>
                <li><Link to='/'>Search</Link></li>
                </ul>       
            </nav>
        </div>
    );

}