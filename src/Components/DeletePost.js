import React from 'react';
import Context from '../Context.js';
import config from '../config';

function deletePostRequest(postId, callback){
    
    let url = `${config.API_DEV_ENDPOINT}/posts/${postId}`;
    console.log(url)
    fetch(url,{
        method: 'DELETE',
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
    .then(() => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state   
       callback(postId)
       console.log(`call worked`)
    })
    .catch(error => {
       callback(postId, error)
    })
  console.log(`button clicked`)
}

export default function DeletePost(props){
    return(
        <Context.Consumer>
            {(context)=>(
                <button className="delete-button"
                    onClick={()=>{
                        deletePostRequest(props.postId,
                            context.deletePost);
                    }}>
                    Delete Post

                </button>
            )}


        </Context.Consumer>
    )
} 