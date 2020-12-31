import React, {Component} from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            
            <div className="start-page" > 
              <Nav pageType={'home'}/>
              
              <h1>The Autoimmune Protocol</h1> 
              <p><Link className="site-heading" to={'/dashboard'}>Explore</Link></p> 
            </div>
            
        )
    }
}
export default Home;