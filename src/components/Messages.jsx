import React, { Component } from "react";
import Axios from "axios";
import "../assets/css/style.css";
import equal from 'fast-deep-equal'


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderId: this.props.sender,
      recevierId: this.props.receiver,
      token:localStorage.getItem('token') ,
      senderMessage: "",
      oldMessages: [],
      showMessages: false,
      receiverName:this.props.messageRecieverName
    };
  }
  formSubmitHandler=(e)=>{
    e.preventDefault();
  }
  handleChange = (e) => {
      this.setState({ senderMessage: e.target.value });
  };
componentDidMount(){
  setInterval(() =>
  Axios.get(
    `https://ty-chat-app.herokuapp.com/messages?sender=${this.state.senderId}&receiver=${this.state.recevierId}`,
    { headers: { Authorization: `Bearer ${this.state.token}` } }
  ).then((response) => {
    this.setState({ oldMessages: response.data.messages });
    console.log(this.state.oldMessages);
    
  }),1000);
}
componentWillReceiveProps(newProps) {
  this.setState({receiverName: newProps.messageRecieverName,recevierId:newProps.receiver});
}
componentDidUpdate(prevProps){
  
  if(!equal(this.props.receiver,prevProps.receiver)){
  Axios.get(
    `https://ty-chat-app.herokuapp.com/messages?sender=${this.state.senderId}&receiver=${this.state.recevierId}`,
    { headers: { Authorization: `Bearer ${this.state.token}` } }
  ).then((response) => {
    this.setState({ oldMessages: response.data.messages });
    console.log(this.state.oldMessages);
    
  });
}
}
  handleSubmit = (e) => {
    if(this.state.senderMessage === ''){
      alert("message cannot be empty!!")
   }else{
    Axios.post(
      "https://ty-chat-app.herokuapp.com/messages",
      {
        sender: this.state.senderId,
        receiver: this.state.recevierId,
        message: this.state.senderMessage,
      },
      { headers: { Authorization: `Bearer ${this.state.token}` } }
    ).then((response) => {
     
      Axios.get(
        `https://ty-chat-app.herokuapp.com/messages?sender=${this.state.senderId}&receiver=${this.state.recevierId}`,
        { headers: { Authorization: `Bearer ${this.state.token}` } }
      ).then((response) => {
        this.setState({ oldMessages: response.data.messages });
        this.setState({ senderMessage: "" });
      });
    });
  }
  };

  render() {
    const listItems = this.state.oldMessages.map((m) => {
      if (parseInt(m.sender) === this.state.senderId) {
      return  (<div className="bubble-message bubble-message-me">
          <p key="m.sender">{m.message}</p>
        </div>);
      }else {
        return(<div className="bubble-message bubble-message-you">
            <p key="m.receiver">{m.message}</p>
        </div>)
      }
    });
    return (
      <>
      
        <section className="col-sm-10 col-md-8 clearfix messages">
        <p className="message-reciver-style">Recipient Name : {this.state.receiverName}</p>
        <hr></hr>
          <div className="messages-show" id="js-messagesContainer">
            {listItems}
          </div>
          <div className="write-your-message">
            <form onSubmit={this.formSubmitHandler}>
            <div className="form-group">
            <div className="row">
            <div className="col col-lg-10">
              <input
                type="text"
                className="form-control "
                id="ph-chat-input-field"
                name="message"
                value={this.state.senderMessage}
                placeholder="Write your message here"
                onChange={this.handleChange}
                required
              />
              </div>
             
              <div className="col col-sm-2">
              <input type="button" className="btn btn-outline-dark"onClick={this.handleSubmit} value="SEND" />
              </div>
              </div>
              </div>
              </form>
          </div>
        </section>
      </>
    );
  }
}
export default Messages;
