import React, {Component} from 'react';
import Nav from './Nav';

class Home extends Component{
    render(){
        return(
            <div>
              <Nav pageType={'home'}/>
              <p>Home</p>  
            </div>
        )
    }
}
export default Home;