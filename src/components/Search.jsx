import React from 'react';
import Conversation from './Conversation';
import '../assets/css/style.css';
function Search() {
    return (
  <div className="container conversations" >
	<div className="row">
		<section className="col-md-4 conversations-section">
      
			<ul className="user-list">	
            
			</ul>
			<div className="search-user" >
                <input className="form-control mr-sm-2 ph-searchbar" id="js-searchUser" 
                type="search" placeholder="Search" aria-label="Search"/>
				<div className="list-group list-results"></div>
		    </div>
		</section>
        <Conversation/>
    </div>
</div>


    );
  }
  export default Search;