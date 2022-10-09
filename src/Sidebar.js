import React, { useEffect, useState } from "react";
import "./Sidebar.css"; 
import SidebarChat from "./SidebarChat";
function Sidebar(props){

    return (
        <div className="sidebar">
            <div className="sidebar_chats">

                <SidebarChat users = {props.users}/>
            </div>
        </div>
    );

}
export default Sidebar;