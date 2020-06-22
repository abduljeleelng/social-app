import React, { Component, Fragment } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {Link} from 'react-router-dom';

import cover from './img/cover.jpg';
import profileIcon from './img/profileIcon.png';

import { Create,Header,Post} from '../newsfeed/components';
import { TimeLineEvent, Abouts, FriendList,Photos} from './component';
import { isAuthenticated } from '../../auth';
import { postBy } from '../newsfeed/api';
import { profilePhoto,user,imageList} from './api';


export default class TimeLine extends Component {
  constructor(props){
    super(props);
    this.state={
      user:'',
      loadPosts:false,
      posts:[],
      userId:'',
      about:'',
      loadAbout:false,
      loadEvent:true,
      events:[
        {
          /**
           *           "title":"Developer At Unitech Global",
            *           "start":"06 - 09-2020",
            *            "image":"https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png"
           */

        }
      ],
      photos:[],
      friends:[],
    }
  }

  componentDidMount(){
    const userId  = this.props.match.params.userId
    this.setState({userId,user:isAuthenticated().user});
    postBy(userId).then((data,err)=>{
      if(err) return console.log(JSON.stringify({err, errormessage:"Unable to fetch user post"}))
      if(data.error){
        console.log(JSON.stringify(data))
      }else{
        this.setState({posts:data.posts,loadPosts:true});
      }
    });
    user(userId).then(data=>{
      if(data.error){return console.log(data.error)}
      this.setState({about:data,loadAbout:true})
    })
    imageList(userId).then(data=>{
      //console.log(JSON.stringify(data))
      this.setState({photos:data})
    })
  }
  componentDidUpdate(preProps){
    const userId  = this.props.match.params.userId;
    if(userId !== this.state.userId){
      postBy(userId).then((data,err)=>{
        if(err) return console.log(JSON.stringify({err, errormessage:"Unable to fetch user post"}))
        if(data.error){
          console.log(JSON.stringify(data))
        }else{
          this.setState({posts:data.posts,loadPosts:true});
        }
      });
      user(userId).then(data=>{
        if(data.error){return console.log(data.error)}
        this.setState({about:data,loadAbout:true})
      })
    }
  }
  render() {
    const {user,posts,loadPosts,about,loadEvent,events,photos,friends}= this.state;
    //friends
    //console.log(JSON.stringify({photos}))
    //const friends = about.friends.length;
    ///console.log(JSON.stringify({friends,loadAbout}))
    return (
    <Fragment>
    <div>
    <div className="wrapper">
    <Header user={user} />
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-body profile-page p-0">
                <div className="profile-header">
                  <div className="cover-container">
                    <img src={cover} alt="profile-bg" className="rounded img-fluid" />
                    <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
                      <li><a href><i className="ri-pencil-line" /></a></li>
                      <li><Link to="/user/setting"><i className="ri-settings-4-line" /></Link></li>
                    </ul>
                  </div>
                  <div className="user-detail text-center mb-3">
                    <div className="profile-img">
                      <img src={`${profilePhoto}${about && about._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="profile-img" className="avatar-130 img-fluid" />
                    </div>
                    <div className="profile-detail">
                      <h3 className>{about && about.firstName} {about && about.lastName}</h3>
                    </div>
                  </div>
                  <div className="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                    <div className="social-links">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                      {/*
                        <li className="text-center pr-3">
                          <a href="#"><img src="images/icon/08.png" className="img-fluid rounded" alt="facebook" /></a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#"><img src="images/icon/09.png" className="img-fluid rounded" alt="Twitter" /></a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#"><img src="images/icon/10.png" className="img-fluid rounded" alt="Instagram" /></a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#"><img src="images/icon/11.png" className="img-fluid rounded" alt="Google plus" /></a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#"><img src="images/icon/12.png" className="img-fluid rounded" alt="You tube" /></a>
                        </li>
                        <li className="text-center pr-3">
                          <a href="#"><img src="images/icon/13.png" className="img-fluid rounded" alt="linkedin" /></a>
                        </li>
                        */}
                      </ul>
                    </div>
                    <div className="social-info">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pl-3">
                          <h6>Friends</h6>
                          <p className="mb-0">{about && about.friends.length}</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>Followers</h6>
                          <p className="mb-0">{about && about.followers.length}</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>Following</h6>
                          <p className="mb-0">{about && about.following.length}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="iq-card">
              <div className="iq-card-body p-0">
                <div className="user-tabing">
                  <ul className="nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                    <li className="col-sm-3 p-0">
                      <a className="nav-link active" data-toggle="pill" href="#timeline">Timeline</a>
                    </li>
                    <li className="col-sm-3 p-0">
                      <a className="nav-link" data-toggle="pill" href="#about">About</a>
                    </li>
                    <li className="col-sm-3 p-0">
                      <a className="nav-link" data-toggle="pill" href="#friends">friends</a>
                    </li>
                    <li className="col-sm-3 p-0">
                      <a className="nav-link" data-toggle="pill" href="#photos">Photos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="timeline" role="tabpanel">
                <div className="iq-card-body p-0">
                  <div className="row">
                    <ReactPlaceholder showLoadingAnimation  type='media' rows={2} ready={loadEvent}>
                      <TimeLineEvent events={events} photos={photos} friends={friends} />
                    </ReactPlaceholder>
                    <div className="col-lg-8">
                      <Create user={user} />
                      <ReactPlaceholder showLoadingAnimation  rows={7} ready={loadPosts}>
                        <Post posts={posts} />
                      </ReactPlaceholder>
                    </div>
                  </div>
                </div>
              </div>
              <Abouts about={about} />
              <FriendList about={about} />
              <Photos photo={``} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Wrapper END */}
  {/* Footer */}

</div>

            </Fragment>
        )
    }
}
