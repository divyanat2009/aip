import React, {Component} from 'react';
import Nav from './Nav';
import ButtonRow from './BottonRow';
import ResultList from './ResultList';
import FilterButtons from './FilterButtons';
import SearchRow from './SearchRow';

class Dashboard extends Component{
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
                    <ButtonRow links={[{'/dashboard':'Home'}, {'/dashboard':'My Post'}, {'/new-post': 'New Post'}, {'/my-account':'My Account'}]}/>
                </footer>
            </div>
        )
    }
}
export default Dashboard;