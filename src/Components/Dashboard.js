import React, {Component} from 'react';
import Nav from './Nav';
import ResultList from './ResultList';
import FilterButtons from './FilterButtons';
import SearchRow from './SearchRow';
import Context from '../Context';
import { faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';


class Dashboard extends Component{
    static contextType = Context;
    render(){
      return(
        <div>
          <header>
            <Nav pageType={'interior'}/>
          </header>
          <main>
            <FilterButtons
              buttonInfo={[
              {ariaLabel:'all types of posts',icon_type:'faHome', display_change:'all', link:'/dashboard'},
              {aria_label:'lifestyle posts',icon_type:'faHeartBeat', display_change:'lifestyle', link:'/dashboard'},
              {aria_label:'book posts',icon_type:'faBookOpen', display_change:'book', link:'/dashboard'},
              {aria_label:'podcast posts',icon_type:'faPodcast', display_change:'podcast', link:'/dashboard'},
              {aria_label:'recipe posts',icon_type:'faSeedling', display_change:'recipe', link:'/dashboard'},
              {aria_label:'event posts',icon_type:'faCalendarAlt', display_change:'event', link:'/dashboard'}
            ]}
            />
            <SearchRow/>
            <ResultList/>
          </main>
          <footer>
            <FilterButtons
              buttonInfo={[
                 {ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers'},
                 {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                 {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                 {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'}
              ]}

                    />
          </footer>
        </div>
      )
    }
}
export default Dashboard;