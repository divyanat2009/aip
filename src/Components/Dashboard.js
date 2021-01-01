import React, {Component} from 'react';
import Nav from './Nav';
import ButtonRow from './BottonRow';
import ResultList from './ResultList';
import FilterButtons from './FilterButtons';
import SearchRow from './SearchRow';
import Context from '../Context';

class Dashboard extends Component{
    static contextType = Context;
    render(){
      return(
        <div>
          <header>
            <Nav pageType={'interior'}/>
          </header>
          <main>
            <FilterButtons/>
            <SearchRow/>
            <ResultList/>
          </main>
          <footer>
            <ButtonRow links={[{'/dashboard':'Home'}, {'/dashboard':'My Posts'}, {'/new-post': 'New Post'}, {'/my-account':'My Account'}, {'/bookmarks':'My Bookmarks'}]}/>
          </footer>
        </div>
      )
    }
}
export default Dashboard;