import React from 'react';
import '../assets/css/style.css';
function Conversation() {
    return (
      <>
      <div>
 <section className="col-sm-12 col-md-8 clearfix messages">
			<div className="messages-show" id="js-messagesContainer"></div>

			<div className="write-your-message">
				<form  method="POST" id="js-sendMessage">
                    <input type="text" className="input-phchat input-style" id="js-messageBody" 
                    name="message" placeholder="Write your message" />
					<input type="submit" className="input-style" name="submit"  />
				</form>
			</div>
		</section>
        </div>
      </>
    );
  }
  
  export default Conversation;