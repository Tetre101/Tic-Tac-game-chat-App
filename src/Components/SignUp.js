import React from "react";
import { useState} from "react";
import Axios from "axios";
import Cookies from "universal-cookie";



export const SignUp =({setIsAuth})=>{
const cookies = new Cookies();
const [user, setUser] = useState(null)

const signUpPage =()=>{
Axios.post ("http://localhost:8080/signup",user).then(res =>{
    const { token, userId, firstName, lastName, username, hashedPassword } =
    res.data;  
    cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true);
});
};

    return(
        <div className="signUp">
        <label> Sign Up</label>
        <input
        placeholder="First Name"
        onChange={(event)=>{
        setUser ({...user, firstName: event.target.value})    
        }}/>
         <input
         placeholder="Last Name"
        onChange={(event)=>{
        setUser ({...user, LastName: event.target.value})    
        }}/>
         <input
         placeholder="Username"
        onChange={(event)=>{
        setUser ({...user, username: event.target.value})    
        }}/>
         <input
         placeholder="password"
        onChange={(event)=>{
        setUser ({...user, password: event.target.value})    
        }}/>
        <button onClick={signUpPage}>Sign Up </button>
    </div>
    )
};