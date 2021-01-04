import React, { Component } from 'react';
import Context from '../Context';
import { FindUserId } from '../Functions/FilterResults';
//import config from '../config';

class SearchRow extends Component{
    static contextType = Context;
    constructor(props){
        super(props);
        this.state={
            error:null,
            username:{value:"current", touched:false},
            usernameToDisplay:"aip users",
        }
    }//end of constructor

    updateChange=(inputUserName, fieldtouched)=>{
      this.setState({username:{value:inputUserName, touched:fieldtouched}})
    }

    updateUsernameToDisplay=(name)=>{
      this.setState({usernameToDisplay:name})
    }

    handleReset=(e)=>{
      e.preventDefault();
      this.context.getPostsByUser('all');
      this.updateUsernameToDisplay('aip users'); 
      this.setState({error:null})
    }

    handleSearchSubmit=(e)=>{
      e.preventDefault();
      console.log(`hSubmit is firing`)
      const username = this.state.username.value;
      let {search_username} = e.target;
      let userid = FindUserId(username, this.context.users);

    if(userid){
      // this.getPosts(userid)
      this.context.getPostsByUser(userid)
      this.updateUsernameToDisplay(username);
      search_username.value="";
    }
    else if(!userid){
      this.setState({error:"No user with that name exist - please check your spelling"})
    }

    }//end of handleSubmit    
    render(){
        return(
          <section className="search-row">
            <p>You are currently viewing posts of {this.state.usernameToDisplay} </p>
          <form className="fsearch-form" onSubmit={e=>this.handleSearchSubmit(e)}>  
          <div>
            <label htmlFor="search_username">Search by username</label>
            <input id="search_username" name="search_username" type="text" onChange={e => this.updateChange(e.target.value, true)}/>
          </div>
            <button className="button" type="submit">Search</button>           
          </form>
          <button className="button" type="reset" onClick={e=>this.handleReset(e)}>Reset</button>
          <div className="error-message">{this.state.error}</div>
          </section>
        )

    }
}

export default SearchRow; 