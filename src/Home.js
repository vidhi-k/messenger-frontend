import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Chat from './Chat';
import "./Home.css";
import Sidebar from './Sidebar';
import axios from "./axios";
import {useLocation} from 'react-router-dom';

function Home(){

    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const currUser = location.state.user.name;
    // console.log(location.state.user.name);
    useEffect(() => {
        axios.get("/users/get", {
            name: currUser
        })
          .then(response => {
            console.log(response.data);
            setUsers(response.data);
          })
      }, [])

    
    return (
        <div className="app">
            <div className='app_body'>
                <Sidebar users = {users}/>
                <Chat currUser = {currUser}/>
            </div>
            
        </div>
    );
}
export default Home;


