import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UserSignUp extends Component{
  state = {
    isBoxVisible:false,
    scrollPosition:0,
    statsRef:React.createRef(),
  };

startExploring = () => {
  this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  this.props.history.push('/dashboard');
  };
    render(){
        return(
            <div>
              <main>
                <Link to={'/my-account'}>Sign In</Link>
                <form className="signup-form">
                <h2>Sign-up to begin your AIP journey!</h2>
                <label htmlFor="first-name">Full Name</label>
                <input placeholder='Full Name' type="text" name='full-name' id='full-name'/>                
                <label htmlFor="last-name">UserName</label>
                <input placeholder="UserName" type='text' name='username' id='username'/>                
                <label htmlFor="password">Password</label>
                <input placeholder="*******" type="password" name='password' id='password'/>
                <button type="submit">Sign Up</button>
                <button type="learn-more" onClick={this.startExploring}>Learn More</button>
                </form>
              <p>Thank you for your interest in our app. This is the beta version so you cannot create an account yet.</p>
              </main>
            </div>

        )
    }
}
export default UserSignUp;