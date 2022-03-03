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
  const [isRegistered, setIsRegistered] = useState(false);

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

    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userAuth) => {
        dispatch(
          login({
            name: userAuth.user.name,
            photoUrl: userAuth.user.photoURL,
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((error) =>
        alert(
          "Error: " +
            error.message +
            " Please try again or register if you are not registered"
        )
      );
  };

  const register = (e) => {
    e.preventDefault();
    if (data.email && data.password) {
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
      <form onSubmit={isRegistered ? loginHandler : register}>
        {!isRegistered && (
          <>
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
          </>
        )}
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
        <button type="submit">{isRegistered ? "Login" : "Register"}</button>
      </form>
      {isRegistered ? (
        <p>
          Not a member?{" "}
          <span
            onClick={() => setIsRegistered(false)}
            className="login__register"
          >
            Register Now
          </span>{" "}
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setIsRegistered(true)}
            className="login__register"
          >
            Login now
          </span>{" "}
        </p>
      )}
    </div>
  );
}

export default Login;
