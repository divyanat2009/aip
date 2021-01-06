import React, {Component} from 'react';
import Nav from './Nav';
import FilterButtons from './FilterButtons';
import { faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

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
                    <button type="submit">SignIn</button>                    
                   </form>
                   <FilterButtons
                        buttonInfo={[
                        {ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'}
                        ]}/>
            </div>
        )
    }
}
export default MyAccount;