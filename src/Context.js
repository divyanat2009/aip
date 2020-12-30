import React from 'react';

const Context = React.createContext({
      users:[{
        "user_id":"1",
        "username":"divya",   
        "bookmark_ids":[1,2,3],
        "date_created":"December 29th 2020",
    },{
      "user_id":"2",
      "username":"natarajan",  
      "bookmark_ids":[5,4,6],
      "date_created":"December 30th 2020",    
      }
    ],
      post:[ {
        "post_id":"1",
        "user_id":"1",
        "title":"Pork Cutlet with Cherry Sauce",
        "type":"recipe",
        "link":"https://www.amymyersmd.com/recipe/pork-cutlets-with-cherry-sauce/",
        "date_created":"December 29th 2020"           
     },{
        "post_id":"2",
        "user_id":"1",
        "title":"The Autoimmune Solution",
        "author":"Amy Myers",
        "type":"book",
        "date_created":"December 30th 2020"            
     },{
        "post_id":"3",
        "user_id":"3",
        "title":"The Rheumatoid Solutions Podcast",
        "description":"The Rheumatoid Arthritis show that provides help and inspiration for inflammatory arthritis patients to reduce symptoms and leave healthier, happier lives. Hosted by Clint Paddison, creator of the Paddison Program for Rheumatoid Arthritis.",
        "type":"podcast",
        "link":"https://paddisonprogram.podbean.com/",
        "date_created":"December 29th 2020"            
     }
    ],
      addPost:()=>{},        
      addBookmark:()=>{},
      deletePost:()=>{},      
      deleteBookmark:()=>{},
      updateUser:()=>{},
      addUser:()=>{},
      deleteUser:()=>{},
})

export default Context;