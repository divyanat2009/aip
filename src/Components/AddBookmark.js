import React from 'react';
import Context from '../Context';
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBookmark} from '@fortawesome/free-solid-svg-icons';

function addBookmarkRequest(allPostInfo, currentUserId, callback){
    
    let newBookmark = {
        user_id:currentUserId,
        post_id:allPostInfo.post_id
    }
    let newBookmarkPost = allPostInfo   
    let url = `${config.API_ENDPOINT}/bookmarks`;    

    fetch(url,{
        method: 'POST',
        body:JSON.stringify(newBookmark),
        headers: {
        'content-type': 'application/json',
        // 'Authorization': `Bearer ${config.API_KEY}`
        },
    })
   .then(res=>{
        if(!res.ok){
        throw new Error('Something went wrong, please try again')
        }
        return res.json()
    })
    .then((bookmark) => {
        newBookmarkPost = {...newBookmarkPost, bookmark_id:bookmark.id}        
        callback(newBookmarkPost);          
    })
    .catch(error => {
       callback(error)
    })
}

export default function AddBookmark(props){
  return(
    <Context.Consumer>
      {(context)=>(
      <button className="bookmark-button post-icon"
       onClick={()=>{
       addBookmarkRequest(props.allPostInfo,props.currentUserId,
       context.addBookmark);
      }}>
      <FontAwesomeIcon icon={faBookmark} />
    </button>
    )}
   </Context.Consumer>
    )
} 