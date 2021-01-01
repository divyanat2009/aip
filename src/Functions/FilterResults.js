export const FilterPosts = (posts, currentUserId, users, displayType, currentDisplay) =>{
    //this is just for dashboard not bookmark page yet
     
    let filteredPosts = [];
    if(displayType==='user'){
        filteredPosts = posts.filter(post=>post.user_id===currentUserId); 
      }
      else if(displayType==='all'){
        filteredPosts=posts;
      }
    //using buttons for filtering  by type of post (book, recipe, etc)
    if(currentDisplay.dashboard.current_post_type!=='all'){
      filteredPosts = filteredPosts.filter(post=>post.type===currentDisplay.dashboard.current_post_type)
    }
    //need to sort by date   
    return filteredPosts
    }