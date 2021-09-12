import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Scarlett",
      image:
        "data:image/jpeg;base64,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",
      message: "Whats up ❤️",
    },
    {
      name: "Scarlett",
      image:
        "data:image/jpeg;base64,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",
      message: "I love you ❤️",
    },
    {
      message: "Please come to me",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH SCARLETT ON 21/08/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
