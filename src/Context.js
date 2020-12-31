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
        "title":"Chocolate Skillet Cookie",
        "content":"Impress your guests and your family with this beautiful Chocolate Skillet Cookie! Baked in a large cast iron skillet, this AIP chocolate cookie is so easy to make and feeds a crowd.",
        "type":"recipe",
        "link":"https://www.amymyersmd.com/recipe/chocolate-skillet-cookie/",
        "by":"Amy Myers",
        "date_created":"December 29th 2020"           
     },{
        "post_id":"2",
        "user_id":"1",
        "title":"The Autoimmune Solution",
        "content":"Considered the definitive guide to reversing autoimmunity, The Autoimmune Solution lays out a revolutionary, step-by-step approach that restores the body to its natural healthy state in 30 days by eliminating toxic foods, introducing restorative ingredients, and identifying environmental toxins.",
        "by":"Amy Myers",
        "link":"https://www.amymyersmd.com/autoimmunesolution/",
        "type":"book",
        "date_created":"December 30th 2020"            
     },{
        "post_id":"3",
        "user_id":"3",
        "title":"The Rheumatoid Solutions Podcast",
        "content":"The Rheumatoid Arthritis show that provides help and inspiration for inflammatory arthritis patients to reduce symptoms and leave healthier, happier lives. Hosted by Clint Paddison, creator of the Paddison Program for Rheumatoid Arthritis.",
        "by":"Clint Paddison",
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