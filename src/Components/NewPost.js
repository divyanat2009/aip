import React, { Component } from 'react';
import Nav from './Nav';
import FilterButtons from './FilterButtons';
import FilterButtonsForm from './FilterButtonsForm';
import Context from '../Context'
import '../_styles/Form.css';
import config from '../config'
import ValidationError from './ValidationError'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faPlusSquare, faIdCard, faSmile  } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faSeedling, faBookOpen,faUser, faHome, faHeartbeat} from '@fortawesome/free-solid-svg-icons';


class NewPost extends Component{
  static contextType = Context;
  constructor(props){
    super(props);
    this.state={
      error:null,
      submitDisabled:true,
      fieldType:'recipe',
      areTypeSpecificFieldsVisible:{'title':false, 'author':false, 'by':false,'link':false,'content':true,'dates':false},
      inputs:{
      title:{value:"",touched:false},
      author:{value:"",touched:false},
      by:{value:"",touched:false},
      link:{value:"",touched:false},
      content:{value:"",touched:false},
      event_dates:{value:"",touched:false},
      post_image:{value:"",touched:false}}
    }//end of state
  }
  //updates the fields displayed depending on the type of post
  updateFields=(fieldTypeSelected)=>{
    const {areTypeSpecificFieldsVisible} = this.state;
    const {inputs} = this.state
   //first resetting fields to not display
    Object.keys(areTypeSpecificFieldsVisible).forEach(key => {
       areTypeSpecificFieldsVisible[key]=false
    });
  //resetting any touched input values to false
    Object.keys(inputs).forEach(key => {
     inputs[key].touched=false;
    });
  //clear values
    Object.keys(inputs).forEach(key => {
     inputs[key].value="";
    });
        if(fieldTypeSelected==='book'){
            areTypeSpecificFieldsVisible['title']=true;
            areTypeSpecificFieldsVisible['by']=true;
            areTypeSpecificFieldsVisible['content']=true;
            areTypeSpecificFieldsVisible['link']=true;
        }
        else if(fieldTypeSelected==='lifestyle'){
            areTypeSpecificFieldsVisible['title']=true;
            areTypeSpecificFieldsVisible['by']=true;
            areTypeSpecificFieldsVisible['content']=true;
        }
        else if(fieldTypeSelected==='podcast'){
            areTypeSpecificFieldsVisible['content']=true;
            areTypeSpecificFieldsVisible['link']=true;
            areTypeSpecificFieldsVisible['by']=true;
            areTypeSpecificFieldsVisible['title']=true;
        }
        else if(fieldTypeSelected==='event'){
            areTypeSpecificFieldsVisible['content']=true;
            areTypeSpecificFieldsVisible['link']=true;
            areTypeSpecificFieldsVisible['title']=true;
            areTypeSpecificFieldsVisible['dates']=true;
        }
        else if(fieldTypeSelected==='recipe'){
           areTypeSpecificFieldsVisible['title']=true;
            areTypeSpecificFieldsVisible['by']=true;
            areTypeSpecificFieldsVisible['content']=true;
        }

        //clear all form fields 
         this.refs.form.reset();

        this.setState({
            fieldType:fieldTypeSelected,
            inputs:inputs,
            submitDisabled:true,
            areTypeSpecificFieldsVisible:areTypeSpecificFieldsVisible})
    }

  updateChange=(inputValue, id)=>{
    const {inputs} = this.state;
    //console.log(inputs)
    
    inputs[id]={value:inputValue,touched:true}
    this.setState({inputs:inputs})
    this.checkDisableSubmit();
  }

  checkDisableSubmit(){
        console.log(`cDS ${this.state.fieldType} ${this.state.inputs.content.touched}`)
        if(this.state.fieldType === 'lifestyle' || this.state.fieldType === 'event' || this.state.fieldType === 'podcast') {
          if( this.state.inputs.title.touched && this.state.inputs.link.touched && this.state.submitDisabled)
           {this.setState({submitDisabled:false})}
        }
        else if(this.state.fieldType==='recipe' && this.state.inputs.content.touched && this.state.submitDisabled){
           console.log(`this if ran `)
           this.setState({submitDisabled:false})  
        }
        else if(this.state.fieldType==='book' && this.state.inputs.title.touched && this.state.submitDisabled){
            console.log(`this if ran `)
            this.setState({submitDisabled:false})  
        }  
    }
    validateContent(){
        const content = this.state.inputs.content.value.trim();
        if (content.length>800){
            return 'Please keep posts under 800 characters.'
        } 
    }
    validateLink(){
      const link = this.state.inputs.link.value;
      let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

      if (!regexp.test(link))
      {
        return 'Please enter a valid url'
      }
  
  }

