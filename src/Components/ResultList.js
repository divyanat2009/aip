import React, { Component } from 'react';
import SinglePost from './SinglePost.js';
import {FilterPosts} from '../Functions/FilterResults';
import Context from '../Context';


class ResultList extends Component{
  static contextType= Context;
    render(){
      let posts=this.props.posts;
      //console.log(posts);
      let filteredResults = posts;
      
      let currentDisplay= this.context.currentDisplay;
      //let typeOfPost = '';

        if(this.props.postsToDisplay==='posts'){
        //    typeOfPost = this.context.currentDisplay.dashboard.current_post_type
        }
        else if(this.props.postsToDisplay==='bookmarks'){
          //  typeOfPost = this.context.currentDisplay.bookmark_display.current_post_type;
        }
         console.log(this.context.currentDisplay.user_posts_displayed)
      filteredResults = FilterPosts(posts, currentDisplay)
      //console.log(currentDisplay);  
    return(
      <section className="results-list">        
        <ul className="result-list">
          {filteredResults.map((post, i) => 
          <SinglePost 
          key={i}{...post}
          postInfo = {post}
          postsToDisplay={this.props.postsToDisplay}/>)}
        </ul>
      </section>
    )
  }
}

export default ResultList; 