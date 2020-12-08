import React, { Component } from 'react';
import Axios from "axios";
import "../assets/css/style.css";
class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            senderId:this.props.sender,
            recevierId:this.props.receiver,
            token:this.props.token,
            senderMessage:'',
            recevierMessage:'',
            oldMessages:[],
            showMessages:false
         }
    }
    handleChange=(e)=>{
        this.setState({ senderMessage:e.target.value});
        this.setState({showMessages:true})
        console.log(this.state.senderMessage);
    }
   
    
    render() { 
        return ( 
            <>
         <section className="col-sm-12 col-md-8 clearfix messages">
        <div className="messages-show" id="js-messagesContainer">
        {this.state.showMessages && this.state.senderMessage
         ? (
              <div className="bubble-message bubble-message-me"><p>{this.state.senderMessage}</p></div>
          ) : null}
       {this.state.showMessages && this.state.recevierMessage
         ? (
              <div className="bubble-message bubble-message-me"><p>{this.state.recevierMessage}</p></div>
          ) : null}
        </div>
        <div className="write-your-message">
     
            <input
              type="text"
              className="input-phchat "
              id="js-messageBody"
              name="message"
              placeholder="Write your message"
              onChange={this.handleChange}
            />
            {/*<input type="submit" className="input-style" name="submit" />*/}
         
        </div>
      </section>
            </>
         );
    }
}
 
export default Messages;