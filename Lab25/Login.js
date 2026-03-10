import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => login(name)}>Login</button>
    </div>
  );
}

export default Login;