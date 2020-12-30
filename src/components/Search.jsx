import React from "react";
import "../assets/css/style.css";
//import logo from "../assets/avatars/profile-default.png";
import Axios from "axios";
import {  decodeToken } from "react-jwt";
import Messages from "./Messages";
import mainLogo from'../assets/avatars/profile-default.png';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      person:'',
      persons:[],
      token:localStorage.getItem('token'),
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
    let token = localStorage.getItem('token');
    Axios.get('https://ty-chat-app.herokuapp.com/users',
    {headers: { 'Authorization': `Bearer ${token}` }})
    .then((response)=>{
      console.log(response)
      const data=response.data.users;
      const myDecodedToken = decodeToken(this.state.token);
      const userName=myDecodedToken.name;
     // console.log("decodedtoken"+decodeToken);
      this.setState({user:userName});
      this.setState({persons:data}, () => {
        console.log(this.state.persons);
      });
    }).catch(console.log);
  }
  
  beginChat=(rId,rName,e)=>{
    console.log(rName);
    const myDecodedToken = decodeToken(this.state.token);
   // console.log("decodedtoken"+decodeToken);
    const tokenID=myDecodedToken.id;
    console.log("before"+this.state.receiverName);
    this.setState({
      senderId:tokenID, 
      showComponent:true,
      recevierId:rId,
      receiverName:rName
    });
    console.log("After"+this.state.receiverName);
  }

  render() { 
    const users = this.state.persons.map((p) => {
     if ( this.state.user === p.name) {
     return  null;
     }else {
       return(<div>
        <li  key={p.id}>
        <img src={mainLogo} alt="Profile Pic" class="rounded-img header-img p-2" />
        <button value={p.id} onClick={(e)=>this.beginChat(p.id,p.name)} 
        className=" user-who-wrote-you btn btn-outline-secondary p2">{p.name}</button> </li>
        </div>)
     }
     
    
   });
    return ( <div className="container conversations">
    <div className="row">
      <section className="col-md-4 conversations-section">
      <hr></hr>
        <ul className="user-list ">
         
        <p className="users-block">  <img className="users-image" src="https://image.flaticon.com/icons/png/512/32/32441.png" alt=""/> AVAILABLE USERS | {this.state.user} </p>
        <hr></hr>
         <button className="btn btn-outline-secondary btn-block" onClick={() => window.location.reload(false)}>Refresh</button>
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
            token={this.state.token}
            messageRecieverName={this.state.receiverName}
            onNameChange={this.onChange}
            /> :
           null
        }
    </div>
  </div> );
  }
}

