import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import LearnMore from './Components/LearnMore';
import UserSignUp from './Components/UserSignUp';
import NewPost from './Components/NewPost';
import MyAccount from './Components/MyAccount';
import './_styles/App.css';

class App extends Component{
  
  render(){
    return(
      <div className="App">
        <Route exact path='/' component= {Home}/>
        <Route exact path='/' component= {Dashboard}/>
        <Route exact path='/' component= {UserSignUp}/>
        <Route exact path='/' component= {NewPost}/>
        <Route exact path='/' component= {MyAccount}/>
        <Route exact path='/' component= {LearnMore}/> 
      </div>
    );
  }
}
export default App;
