import React from "react";
import logo from "../../assets/img/linkedin.png";
import "./login.css";
function Login() {

  const login = () => {
      
  };
    
  const register = () => {};

  return (
    <div className="login">
      <img src={logo} alt="" />
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Profile URL" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>{" "}
      </p>
    </div>
  );
}

export default Login;
