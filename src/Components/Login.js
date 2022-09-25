import React from "react";
import { useState, useEffect } from "react";

export const Login =()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const LoginPage =()=>{

    }
    return(
        <div className="login">
        <label> Login</label>
  
        <input
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={LoginPage}> Login</button>
      </div>
    )
};