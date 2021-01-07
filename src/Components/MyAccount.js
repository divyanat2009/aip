import React, {Component} from 'react';
import Nav from './Nav';

class MyAccount extends Component{
    state = {
        isBoxVisible:false
    }
    BetaVersionPopUp=(e)=>{
        e.preventDefault();
        this.setState({ isBoxVisible: true });
    }
    closeWindow=()=>{
        this.setState({ isBoxVisible: false });
    }    
    render(){       
        return(
          <div className="account-page">
            <Nav pageType={'interior'}/>
              <div className={`box beta-version-box ${this.state.isBoxVisible ? "" : "hidden"}`}>
              <p>Since this is still the Beta version of the app, you cannot update account information. Please check back soon to be able to sign-up and update your account whenever!</p>
              <button className="button" onClick={this.closeWindow}>Close</button>
              </div>             
                <form className="update-account-form" onSubmit={e=>this.BetaVersionPopUp(e)}>
                    <h2>My Account</h2>
                    <p>The account information for Divya is below.</p>
                    <p>Please use the form to update your name, email address or password.</p>
                    <div className="form-field-group">
                        <label htmlFor="first-name">First Name</label><br/>
                        <input placeholder='Divya' type="text" name='first-name' id='first-name'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input placeholder="Natarajan" type='text' name='last-name' id='last-name'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="email">Email</label>
                        <input placeholder="user@gmail.com" type="email" name='email' id='email'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password'/>
                    </div>
                    <button type="submit" onClick={this.BetaVersionPopUp}>SignIn</button>                    
                   </form> 
                                                 
            </div>
        )
    }
}
export default MyAccount;