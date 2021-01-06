import React, {Component} from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class IconButton extends Component{
    static contextType = Context;
    render(){
    //change the icon depending if on the dashboard or bookmark page
    const {ariaLabel, iconType, displayChange, link, buttonColor} = this.props
    let button = (<button></button>)
    if(iconType==='text-all'){
        button = (<Link 
                 to={link}
                 aria-label={`button-access ${ariaLabel}`}
                 onClick={e=>{this.context.updatePostType(displayChange); this.context.updateUsernameToDisplay(displayChange);}}
                 className={`button-icon-link button-w-text ${buttonColor}`}>
                 All
                  </Link>)}
    else{
      button = (<Link 
                to={link}
                aria-label={`button-access ${ariaLabel}`}
                onClick={e=>{this.context.updatePostType(displayChange); this.context.updateUsernameToDisplay(displayChange);}}
                className={`button-icon-link ${buttonColor}`}>
                <FontAwesomeIcon className="filter-icon" icon={iconType} />
                </Link>)}
    return(
        <div className="icon-button-container">
           {button}
        </div>
    )
  }
}
export default IconButton; 