import React from "react";
import "../assets/css/style.css";
//import logo from "../assets/avatars/profile-default.png";

import Axios from "axios";
import {  decodeToken } from "react-jwt";
import { useHistory } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      person:'',
      persons:[],
      token:this.props.token,
      messages:[],
      myMessage:'',
      senderId:null,
      recevierId:null
     }
  }
  

  componentDidMount() {
    Axios.get('https://ty-chat-app.herokuapp.com/users',{headers: { 'Authorization': `Bearer ${this.state.token}` }})
    .then((response)=>{
      console.log(response)
      const data=response.data.users;
      this.setState({persons:data});
      console.log(this.state.persons);
    }).catch(console.log);
  }
  beginChat=(rId,e)=>{
    this.props.history.push("/messages");
 this.setState({recevierId:rId});
 const myDecodedToken = decodeToken(this.state.token);
 setInterval(2000);
 const tokenID=myDecodedToken.id;
 this.setState({senderId:tokenID})
  console.log("R->"+this.state.recevierId);
  console.log("S->"+this.state.senderId);
  }

  handleSubmit=(e)=>{
    this.setState({myMessage:e.target.value});
    Axios.post('https://ty-chat-app.herokuapp.com/messages',{
		  sender: this.state.senderId,
      receiver: this.state.recevierId,
      message:this.state.myMessage
		},{headers: { 'Authorization': `Bearer ${this.state.token}` }})
    .then((response)=>{
      console.log(response)
      
    }).catch(console.log);
  }
  render() { 
    
    return ( <div className="container conversations">
    <div className="row">
      <section className="col-md-4 conversations-section">
        <ul className="user-list">
         AVAILABLE USERS
        { this.state.persons.map(person => <li  key={person.id}><button value={person.id} onClick={(e)=>this.beginChat(person.id)} className="user-who-wrote-you p2">{person.name}</button> </li>)}  
        </ul>
        <div className="search-user">
        </div>
        <ul className="user-list">
        {/* INTERACTED USERS*/}
        </ul>
      </section>
     
    </div>
  </div> );
  }
}