  handleSubmit=(e)=>{
        e.preventDefault();
        const {inputs, fieldType}=this.state;
        console.log(inputs)
        let newPost = {
            user_id:1,
            post_type:fieldType,
            title:inputs.title.value,
            link:inputs.link.value,
            content:inputs.content.value,
            by:inputs.by.value}
            console.log(newPost)

            let url = `${config.API_DEV_ENDPOINT}/posts`
    
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                  'content-type': 'application/json',
                 // 'authorization': `Bearer ${config.API_KEY}`
                }
              })
                .then(res => {
                  if (!res.ok) {
                    // get the error message from the response,
                    return res.json().then(error => {
                      // then throw it
                      throw error
                    })
                  }
                  return res.json()
                })
                .then(post => {
                // title.value = ''
                 // url.value = ''
                 // description.value = ''
                  //rating.value = ''
                  console.log(`this is the new post from res`)
                  console.log(post)
                  this.props.history.push('/dashboard')
                  this.context.addPost(newPost)
                  //this.props.onAddBookmark(data)
                })
                .catch(error => {
                  this.setState({ error })
                })
  }
  render(){
        const { areTypeSpecificFieldsVisible } = this.state;
        const contentError = this.validateContent();
        const linkError = this.validateLink();
        return(
            <div className="new-post">
                <header>
                    <Nav pageType={'interior'}/>
                </header>
                <main>
                <FilterButtonsForm
                        updateFields = {this.updateFields}
                        buttonInfo={[
                        {aria_label:'fields to create new recipe post',icon_type:faSeedling,field_type:'recipe'},
                        {ariaLabel:'fields to create new book post',icon_type:faBookOpen, field_type:'book'},
                        {aria_label:'fields to create new podcast post',icon_type:faPodcast,field_type:'podcast'},
                        {aria_label:'lifestyle posts',icon_type:faHeartbeat, field_type:'lifestyle'},
                        {aria_label:'event posts',icon_type:faCalendarAlt,field_type:'event'}]}
                    />

                    <form className="new-post-form" 
                        onSubmit={e=>this.handleSubmit(e)}
                        ref="form">
                        <div className="form-intro">
                            <p>Please use the buttons above to select the type of post you want to create and the form below to share some information with others.<FontAwesomeIcon className="filter-icon inline-block-icon" icon={faSmile} /></p>
                            <h2>You can currently create a new {this.state.fieldType} post</h2>
                        </div>
                        <div>
                            <div className={`form-field-group field-title ${areTypeSpecificFieldsVisible['title'] ? "" : " hidden"}`}>
                                <label htmlFor="title">Title*</label>
                                <input type="text" name="title" id="title" placeholder="A New Beginning"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div className={`form-field-group field-author ${areTypeSpecificFieldsVisible['author'] ? "" : " hidden"}`}>
                                <label htmlFor="by">Author</label>
                                <input type="text" name="by" id="by" placeholder="Amy Myers"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div className={`form-field-group field-link ${areTypeSpecificFieldsVisible['link'] ? "" : " hidden"} `}>
                                <label htmlFor="link">Link*</label>
                                <input type="url" name="link" id="link" placeholder="https://www.mayaangelou.com/"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            {this.state.inputs.link.touched  && (<ValidationError message={linkError}/>)}
                            <div className={`form-field-group field-content ${areTypeSpecificFieldsVisible['content'] ? "" : " hidden"} `}>
                                <label htmlFor="content">Content*</label>
                                <textarea type="textarea" name="content" id="content"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            {this.state.inputs.content.touched  && (<ValidationError message={contentError}/>)}
                            <div className={`form-field-group field-date ${areTypeSpecificFieldsVisible['dates'] ? "" : " hidden"} `}>
                                <label htmlFor="event_date">Event Date</label>
                                <input type="date" name="event_date" id="event_date"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                            <div className="form-field-group field-img">
                                <label htmlFor="post-image">Upload Screenshot</label>
                                <input type="image" name="post_image" id="post_image" alt="user-uploaded-image"
                                    onChange={e => this.updateChange(e.target.value, e.target.id)}/>
                            </div>
                        </div>                            
                        <div className="form-buttons button-row">    
                            <button type="submit" disabled={
                                    //this.state.submitDisabled || this.validateLink()}
                                    this.state.submitDisabled}>
                                Post</button>
                            <button type="reset">Cancel</button>
                        </div>                          
                    </form>
                    <FilterButtons
                        buttonInfo={[
                        {ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'}
                        ]}                   
                    />
                </main>
            </div>
        )
    }
}

export default NewPost;