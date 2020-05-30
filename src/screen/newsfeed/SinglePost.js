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
import { photoAPI, like, unlike, deletePost,singlePost } from './api';
import { Comment,Create,Header, Story,Event, Birthday } from './components';


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
 

export default class SinglePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            loadPost:false,
            loadStory:false,
            loadEvent:false,
            loadBirth:false,
            user:'',
            post: "",
            redirectToHome: false,
            redirectToSignin: false,
            like: false,
            likes: 0,
            comments: []
        };
    }
    checkLike = likes => {
        const userId = isAuthenticated() && isAuthenticated().user._id;
        let match = likes.indexOf(userId) !== -1;
        return match;
    };

    componentDidMount = () => {
        this.setState({user:isAuthenticated().user});
        const postId = this.props.match.params.postId;
        singlePost(postId).then(data => {
            //console.log(JSON.stringify(data));
            if (data.error) {
                //console.log(JSON.stringify({data,endpoint:"Value comes out with errors"}))
                console.log(data.error);
            } else {
                ///console.log(JSON.stringify({data,endpoint:"Value comes out"}))
                this.setState({
                    post: data,
                    likes: data.likes.length,
                    like: this.checkLike(data.likes),
                    comments: data.comments,
                    loadPost:true,
                });
            }
        });
    };
    updateComments = comments => {
        this.setState({ comments });
    };

    likeToggle = () => {
        if (!isAuthenticated()) {
            this.setState({ redirectToSignin: true });
            return false;
        }
        let callApi = this.state.like ? unlike : like;
        const userId = isAuthenticated().user._id;
        const postId = this.state.post._id;
        const token = isAuthenticated().token;
        callApi(userId, token, postId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({
                    like: !this.state.like,
                    likes: data.likes.length
                });
            }
        });
    };

    deletePost = () => {
        const postId = this.props.match.params.postId;
        const token = isAuthenticated().token;
        deletePost(postId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ redirectToHome: true });
            }
        });
    };

    deleteConfirmed = () => {
        let answer = window.confirm(
            "Are you sure you want to delete your post?"
        );
        if (answer) {
            this.deletePost();
        }
    };
    renderPost=(post,like,likes,comments)=>{
              return (
                  <div className="col-sm-12">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                  <div className="iq-card-body">
                      <div className="user-post-data">
                      <div className="d-flex flex-wrap">
                          <div className="media-support-user-img mr-3">
                          <img className="rounded-circle img-fluid" src={`${profilePhoto}${post && post.postedBy._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="user" />
                          </div>
                          <div className="media-support-info mt-2">
                          <h5 className="mb-0 d-inline-block"><Link to={`/${post && post.postedBy._id}`} className> {post.postedBy.firstName} {post.postedBy.lastName}</Link></h5>
                          <p className="mb-0 d-inline-block"></p>
                          <p className="mb-0 text-primary">{timeAgo(new Date(post && post.created).getTime())}</p>
                          </div>
                          {/*
                          <div className="iq-card-post-toolbar">
                          <div className="dropdown">
                              <span className="dropdown-toggle" id="postdata-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              <i className="ri-more-fill" />
                              </span>
                              <div className="dropdown-menu m-0 p-0" aria-labelledby="postdata-5">
                              <a className="dropdown-item p-3" href="fake">
                                  <div className="d-flex align-items-top">
                                  <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                  <div className="data ml-2">
                                      <h6>Save Post</h6>
                                      <p className="mb-0">Add this to your saved items</p>
                                  </div>
                                  </div>
                              </a>
                              <a className="dropdown-item p-3" href="fake">
                                  <div className="d-flex align-items-top">
                                  <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                  <div className="data ml-2">
                                      <h6>Hide Post</h6>
                                      <p className="mb-0">See fewer posts like this.</p>
                                  </div>
                                  </div>
                              </a>
                              <a className="dropdown-item p-3" href="fake">
                                  <div className="d-flex align-items-top">
                                  <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                                  <div className="data ml-2">
                                      <h6>Unfollow User</h6>
                                      <p className="mb-0">Stop seeing posts but stay friends.</p>
                                  </div>
                                  </div>
                              </a>
                              <a className="dropdown-item p-3" href="fake">
                                  <div className="d-flex align-items-top">
                                  <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                                  <div className="data ml-2">
                                      <h6>Notifications</h6>
                                      <p className="mb-0">Turn on notifications for this post</p>
                                  </div>
                                  </div>
                              </a>
                              </div>
                          </div>
                          </div>
                              */ }
                      </div>
                      </div>
                      <div className="mt-3">
                      <p>{post && post.body}</p>
                      </div>
                      <div className="user-post">
                      <img src={`${photoAPI}/${post && post._id}`} alt="" className="img-fluid rounded w-100" />
                      </div>
                      <div className="comment-area mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="like-block position-relative d-flex align-items-center">
                          <div className="d-flex align-items-center">
                              <div className="like-data">
                              <div className="dropdown">
                                  <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                  <img src="images/icon/01.png" className="img-fluid" alt="" />
                                  </span>
                                  {/*
                                  <div className="dropdown-menu">
                                  <a className="ml-2 mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt="user" /></a>
                                  <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt="user" /></a>
                                  <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt="user" /></a>
                                  <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt="user" /></a>
                                  <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt="user"/></a>
                                  <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt="user" /></a>
                                  <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt="user" /></a>
                                  </div>
                                  */}
                              </div>
                              </div>
                              <div className="total-like-block ml-2 mr-3">
                              <div className="dropdown">
                                  <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                  {
                                      like ? 
                                      (
                                      <>
                                      <button onClick={this.likeToggle} className="dripicons-thumbs-down" /> {likes} Likes
                                      </>
                                      )
                                      :
                                      (
                                      <>
                                      <button onClick={this.likeToggle} className="dripicons-thumbs-up" /> {likes} Likes
                                      </>
                                      )
                                  }
                                  
                                  </span>
                                  {/*
                                  <div className="dropdown-menu">
                                  <a className="dropdown-item" href="fake">Max Emum</a>
                                  <a className="dropdown-item" href="fake">Bill Yerds</a>
                                  <a className="dropdown-item" href="fake">Hap E. Birthday</a>
                                  <a className="dropdown-item" href="fake">Tara Misu</a>
                                  <a className="dropdown-item" href="fake">Midge Itz</a>
                                  <a className="dropdown-item" href="fake">Sal Vidge</a>
                                  <a className="dropdown-item" href="fake">Other</a>
                                  </div>
                                  */}
                              </div>
                              </div>
                          </div>
                          <div className="total-comment-block">
                              <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              {comments.length} Comment
                              </span>
                              {/*
                              <div className="dropdown-menu">
                                  <a className="dropdown-item" href="fake">Max Emum</a>
                                  <a className="dropdown-item" href="fake">Bill Yerds</a>
                                  <a className="dropdown-item" href="fake">Hap E. Birthday</a>
                                  <a className="dropdown-item" href="fake">Tara Misu</a>
                                  <a className="dropdown-item" href="fake">Midge Itz</a>
                                  <a className="dropdown-item" href="fake">Sal Vidge</a>
                                  <a className="dropdown-item" href="fake">Other</a>
                              </div>
                              */}
                              </div>
                          </div>
                          </div>
                          {/*
                          <div className="share-block d-flex align-items-center feather-icon mr-3">
                          <a href="fake"><i className="ri-share-line" />
                              <span className="ml-1">99 Share</span>
                          </a>
                          </div>
                          */}
                      </div>
                      <hr />
                      <ul className="post-comments p-0 m-0">
                          {
                          comments.length > 0 ? 
                          comments.slice(0,5).map((comment,i)=>(
                              <li className="mb-2" key={i}>
                              <div className="d-flex flex-wrap">
                              <div className="user-img">
                                  <img src={`${profilePhoto}${comment.postedBy._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="user" className="avatar-35 rounded-circle img-fluid" />
                              </div>
                              <div className="comment-data-block ml-3">
                                  <Link to={`/${comment.postedBy._id}`} ><h6>{comment.postedBy.firstName} {comment.postedBy.lastName}</h6></Link>
                                  <p className="mb-0" style={{color:'#fff', marginLeft:5}}>{comment.text}</p>
                                  <div className="d-flex flex-wrap align-items-center comment-activity">
                                  {/* <a href="fake">like</a>
                                  <a href="fake">reply</a>
                                  <a href="fake">translate</a>*/}
                                  <p style={{marginLeft:20}}> comment about &nbsp; <span>{timeAgo(new Date(comment.created).getTime())} </span></p>
                                  </div>
                              </div>
                              </div>
                          </li>
                          )):(
                              <li className="mb-2">
                              <div className="d-flex flex-wrap">
                              <div className="comment-data-block ml-3">
                                  <p className="mb-0">be the first person to comment </p>
                              </div>
                              </div>
                          </li>
                          )
                          }
                      </ul>
                      <Comment postId={post._id} />
                      </div>
                  </div>
                  </div>
                  </div>
          )
          }



    render(){
        const {loadPost,loadStory,loadEvent,loadBirth,user,post,like,likes,comments}=this.state;
        return (
            <Fragment>
                <Header user={user} />
                <div id="content-page" className="content-page">
                    <div className="container">
                        <div className="row">  
                            <div className="col-lg-8 row m-0 p-0">
                                <Create user={user} />
                                <ReactPlaceholder showLoadingAnimation rows={7} ready={loadPost}>
                                    {
                                        post && post !== "" ?
                                        (this.renderPost(post,like,likes,comments)):("Error in getting post")
                                    }
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
