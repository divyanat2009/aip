import React from 'react';
import Context from '../Context';
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBookmark} from '@fortawesome/free-solid-svg-icons';

function addBookmarkRequest(postId, currentUserId, callback){
    
    let newBookmark = {
        user_id:currentUserId,
        post_id:postId
    }
    let url = `${config.API_DEV_ENDPOINT}/bookmarks`;
    console.log(url)
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
        console.log(bookmark)  ;
        callback(bookmark);
         //go to bookmark
         console.log(`post call worked`)
    })
    .catch(error => {
       callback(postId, error)
    })
  console.log(`button clicked`)
}

export default function AddBookmark(props){
  return(
    <Context.Consumer>
      {(context)=>(
      <button className="bookmark-button post-icon"
       onClick={()=>{
       addBookmarkRequest(props.postId,props.currentUserId,
       context.addBookmark);
      }}>
      <FontAwesomeIcon icon={faBookmark} />
    </button>
    )}
   </Context.Consumer>
    )
} 