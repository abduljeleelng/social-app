import React, { Fragment, Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import '../../custom/css/typography.css';
import '../../custom/css/style.css';
import '../../custom/css/responsive.css';
import { Link } from 'react-router-dom';


import profileIcon from './img/profileIcon.png'
import { profilePhoto } from '../timeline/api';
import { isAuthenticated } from '../../auth';
import { photoAPI, like, unlike, deletePost,SinglePost } from './api';
import { Comment } from './components';


const timeAgo = (prevDate) => {
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  switch (true) {
    case diff < minute:
      const seconds = Math.round(diff / 1000);
      return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
      case diff < hour:
        return Math.round(diff / minute) + ' minutes ago';
      case diff < day:
        return Math.round(diff / hour) + ' hours ago';
      case diff < month:
        return Math.round(diff / day) + ' days ago';
      case diff < year:
        return Math.round(diff / month) + ' months ago';
      case diff > year:
        return Math.round(diff / year) + ' years ago';
      default:
        return "";
    }
  };
 

export default class Single extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: "",
            redirectToHome: false,
            redirectToSignin: false,
            like: false,
            likes: 0,
            comments: []
        };
    }

    render(){
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
