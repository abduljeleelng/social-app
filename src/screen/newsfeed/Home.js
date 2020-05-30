import React, { Component,Fragment  } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import { Create,Header,Post, Story,Event, Birthday} from './components';

import '../../custom/css/typography.css';
import '../../custom/css/style.css';
import '../../custom/css/responsive.css';
import { isAuthenticated } from '../../auth';
import { posts } from './api';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            loadPost:false,
            loadStory:false,
            loadEvent:false,
            loadBirth:false,
            user:'',
            posts:[],
        }
    }
    componentDidMount(){
        this.setState({user:isAuthenticated().user});
        posts().then(posts=>{
            if(posts.error){
                console.log(JSON.stringify(posts));
            }else{
                this.setState({posts,loadPost:true})
            }
        })

    }
    render() {
        const {loadPost,loadStory,loadEvent,loadBirth,user,posts}=this.state;
        return (
            <Fragment>
                <Header user={user} />
                <div id="content-page" className="content-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 row m-0 p-0">
                                <Create user={user} />
                                <ReactPlaceholder showLoadingAnimation  rows={7} ready={loadPost}>
                                    <Post posts={posts} />
                                </ReactPlaceholder>
                            </div>
                            <div className="col-lg-4">
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadStory}>
                                    <Story />
                                </ReactPlaceholder>
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadEvent}>
                                    <Event />
                                </ReactPlaceholder>
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadBirth}>
                                    <Birthday /> 
                                </ReactPlaceholder>  
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
