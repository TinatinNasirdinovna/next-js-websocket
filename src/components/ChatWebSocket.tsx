"use client";
import { useEffect, useState } from "react";
import scss from "./ChatWebSocket.module.scss";
import ChatLists from "./ChatLists/ChatLists";

interface IChatWebSocket {
  username: string;
  photo: string;
  message: string;
}

const ChatWebSocket = () => {
  const [messages, setMessages] = useState<IChatWebSocket[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [inputValue, setInputValue] = useState('')

  const initialWebSocket = () => {
    const ws = new WebSocket("wss://api-v2.elchocrud.pro");
    ws.onopen = () => {
      console.log("WebSocket opened");
    };
    ws.onmessage = (event) => {
      setMessages(JSON.parse(event.data));
    };
    ws.onerror = (error) => {
      console.log(error);
    };
    ws.onclose = () => {
      console.log("WebSocket closed");
      initialWebSocket()
    };
    setSocket(ws);
    
  };

  const sendMessage = () => {
    if(!inputValue) return
    const messageData = {
      event: "message",
      username: "Angelina Jolie",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTano__SGh7-pBv31Uu2acNPeg8sdVvzu5DnA&s",
      message: inputValue,
    };

    socket?.send(JSON.stringify(messageData));
    setInputValue('')
  };

  useEffect(() => {
    initialWebSocket();
  }, []);

  return (
    <section className={scss.ChatWebSocket}>
      <div className="container">
        <div className={scss.ChatWebSocketContent}>
          <ChatLists />
          <div className={scss.content}>
            <h1>Growth Hungry 🔥</h1>
            <div className={scss.sendingMess}>
              <input value={inputValue} type="text" onChange={(e) => setInputValue(e.target.value)}/>
              <button onClick={sendMessage}>send</button>
            </div>
            <div className={scss.messContent}>
              {messages.map((item, index) => (
                    <>

                    <div key={index} className={scss.message} style={{marginLeft: item.username === "Angelina Jolie" ? 'auto' : 0}}>
                    <img src={item.photo} alt="avatar" />
                    <div className={scss.messageContent}>
                      <h3>{item.username}</h3>
                      <p>{item.message}</p>
                    </div>
                  </div>
                    </>
                  
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWebSocket;
