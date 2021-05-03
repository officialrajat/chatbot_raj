import React from 'react';
import Message from './message';

const Messages = ({messages})=>{
    return (
        <div className = "messagesSection">
          {
              messages.map(message =>{
                  return (
                      <div className = "messagescontainer">
                          <Message message  = {message} />
                          </div>
                  );
              })
          }
        </div>
    );
}
export default Messages;