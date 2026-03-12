import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

function Login() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <h2>{auth.isLoggedIn ? "User Logged In" : "User Logged Out"}</h2>

      <button
        onClick={() =>
          dispatch(login({ name: "Meet Patel" }))
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

export default Login;