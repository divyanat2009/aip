import React, { Component } from 'react';
import Nav from './Nav.js';
import ResultList from './ResultList.js';
import Context from '../Context';



class Dashboard extends Component{
    static contextType = Context;


    render(){
        return(
            <div className="dashboard">
                <header>
                <Nav pageType={'interior'}/>
                 
                </header>
                <main>
                    <ResultList
                      heading = {'Posts'}
                       postsToDisplay = {'posts'}
                       posts = {this.context.posts}
                    />
                </main>
                    
                
            </div>
        )
    }
}

export default Dashboard;