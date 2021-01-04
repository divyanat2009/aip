import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import LearnMore from './Components/LearnMore';
import UserSignUp from './Components/UserSignUp';
import NewPost from './Components/NewPost';
import BookmarkPage from './Components/BookmarkPage';
import MyAccount from './Components/MyAccount';
import Context from './Context';
import config from './config';
import './_styles/App.css';
import data from './data';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUserInfo:{ "user_id":1,
                        "username":"divyanat",  
                        "fullname":"Divya Natarajan"},
      posts:data.posts,
      bookmarks:data.bookmarks,
      users:data.users,            
      currentDisplay:{
        dashboard:{current_user:'default', current_post_type:'all'},
        bookmark_display:{current_user:'default', current_post_type:'all'}
      }
    }//end of state

  }
  //filter buttons function to update type of post displayed
  updatePostType=(displayChange)=>{
    const {currentDisplay,currentUserInfo} = this.state;
    let currentUserId = currentUserInfo.user_id;
    //change the posts displayed depending on type of user selected
    if(displayChange ==='allUsers' || displayChange ==='byUser' || displayChange ==='user'){
      currentDisplay.dashboard.current_user=displayChange;
      this.getPostsByUser(displayChange,currentUserId)
    }
    //changes the display for type of post
    if(displayChange ==='all' || displayChange ==='book' || displayChange === 'lifestyle' || displayChange ===
      'podcast' || displayChange === 'event' || displayChange === 'recipe'){
      currentDisplay.dashboard.current_post_type=displayChange;
  }  
      
  this.setState({
    currentDisplay:currentDisplay})
  }

  addPost=(newPost)=>{
    this.setState({
    posts:[...this.state.posts, newPost]
    })  
  }
  updatePostsDisplayed=(posts)=>{
    this.setState({
      posts:posts
    })
  }
  getPostsByUser=(userToDisplay,currentUserId)=>{
    console.log(`this is the userToDisplay from Getposts ${userToDisplay} ${currentUserId}`)
    let url = `${config.API_DEV_ENDPOINT}/posts`

    currentUserId = this.state.currentUserInfo.user_id

    if(userToDisplay==='all'){
      url = `${config.API_DEV_ENDPOINT}/posts`
      console.log(url)
    }
    else if(userToDisplay==='user'){
        url = `${config.API_DEV_ENDPOINT}/posts?userid=${currentUserId}`
        console.log(url)
      }
    else {
      url = `${config.API_DEV_ENDPOINT}/posts?userid=${userToDisplay}`
      console.log(url)
    }

    fetch(url,{
        method:'GET',
        header:{
        'content-type':'application/json',
        // 'Authorization':`Bearer ${config.API_KEY}`
        },
    })
    .then(res=>{
        if(!res.ok){
        throw new Error('Something went wrong, please try again')
        }
        return res.json()
    })
    .then(postdata=>{
      console.log(postdata);
      this.updatePostType('all');
      this.updatePostsDisplayed(postdata)
    })
    .catch(err=>{
      this.setState({
        error:err.message
      });
    })
}

getUsers=()=>{
  fetch(`${config.API_DEV_ENDPOINT}/users`,{
    method:'GET',
    header:{
      'content-type':'application/json',
     // 'Authorization':`Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again')
    }
    return res.json()
  })
  .then(userdata=>{
   console.log(userdata)
    this.setState({
      users:userdata
    })
  })
  .catch(err=>{
    this.setState({
      error:err.message
    })
  })
}
componentDidMount(){
  this.setState({error:null})
  //getting users
  this.getUsers();
}


  render () {
    const contextValue={
      currentUserInfo:this.state.currentUserInfo,
      posts:this.state.posts,
      bookmarks:this.state.bookmarks,
      users:this.state.users,
      currentDisplay:this.state.currentDisplay,
      updatePostType:this.updatePostType,
      updatePostsDisplayed:this.updatePostsDisplayed,
      addPost:this.addPost,
      getPostsByUser:this.getPostsByUser
    }
    return (
      <div className="App">
        <Context.Provider value={contextValue}>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/bookmarks" component={BookmarkPage}/>
          <Route exact path="/user-signup" component={UserSignUp}/>
          <Route exact path="/new-post" component={NewPost}/>
          <Route exact path="/my-account" component={MyAccount}/>
          <Route exact path="/learn-more" component={LearnMore}/>
        </Context.Provider>
      </div>
    );
  }
}      
export default App;
