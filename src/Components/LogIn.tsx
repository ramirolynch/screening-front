import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { ScreeningContext } from "../Context/ScreeningContext";
import { fetchUser, logIn } from "../Services/ScreeningApi";


export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { loginUser,addFirstName, addLastName, addUserId} = useContext(ScreeningContext);
  let location : any = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  let navigate = useNavigate();

  const loginError = (msg: any) =>
    toast.error(`${msg}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  function handleSubmit(e: any) {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      loginError("Please enter both a valid email and a password");
      return;
    } else {
      let formData = new FormData(e.currentTarget);

      let email: string = formData.get("email") as string;
      let password: string = formData.get("password") as string;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          //...
          loginUser();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          loginError("An invalid email and/or password was entered.");
        });
        logIn(email, password)
        .then((response) => fetchUser(response.id))
        .then((data) => {
          addFirstName(data.first_name);
          addLastName(data.last_name);
          addUserId(data.id);
        })
        .catch((error) => console.log(error));
      setEmail('');
      setPassword('');    
    }
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="loginContainer">
  
      
      <form onSubmit={handleSubmit}>
        <label className='emaillabel'>
          <p>Email</p>
          <div className='emailicon'>
            <FaUser className="fauser"></FaUser>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </label>
        <label className='passwordlabel'>
          <p>Password</p>
          <div className='passwordicon'>
            <FaLock className="falock"></FaLock>
          </div>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <i className="faEye" onClick={togglePasswordVisiblity}>
          <div className='faEyeDiv'>
            {passwordShown ? <FaEye /> : <FaEyeSlash />} 
          </div>
        </i>

        <div className='acc'>
          <label className="dontHaveAcc">Don't have an account?</label>
          <Link className="signuplink" to="/signup">
            Sign Up
          </Link>
        </div>

        <div>
          <button className="submit" type="submit">
            Login
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};