// import { computeHeadingLevel } from "@testing-library/dom";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("button di click dengan function tambahan");
  };

  console.log(name);
  return (
    <div className="App">
      <div><h2>Login</h2></div>
      <br></br>
      <div>
        <p>Username</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <br></br>
      <div>
        <button
          onClick={() =>
            alert(
              `Halo ${name} Login anda berhasil dengan password ${password}`
            )
          }
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default Login;