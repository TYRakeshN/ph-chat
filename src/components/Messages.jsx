import React, { Component } from 'react';


class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
         <section className="col-sm-12 col-md-8 clearfix messages">
        <div className="messages-show" id="js-messagesContainer">
      
        </div>
        <div className="write-your-message">
          <form onSubmit={this.handleSubmit} id="js-sendMessage">
            <input
              type="text"
              className="input-phchat "
              id="js-messageBody"
              name="message"
              placeholder="Write your message"
              onChange={
                 this.handleChange}
            />
            <input type="submit" className="input-style" name="submit" />
          </form>
        </div>
      </section>
            </>
         );
    }
}
 
export default Messages;