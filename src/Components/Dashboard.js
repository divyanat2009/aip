import React, { Component } from 'react';
import Nav from './Nav.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';

import SearchRow from './SearchRow';
import OpenUpContext from '../OpenUpContext.js';
import { faCalendarAlt, faLightbulb, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faBookmark,faPodcast, faMusic, faBookOpen, faUser, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';


class Dashboard extends Component{
    static contextType = OpenUpContext;


    render(){
        return(
            <div className="dashboard">
                <header>
                <Nav 
                   pageType={'interior'}
                />
                 <FilterButtons
                        buttonInfo={[{ariaLabel:'all types of posts',icon_type:'text-all', display_change:'all', link:'/dashboard',tooltipMessage:'view posts of all types ',tooltipClass:'bottom-farright'},
                        {ariaLabel:'recipe posts',icon_type:faLightbulb, link:'/dashboard',
                        display_change:'recipe', tooltipMessage:'view only recipe posts', tooltipClass:'bottom-right'},
                        {ariaLabel:'book posts',icon_type:faBookOpen, link:'/dashboard',
                        display_change:'book', tooltipMessage:'view only book posts',tooltipClass:'bottom-center'},
                        {ariaLabel:'podcast posts',icon_type:faPodcast, link:'/dashboard',
                        display_change:'podcast',tooltipMessage:'view only podcast posts',tooltipClass:'bottom-center'},
                        {ariaLabel:'music posts',icon_type:faMusic, link:'/dashboard',
                        display_change:'music',tooltipMessage:'view only music posts',tooltipClass:'bottom-left'},
                        {ariaLabel:'event posts',icon_type:faCalendarAlt, link:'/dashboard',
                        display_change:'event',tooltipMessage:'view only event posts',tooltipClass:'bottom-farleft'}]}
                        heading={'Filter Posts By Type'}
                        rowPosition={'row-top'}
                        pageType={'dashboard'}
                    />
                </header>
                <main>
                    <ResultList
                      heading = {'Posts'}
                       postsToDisplay = {'posts'}
                       posts = {this.context.posts}
                    />
                </main>
                    <FilterButtons
                            buttonInfo={[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view all posts of all users', tooltipClass:'top-farright'},
                            {ariaLabel:'all users you follow',icon_type:faUserFriends, link:'/dashboard',display_change:'followees',tooltipMessage:'view all posts of your connections',tooltipClass:'top-right'},
                            {ariaLabel:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view all your posts',tooltipClass:'top-center'},
                            {ariaLabel:'view bookmarks',icon_type:faBookmark, link:'/bookmarks', display_change:'all', tooltipMessage:'view all your bookmarked posts',tooltipClass:'top-left'},
                            {ariaLabel:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all',tooltipMessage:'update your account info',tooltipClass:'top-farleft'}
                            ]}
                            rowPosition={'row-bottom'}
                            pageType={'dashboard'}
                        
                        />

                    <section className="search-row-section">
                        <SearchRow/>
                    </section>
                
            </div>
        )
    }
}

export default Dashboard;