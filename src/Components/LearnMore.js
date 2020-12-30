import React, {Component} from 'react';
import Nav from './Nav';

class LearnMore extends Component{
    render(){
      return(
          <div>
              <Nav pageType={'interior'}/>
              <p>Learn More</p>
          </div>
      )

    }
}
export default LearnMore;