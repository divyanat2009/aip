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
import './_styles/App.css';
import data from './data';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUserInfo:data.users[0],
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
    console.log(`usertype being sent`)
    console.log(`this update from app ran`)
    const {currentDisplay} = this.state;
   //change the display for type of user to display
   if(displayChange ==='allUsers' || displayChange ==='byUser' || displayChange ==='user'){
    currentDisplay.dashboard.current_user=displayChange;}
   //changes the display for type of post
   if(displayChange ==='all' || displayChange ==='book' || displayChange === 'recipe' || displayChange ===
    'podcast' || displayChange === 'event' || displayChange === 'lifestyle'){
    currentDisplay.dashboard.current_post_type=displayChange;}
      
  this.setState({
    currentDisplay:currentDisplay})
  }

  addPost=(newPost)=>{
    console.log(`new post from addPost`);
    console.log(newPost)
    console.log(this.state.posts)
    this.setState({
      posts:[...this.state.posts, newPost]
    })  
  }
  render () {
    const contextValue={
      currentUserInfo:this.state.currentUserInfo,
      posts:this.state.posts,
      bookmarks:this.state.bookmarks,
      users:this.state.users,
      currentDisplay:this.state.currentDisplay,
      updatePostType:this.updatePostType,
      addPost: this.addPost
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
