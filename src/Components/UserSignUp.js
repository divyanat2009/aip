import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UserSignUp extends Component{  
  state = {
    isBoxVisible:false,        
  }
  startExploring = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    this.props.history.push('/dashboard');
    };
  BetaVersionPopUp=(e)=>{
    e.preventDefault();
    this.setState({ isBoxVisible: true });
  } 
  closeWindow=()=>{
    this.setState({ isBoxVisible: false });
  } 
    render(){
        return(
            <div>
              <main>
                <Link to={'/my-account'}>Sign In</Link>
                <div className={`box beta-version-box ${this.state.isBoxVisible ? "" : "hidden"}`}>
                <p>Since this is still the Beta version of the app, you cannot update account information.</p>
                <button className="button" onClick={this.closeWindow}>Close</button>
              </div>             
                <form method="post" className="signup-form">
                <h2>Sign-up to begin your AIP journey!</h2>
                <label htmlFor="first-name">Full Name</label>
                <input placeholder='Full Name' type="text" name='fullname' id='fullname'/>               
                <label htmlFor="last-name">UserName</label>
                <input placeholder="UserName" type='text' name='username' id='username' autoComplete='my-user'/>                
                <label htmlFor="password">Password</label>
                <input placeholder="*******" type="password" name='password' id='password' autoComplete='current-password'/>
                <button type="submit" onClick={this.BetaVersionPopUp}>Sign Up</button>
                <button type="learn-more" onClick={this.startExploring}>Learn More</button>
                </form>
                <p>Thank you for your interest in our app. This is the beta version so you cannot create an account yet.</p>
              </main>
            </div>

        )
    }
}
export default UserSignUp;