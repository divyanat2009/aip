import React, {Component} from 'react';
import Nav from './Nav';
import FilterButtons from './FilterButtons';
import '../_styles/Form.css'

class NewPost extends Component{
    render(){
        return(
            <div className="new-post">
                <header>
                    <Nav pageType={'interior'}/>
                </header>
                <main>
                  <form className="new-post-form" >
                    <FilterButtons/>
                      <div className="form-fields field-title">
                        <div class="form-field-group">
                          <label htmlFor="title">Title or Name</label>
                          <input type="text" name="title" id="title" placeholder="The Autoimmune Protocol"/>
                        </div>
                        <div class="form-field-group field-author">
                          <label htmlFor="author">Author</label>
                          <input type="text" name="author" id="author" placeholder="Amy Myers"/>
                        </div>
                        <div class="form-field-group field-recipe">
                          <label htmlFor="recipe"></label>
                          <input type="text" name="recipe" id="recipe" placeholder="Perfect Pie Crust (AIP)"/>
                        </div>
                        <div class="form-field-group field-description">
                          <label htmlFor="descrip">Short Description</label>
                          <textarea type="textarea" name="descrip" id="descrip"/>
                        </div>
                        <div class="form-field-group field-link">
                           <label htmlFor="link">Link</label>
                           <input type="url" name="link" id="link" placeholder="https://www.amymyersmd.com/"/>
                        </div>
                        <div class="form-field-group field-content">
                           <label htmlFor="content">Content</label>
                           <textarea type="textarea" name="content" id="content"/>
                        </div>
                        <div class="form-field-group field-date">
                           <label htmlFor="event-date">Event Date</label>
                           <input type="date" name="event-date" id="event-date"/>
                        </div>
                        </div>

                        <div className="form-buttons button-row">    
                            <button type="submit">Post</button>
                            <button type="reset">Cancel</button>
                        </div>
                    </form>
                </main>  
            </div>
            )            
    }
}
export default NewPost;