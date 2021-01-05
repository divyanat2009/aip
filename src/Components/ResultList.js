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
      filteredResults = FilterPosts(posts, currentDisplay)
      //console.log(filteredResults);  
    return(
      <section className="results-list">
        <h2>{this.props.heading}</h2>
      <ul className="result-list">
        {filteredResults.map((post, i) => <SinglePost key={i}{...post}
        postsToDisplay={this.props.postsToDisplay}/>)}
      </ul>
      </section>
    )
  }
}

export default ResultList; 