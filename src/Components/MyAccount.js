import React, {Component} from 'react';
import Nav from './Nav';
import ButtonRow from './BottonRow';

class MyAccount extends Component{
    render(){
        return(
            <div>
                <Nav pageType={'interior'}/>
                <form className="update-account-form">
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
                    <button type="submit">Update</button>
                    <button type="reset">Cancel</button>
                   </form>
                   <ButtonRow
                     links ={[{'/dashboard':'Home'},{'/dashboard':'My Posts'},{'/new-post':'New Post'},{'/my-account':'My Account'}]}/>
            </div>
        )
    }
}
export default MyAccount;