import React from 'react';
import styled from 'styled-components';
import "./signup.css";
import { useState, useEffect } from "react";
import axios from './axios';
import { useNavigate, Link } from "react-router-dom";

function SignupPage(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = await axios.post("/", {
            name,
            password
        });
            console.log(data);
            if(data.status === 201){
                navigate("/home", {state:{user: {name}}});
            }

        } catch (error) {
            console.log("done");
            navigate("/");
        }       
    }

    return (
        <div className="login">
            <div className="login_container">
                
                <input type="text" placeholder='Name' className='input_name' onChange={e => setName(e.target.value)} />
                <input type="password" placeholder='Password' className='input_name' onChange={e => setPassword(e.target.value)} />
                <button className='login_button' type='submit' onClick={(e) => handleSubmit(e)}>Signup</button>

            </div>

        </div>
    );
}
export default SignupPage;


