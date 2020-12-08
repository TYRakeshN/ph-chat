import React from 'react';
import Search from './Search';
import '../assets/css/style.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            token: ''
         }
    }

    componentDidMount() {
       this.setState({
           token: localStorage.getItem('token')
        }, () => {
            console.log('token is', this.state.token);
        });        
    }
   
    render() { 
        

        return (  
        <Search token={this.state.token} />
         );
    }
}
 
export default Dashboard;

