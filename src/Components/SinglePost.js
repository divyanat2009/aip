import React, { Component } from 'react';
import '../libraries/fontawesome.js';
import '../_styles/posts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faPodcast, faBookOpen, faSeedling } from '@fortawesome/free-solid-svg-icons';

class SinglePost extends Component{
    render(){
        const{ post_type, title, by, link, content, start_date} = this.props;
        let listItem ='';
        if(post_type==='recipe'){
            listItem = (<li className="single-post-recipe-post" key={this.props.post_id}>
               <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faSeedling} /></span>
                    {/*<span className="post-span post-username">{username}</span>*/}
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-artist">{by}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-link"><a href={link}>Read More</a></span>
                </div>
                <div className="post-icons-buttons">
                  <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        
        else if(post_type==='podcast'){
            listItem = (<li className="single-post-podcast-post" key={this.props.post_id}>
                <div className="post-info">
                 <span className="post-span post-icon"><FontAwesomeIcon icon={faPodcast} /></span>
                    {/*<span className="post-span post-username">{username}</span>*/}
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-artist">{by}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-link"><a href={link}>Listen Here</a></span>
                </div>
                <div className="post-icons-buttons">
                    
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        else if(post_type==='event'){
            listItem = (<li className="single-post-event-post" key={this.props.post_id}>
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                    {/*<span className="post-span post-username">{username}</span>*/}
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-artist">{by}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-start-date">{start_date}</span>
                    <span className="post-span post-link"><a href={link}>Learn More</a></span>
                </div>
                <div className="post-icons-buttons">
                    
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        else if(post_type==='book'){
            listItem = (<li className="single-post-book-post" key={this.props.post_id}>
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    {/*<span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>*/}
                    <span className="post-span post-author">{by}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-link"><a href={link}>Read More</a></span>
                </div>
                <div className="post-icons-buttons">
                    
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }

        return(
            listItem
        )
    }
}

export default SinglePost;