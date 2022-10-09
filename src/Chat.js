import "./Chat.css";
import {useEffect, useState} from "react";
import axios from "./axios";

function Chat({currUser}) {

    const [input, setInput] = useState("");
    const [chat_messages, setChat] = useState({});
    useEffect(() => {
        axios.get("/messages/get", {
            sender: {currUser},
            receiver: "Someone"
        })
          .then(response => {
            console.log(response.data);
            setChat(response.data);
          })
      }, [])


      const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const data = await axios.post("/messages/new", {
                content: input,
                from: currUser,
                to: "Someone",
                timeStamp: new Date().toLocaleTimeString,
                date: new Date().toDateString
            });

            // if(data.status === 200){
            //     console.log("success");
            // }
            console.log(data.data);

        } catch (error) {
            console.log("done");
        }       
    }
    
    return (
        <div className="chat">
            <div className="chat_header">
                
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ..</p>
                </div>
                <div className="chat_headerRight">
                    
                </div>
            </div>

            <div className="chat_body">
            <p className={`chat_message`}>
                    <span className="chat_name">name</span>
                    message
                    <span className="chat_timestamp">
                        timestamp
                    </span>
                </p>
                
            </div>

            <div className="chat_footer">
               
                <form>
                    <input  placeholder="Type a message" type="text" onChange={e => setInput(e.target.value)}/>
                    <button  type="submit" onClick={(e) => handleSubmit(e)}>Send</button>
                </form>
                
            </div>
        </div>
    );
}
export default Chat;