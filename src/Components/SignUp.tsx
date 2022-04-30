import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ScreeningContext } from "../Context/ScreeningContext";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  const { loginUser } = useContext(ScreeningContext);
  

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setPasswordConfirmShown(passwordConfirmShown ? false : true);
  };

  const navigate = useNavigate();

  const signUpError = () =>
    toast.error("Please enter your email and password", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const passwordLengthError = () =>
    toast.error("Password must be at least 8 characters", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const passwordNoMatchError = () =>
    toast.error("Passwords do not match", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  function handleSubmit(e: any) {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      signUpError();
      return;
    } else if (password.length < 8 || confirmPassword.length < 8) {
      passwordLengthError();
    } else if (password !== confirmPassword) {
      passwordNoMatchError();
    } else {
     
      let formData = new FormData(e.currentTarget);

      let email: string = formData.get("email") as string;
      let password: string = formData.get("password") as string;

      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        loginUser();
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
 
      setEmail("");
      setPassword("");
      navigate("/");
    }
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
   
        <label>
          <p>Email</p>
          <FaUser className="fauser"></FaUser>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <FaLock className="falock"></FaLock>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <i className="faEye" onClick={togglePasswordVisiblity}>
          {passwordShown ? <FaEye /> : <FaEyeSlash />}
        </i>
        <label>
          <p>Confirm Password</p>
          <FaLock className="falock"></FaLock>
          <input
            className="confirmPass"
            type={passwordConfirmShown ? "text" : "password"}
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </label>
        <i className="faEye" onClick={toggleConfirmPasswordVisiblity}>
          {passwordConfirmShown ? <FaEye /> : <FaEyeSlash />}
        </i>
        <div>
          <label className="alreadyAcc">Already have an account?</label>
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
        <div>
          <button className="submit" type="submit">
            SignUp
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
