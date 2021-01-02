export const FilterPosts = (posts, currentUserId, users, currentDisplay) =>{
 //this is just for dashboard not bookmark page yet
 //let currentUserInfo = users.find(user=>user.user_id===currentUserId);
let filteredPosts = [];
if(currentDisplay.dashboard.current_user==='user'){
  filteredPosts = posts.filter(post=>post.user_id===currentUserId); 
}
else if(currentDisplay.dashboard.current_user==='all'){
   console.log(`statement ran`);
   console.log(currentDisplay.dashboard.current_post_type);
   filteredPosts=posts;
}
else if(currentDisplay.dashboard.current_user==='byuser'){
    filteredPosts = posts.filter(post=>post.user_id===currentDisplay.dashboard.current_user); 
}
//using buttons for filtering  by type of post (book, recipe, etc)
  if(currentDisplay.dashboard.current_post_type!=='all'){
  filteredPosts = filteredPosts.filter(post=>post.type===currentDisplay.dashboard.current_post_type)
  }
//need to sort by date   
  return filteredPosts
}