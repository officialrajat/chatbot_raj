import React from "react";
import "../style.css";
const Message = ({ message }) => {
  return (
    <div className="messageCard">
      {message.isBot ? (
        <div className="botCard">
          <p>
            {message.text}
          </p>
        </div>
      ) : (
        <div className="userCard">
          <p>
            {message.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Message;