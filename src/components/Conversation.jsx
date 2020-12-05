import React from "react";
import "../assets/css/style.css";
function Conversation() {
  return (
    <>
      
        <section className="col-sm-12 col-md-8 clearfix messages">
          <div className="messages-show" id="js-messagesContainer">
          <div class="bubble-message bubble-message-me"><p>Hai</p></div>
          <div class="bubble-message bubble-message-you"><p>Hello!!</p></div>
          </div>
          <div className="write-your-message">
            <form id="js-sendMessage">
              <input
                type="text"
                className="input-phchat "
                id="js-messageBody"
                name="message"
                placeholder="Write your message"
              />
              <input type="submit" className="input-style" name="submit" />
            </form>
          </div>
        </section>
    </>
  );
}

export default Conversation;
