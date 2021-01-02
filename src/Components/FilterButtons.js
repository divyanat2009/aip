import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
//import { faPodcast, faSeedling, faBookOpen, faHome, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import '../_styles/filter.css';
import Context from '../Context';
import { Link } from 'react-router-dom';


class FilterButtons extends Component{
    static defaultProps ={
        buttonInfo:[],
        ariaLabel:'',
        icon_type:'',
        post_type:'',
       };
    static contextType= Context;   
    render(){
      let buttons=this.props.buttonInfo;
      const Buttons = buttons.map((buttonInfoObject,i)=>{
        const ariaLabel= buttonInfoObject.aria_label;
        const iconType = buttonInfoObject.icon_type;
        const link = buttonInfoObject.link;
        const displayChange = buttonInfoObject.display_change;
        let button = (<button></button>)
        button = (<Link 
                 key={i} 
                 to={link}
                 aria-label={`button-access ${ariaLabel}`}
                 onClick={e=>this.context.updatePostType(displayChange)}
                 className="button-icon-link">
        <FontAwesomeIcon className="filter-icon" icon={iconType} />
        </Link>);
        return(button);      
    })  
    return(
       <section className="filter-button-row">
         {Buttons}
        </section>
        )
    }
}
export default FilterButtons;