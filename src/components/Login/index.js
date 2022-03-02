import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/linkedin.png";
import { auth } from "../../config/firebase";
import { login } from "../../features/userSlice";
import "./login.css";

const initialState = {
  email: "",
  password: "",
  name: "",
  photoUrl: "",
};

function Login() {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (data.email && data.password && data.name && data.photoUrl) {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: data.name,
              photoURL: data.photoUrl,
            })
            .then(() => {
              dispatch(
                login({
                  displayName: data.name,
                  photoUrl: data.photoUrl,
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      alert("Register Successfully");
    } else {
      alert("Please fill all field");
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="" />
      <form onSubmit={login}>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          type="text"
          placeholder="Full name"
        />
        <input
          name="photoUrl"
          value={data.photoUrl}
          onChange={handleChange}
          type="text"
          placeholder="Profile URL"
        />
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
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
