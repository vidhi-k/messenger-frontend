import React from "react";
import "./SidebarChat.css";

function SidebarChat({users}) {

    return (
        <div>
            {users.map((user) => (
                <div className="sidebarChat">

                    <div className="sidebarChat_info">
                       
                        <h2>{user.name}</h2>
                        <p>The last message</p>
                    </div>
            </div>
            ))}
            
        </div>
    );

}

export default SidebarChat;