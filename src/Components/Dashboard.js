import React, {Component} from 'react';
import Nav from './Nav';
import ResultList from './ResultList';
import FilterButtons from './FilterButtons';
import Context from '../Context';
import { faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import {faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends Component{
    static contextType = Context;
    render(){
      return(
        <div>
          <header>
            <Nav pageType={'interior'}/>           
          
          </header>
          <main>          
            <ResultList
            heading = {'Posts'}
            postsToDisplay = {'posts'}
            posts = {this.context.posts}/>
          </main>
          <footer>
            {/*<FilterButtons
              buttonInfo={[                 
                 {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                 {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                 {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'},
                 {aria_label:'view bookmarks',icon_type:faBookmark, link:'/bookmarks', display_change:'all'}
              ]}
            />*/}
          </footer>
        </div>
      )
    }
}
export default Dashboard;