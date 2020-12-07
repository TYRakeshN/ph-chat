import React from 'react';
import Search from './Search';
import '../assets/css/style.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            token:this.props.location.state.data
         }
    }
   
    render() { 
        
        return (  <Search token={this.state.token} /> );
    }
}
 
export default Dashboard;

