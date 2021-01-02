import React, { Component } from 'react';
import SinglePost from './SinglePost.js';
import {FilterPosts} from '../Functions/FilterResults';
import Context from '../Context';


class ResultList extends Component{
  static contextType= Context;
    render(){
      let posts=this.context.posts;
      console.log(posts);
      let users=this.context.users;
      let currentDisplay= this.context.currentDisplay;
      let currentUserId = this.context.currentUserInfo.user_id;
      
      let filteredResults = FilterPosts(posts, currentUserId, users, currentDisplay);
      console.log(filteredResults);
        
    return(
      <section className="results-list">
      <ul className="result-list">
        {filteredResults.map((post, i) => <SinglePost key={i}{...post}/>)}
      </ul>
      </section>
    )
  }
}

export default ResultList; 