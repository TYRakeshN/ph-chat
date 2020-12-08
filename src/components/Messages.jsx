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
    
    handleChange=(e)=>{
        //this.setState({showMessages:false})
        this.setState({senderMessage:e.target.value});
    }
   
    handleSubmit = (e) => {
        Axios.post('https://ty-chat-app.herokuapp.com/messages',{
            sender:this.state.senderId,
            receiver:this.state.recevierId,
            message:this.state.senderMessage
        },{headers: { 'Authorization': `Bearer ${this.state.token}` }})
        .then((response) => {
            console.log(response);
            Axios.get(
                `https://ty-chat-app.herokuapp.com/messages?sender=${this.state.senderId}&receiver=${this.state.recevierId}`, 
                {headers: { 'Authorization': `Bearer ${this.state.token}` }}
                ).then((response)=>{
                  //  this.setState({showMessages:true});
                    console.log(response);
                    console.log(response.data.messages.messages);
                    this.setState({oldMessages:response.data.messages});
                    console.log(this.state.oldMessages);
                });
        });
        
  
    }
   
    render() { 
        const listItems = this.state.oldMessages.map((m) =>  
        
        <div className="bubble-message bubble-message-me">
        <p>{m.message}</p>  
        </div>
      ); 
        return ( 
            <>
         <section className="col-sm-12 col-md-8 clearfix messages">
        <div className="messages-show" id="js-messagesContainer">
        
           
                   {listItems}
                
      
       
             {/* <div className="bubble-message bubble-message-you"></div>*/}
          
        </div>
        <div className="write-your-message">
     <form>
     <input
              type="text"
              className="input-phchat"
              name="message"
              placeholder="Write your message"
             onChange={this.handleChange}
            />
            <input type="button" onClick={this.handleSubmit} value="SEND" />
     </form>
            
            
         
        </div>
      </section>
            </>
         );
    }
}
 
export default Messages;