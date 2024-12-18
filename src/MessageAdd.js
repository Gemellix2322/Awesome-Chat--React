import React from "react";
import { useState } from "react";

const MessageAdd = ({onMessage}) => {
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        const {value} = event.target;

        setMessage(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onMessage(message);
        setMessage("");
    }

    const isDisabled = () => {
        return(message === "");
      };

    return(
        <div>
        <form onSubmit={handleSubmit} className="input-group">
          <input
            type="text"
            value={message}
            className="form-control"
            placeholder="Enter your message..."
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
}

export default MessageAdd;