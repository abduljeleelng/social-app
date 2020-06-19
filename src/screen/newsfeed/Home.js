import React, { Component,Fragment  } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

import { Create,Header,Post, Story,Event, Birthday,BirthdayMonth} from './components';

import '../../custom/css/typography.css';
import '../../custom/css/style.css';
import '../../custom/css/responsive.css';
import { isAuthenticated } from '../../auth';
import { posts,birthday,birthdayMonth } from './api';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            loadPost:false,
            loadStory:false,
            loadEvent:false,
            loadBirth:false,
            loadBMonth:false,
            birth:'',
            bMonth:'',
            user:'',
            posts:[],
            comes:[],
        }
    }
    updatePosts=posts=>{
        this.setState({posts});
    }
    componentDidMount(){
        this.setState({user:isAuthenticated().user});
        posts().then(posts=>{
            if(posts.error){
                console.log(JSON.stringify(posts));
            }else{
                this.setState({posts,loadPost:true})
            }
        });
        birthday().then(data=>{
            if(data === undefined) return console.log("networ | server Error");
            this.setState({birth:data,loadBirth:true});
        });
        birthdayMonth().then(data=>{
            if(data === undefined) return console.log("networ | server Error");
            this.setState({bMonth:data,loadBMonth:true});
        });
    }
    render() {
        const {loadPost,loadBirth,user,posts,birth,bMonth,loadBMonth}=this.state;
        return (
            <Fragment>
                <Header user={user} />
                <div id="content-page" className="content-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 row m-0 p-0">
                                <Create user={user} updatePosts={this.updatePosts} />
                                <ReactPlaceholder showLoadingAnimation  rows={7} ready={loadPost}>
                                    <Post posts={posts} />
                                </ReactPlaceholder>
                            </div>
                            <div className="col-lg-4">
                                {/*
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadStory}>
                                    <Story />
                                </ReactPlaceholder>
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadEvent}>
                                    <Event />
                                </ReactPlaceholder>
                                    */}
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadBirth}>
                                    <Birthday b={birth} />
                                </ReactPlaceholder>
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={loadBMonth}>
                                    <BirthdayMonth data={bMonth} />
                                </ReactPlaceholder>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
