import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar alt={name} className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__stamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
