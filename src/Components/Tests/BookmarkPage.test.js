import React from 'react';
import ReactDOM from 'react-dom'
import BookmarkPage from '../BookmarkPage'
import { BrowserRouter as Router } from 'react-router-dom';



describe(`BookmarkPage component`, () => {
    
    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<Router><BookmarkPage /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})