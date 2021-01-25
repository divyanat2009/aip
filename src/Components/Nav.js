import React, { Component } from 'react';
import IconButton from './IconButton.js';
import { faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import { faHome, faInfo } from '@fortawesome/free-solid-svg-icons';


class Nav extends Component{
   
    render(){
        let List="";
        if (this.props.pageType === 'interior'){
         List = ( 
            <nav className="main-nav nav">
                <IconButton
                    link={'/new-post'}
                    ariaLabel={`add new post`}
                    displayChange={'all'}
                    iconType={faPlusSquare}
                    buttonColor={'orange-background'}
                    tooltipMessage = {'create a new post'}
                    tooltipClass={'bottom-farright'}
                />
                <h1>The Autoimmune Solution</h1>
                <IconButton
                    link={'/'}
                    ariaLabel={`learn more page`}
                    displayChange={'all'}
                    iconType={faInfo}
                    buttonColor={'orange-background'}
                    tooltipMessage = {'learn more about the AIP app'}
                    tooltipClass={'bottom-farleft'}
                />
            </nav>)}
            if (this.props.pageType === 'newPost'){
                List = ( 
                   <nav className="main-nav nav">
                       <IconButton
                           link={'/dashboard'}
                           ariaLabel={`add new post`}
                           displayChange={'all'}
                           iconType={faHome}
                           buttonColor={'orange-background'}
                           tooltipMessage = {'goto your dashboard'}
                           tooltipClass={'bottom-farright'}
                       />
                       <h1>The Autoimmune Solution</h1>
                       <IconButton
                           link={'/'}
                           ariaLabel={`learn more page`}
                           displayChange={'all'}
                           iconType={faInfo}
                           buttonColor={'orange-background'}
                           tooltipMessage = {'learn more about the AIP app'}
                           tooltipClass={'bottom-farleft'}
                       />
                   </nav>)}

        if(this.props.pageType === 'home'){
         List = (
            <div className="home-nav-links">
                <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-in</button>
                <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-up</button>
        </div>)
            }

        return(
            <div>
                {List}
            </div>
        )
    }
}   
export default Nav;