import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ChatWindow from "./ChatWindow";
import { useState} from "react";

const App = () => {

  const users = [{ username: "Amy" }, { username: "John" }];

const [messages, setMessages]  = useState([]);

const onMessage = (username, message) => {
  const newMessage = {
    username: username,
    text: message,
  }

  setMessages(messages.concat([newMessage]))
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user) => (
          <ChatWindow
          key={user.username} 
          users={user} 
          messages={messages}
          onMessage={onMessage}/>  
        ))}
      </div>
    </div>
  );
};

export default App;
