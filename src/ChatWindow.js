import React from "react";
import MessageHistory from "./MessageHistory";
import MessageAdd from "./MessageAdd";

const ChatWindow = ({ messages, users, onMessage }) => {
    const HandleonMessage = (message) => {
        onMessage(users.username, message);
    }

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{users.username}</div>
      <MessageHistory messages={messages} user={users}/>
      <MessageAdd onMessage={HandleonMessage}/>
    </div>
  );
};

export default ChatWindow;
