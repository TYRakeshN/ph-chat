import React from "react";
import "../assets/css/style.css";
//import logo from "../assets/avatars/profile-default.png";
import Axios from "axios";
import {  decodeToken } from "react-jwt";
import Messages from "./Messages";
import mainLogo from'../assets/avatars/profile-default.png';

let token = localStorage.getItem('token');
const myDecodedToken = decodeToken(token);

export default class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      persons:[],
      messages:[],
      myMessage:'',
      senderId:null,
      recevierId:null,
      showComponent:false,
      user:'',
      receiverName:''
     }
  }
  

  componentDidMount() {
   
    Axios.get('https://ty-chat-app.herokuapp.com/users',
    {headers: { 'Authorization': `Bearer ${token}` }})
    .then((response)=>{
      const data=response.data.users;
      const userName=myDecodedToken.name;
      this.setState({user:userName});
      this.setState({persons:data}, () => {
        console.log(this.state.persons);
      });
    }).catch(console.log);
  }
  
  beginChat=(recepientId,recepientName,e)=>{
    const tokenID=myDecodedToken.id;
    this.setState({
      senderId:tokenID, 
      showComponent:true,
      recevierId:recepientId,
      receiverName:recepientName
    });
  }
  handleRefresh=()=>{
    console.log("refresh called");
    this.forceUpdate();
  };
  render() { 
    const users = this.state.persons.map((person) => {
     if ( this.state.user === person.name) {
     return  null;
     }else {
       return(<div>
        <li  key={person.id}>
        <img src={mainLogo} alt="Profile Pic" className="rounded-img header-img p-2" />
        <button value={person.id} onClick={(e)=>this.beginChat(person.id,person.name)} 
        className=" user-who-wrote-you btn btn-outline-secondary p2 user-btn-style" >{person.name}</button> </li>
        </div>)
     }
     
    
   });
    return ( <div className="container conversations">
    <div className="row">
      <section className="col-md-4 conversations-section">
      <p className="users-block"> User : {this.state.user} </p>
      <hr></hr>
        <ul className="user-list ">
         
        <p className="users-block">  <img className="users-image" src="https://image.flaticon.com/icons/png/512/32/32441.png" alt=""/> AVAILABLE USERS </p>
        <hr></hr>
         {/*<button className="btn btn-outline-secondary btn-block user-btn-style" onClick={this.handleRefresh}>Refresh</button> */}
         <hr></hr>
        { users}  
        </ul>
        <div className="search-user">
        </div>
       
      </section>
      {this.state.showComponent ?
           <Messages   
            sender={this.state.senderId} 
            receiver={this.state.recevierId}
            token={token}
            messageRecieverName={this.state.receiverName}
         
            /> :
           null
        }
    </div>
  </div> );
  }
}

