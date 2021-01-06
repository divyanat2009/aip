export const FilterPosts = (posts,currentDisplay) =>{

// let currentUserInfo = users.find(user=>user.user_id===currentUserId);
      
  let filteredPosts = posts;
  //using buttons for filtering  by type of post (book, recipe, etc)
  if(currentDisplay.dashboard.current_post_type!=='all'){
    filteredPosts = filteredPosts.filter(post=>post.post_type===currentDisplay.dashboard.current_post_type)
  }
  //need to sort by date/time  
  return filteredPosts
  }
  //if(currentDisplay.dashboard.current_user==='user'){
  //  filteredPosts = posts.filter(post=>post.user_id===currentUserId);}
 // else if(currentDisplay.dashboard.current_user==='allUsers'){
  //  filteredPosts=posts;}
//else if(currentDisplay.dashboard.current_user==='byuser'){
  //  filteredPosts = posts.filter(post=>post.user_id===currentDisplay.dashboard.current_user);}
  
  export const FindUserId = (usernameInput, users)=>{    
    let user = users.find(user=>user.username===usernameInput)
    if(user){
      return user.id}
      else{return}
  }
  //function to determine of current post is bookmarked by current user
export const isCurrentlyBookmarked=(post_id, bookmarks)=>{
  let bookmarkedPostIds = bookmarks.map(bookmark=>bookmark.post_id);
  let bookmarked = bookmarkedPostIds.findIndex(id => post_id===id);
  if(bookmarked!==-1){
      let bookmarkId = findBookmarkId(post_id, bookmarks)
      return bookmarkId
  }
  else {return false}
}

const findBookmarkId=(post_id,bookmarks)=>{
  let bookmarkId = bookmarks.find(bookmark=>bookmark.post_id===post_id).bookmark_id;
  return bookmarkId
}