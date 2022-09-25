import React from "react";
import { useState,useEffect } from "react";

export const SignUp =()=>{
const [user, setUser] = useState(null)

const signUpPage =()=>{

}

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