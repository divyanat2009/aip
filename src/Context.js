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
    bookmarks:[{
      "bookmark_id":1,
      "user_id":1,
      "post_id":1,
      "content":'Awesome post.....'
    },
    {
      "bookmark_id":2,
      "user_id":1,
      "post_id":2,
      "content":'I really loved this post.....'
    },
    {
      "bookmark_id":3,
      "user_id":1,
      "post_id":10,
      "content":'Nice one.....'
    }],
      post:[ {
        "post_id":1,
        "user_id":1,
        "username": "divya",
        "title":"Chocolate Skillet Cookie",
        "content":"Impress your guests and your family with this beautiful Chocolate Skillet Cookie! Baked in a large cast iron skillet, this AIP chocolate cookie is so easy to make and feeds a crowd.",
        "type":"recipe",
        "link":"https://www.amymyersmd.com/recipe/chocolate-skillet-cookie/",
        "by":"Amy Myers",
        "event_dates":"",
        "date_created":"December 29th 2020"           
     },{
        "post_id":2,
        "user_id":2,
        "username":"divyanat",
        "title":"The Autoimmune Solution",
        "content":"Considered the definitive guide to reversing autoimmunity, The Autoimmune Solution lays out a revolutionary, step-by-step approach that restores the body to its natural healthy state in 30 days by eliminating toxic foods, introducing restorative ingredients, and identifying environmental toxins.",
        "by":"Amy Myers",
        "link":"https://www.amymyersmd.com/autoimmunesolution/",
        "type":"book",
        "event_dates":"",
        "date_created":"December 30th 2020"            
     },{
        "post_id":3,
        "user_id":3,
        "username":"natarajan",
        "title":"The Rheumatoid Solutions Podcast",
        "content":"The Rheumatoid Arthritis show that provides help and inspiration for inflammatory arthritis patients to reduce symptoms and leave healthier, happier lives. Hosted by Clint Paddison, creator of the Paddison Program for Rheumatoid Arthritis.",
        "by":"Clint Paddison",
        "type":"podcast",
        "link":"https://paddisonprogram.podbean.com/",
        "event_dates":"",
        "date_created":"December 29th 2020"            
     }
    ],
    currentDisplay:{
      dashboard:{current_user:'default', current_post_type:'all'},
      bookmark_display:{current_user:'default', current_post_type:'all'}
    },
    currentUserInfo:{
      "user_id":1,
      "username":"divya",   
      "bookmark_ids":[1,2,3],
      "date_created":"January 1st 2021",
  },
      addPost:()=>{},        
      addBookmark:()=>{},
      deletePost:()=>{},      
      deleteBookmark:()=>{},
      updateUserAccount:()=>{},
      addUserAccount:()=>{},
      deleteUserAccount:()=>{},
      updatePostType:()=>{},

})

export default Context;