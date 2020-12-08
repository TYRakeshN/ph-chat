import React, { Component } from 'react';
import Axios from "axios";
import "../assets/css/style.css";

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            senderId:this.props.sender,
            recevierId:this.props.receiver,
            token:localStorage.getItem('token'),
            senderMessage:'',
            recevierMessage:'',
            oldMessages: this.props.messages,
            showMessages:false,
            error: true
         }
    }
    // handleChange=(e)=>{
    //     Axios.post('https://ty-chat-app.herokuapp.com/messages',{headers: { 'Authorization': `Bearer ${this.state.token}` }})
    //     .then((response) => {
    //         console.log(response);
    //         this.setState({error: response.data.error});
    //     });
        
    //     Axios.get('https://ty-chat-app.herokuapp.com/messages?sender=senderID&receiver=receiverID', {headers: { 'Authorization': `Bearer ${this.state.token}` }})
    // .then((response) => {
    //   console.log(response);
    //   const data = response.data.messages;
    //   this.setState({persons: data});
    //   console.log(this.state.persons);
    // } )
    
    //     this.setState({ senderMessage:e.target.value});
    //     this.setState({showMessages:true})
    //     console.log(this.state.senderMessage);
    // }
   
    handleSubmit = (e) => {
        Axios.post('https://ty-chat-app.herokuapp.com/messages',{headers: { 'Authorization': `Bearer ${this.state.token}` }})
        .then((response) => {
            console.log(response);
            this.setState({error: response.data.error});
        });
        
        Axios.get('https://ty-chat-app.herokuapp.com/messages?sender=senderID&receiver=receiverID', {headers: { 'Authorization': `Bearer ${this.state.token}` }})
    .then((response) => {
      console.log(response);
      const data = response.data.messages;
      this.setState({persons: data});
      console.log(this.state.persons);
    } )
    
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
              <div className="bubble-message bubble-message-me">
                  <p>{this.state.oldMessages}</p>
                  </div>
          ) : null}
       {this.state.showMessages && this.state.recevierMessage
         ? (
              <div className="bubble-message bubble-message-you"><p>{this.state.recevierMessage}</p></div>
          ) : null}
        </div>
        <div className="write-your-message">
     <form>
     <input
              type="text"
              className="input-phchat "
              id="js-messageBody"
              name="message"
              placeholder="Write your message"
             
            />
            <input type="button" className="input-style" onClick={this.handleSubmit} name="submit" />
     </form>
            
            
         
        </div>
      </section>
            </>
         );
    }
}
 
export default Messages;