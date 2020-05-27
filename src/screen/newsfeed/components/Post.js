import React, { Fragment } from 'react';
import profileIcon from '../img/profileIcon.png'
import { profilePhoto } from '../../timeline/api';
import { Link } from 'react-router-dom';
import { photoAPI } from '../api';

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
   // console.log(timeAgo(new Date("Thu Oct 25 2018").getTime()));

export default function Post({posts}) {
  //console.log(JSON.stringify(posts))
    return (
      <Fragment>
        {
          posts && posts.length > 0 ? 
          posts.map((post,i)=>(
            <div className="col-sm-12">
            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
              <div className="iq-card-body">
                <div className="user-post-data">
                  <div className="d-flex flex-wrap">
                    <div className="media-support-user-img mr-3">
                      <img className="rounded-circle img-fluid" src={`${profilePhoto}${post.postedBy._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="user" />
                    </div>
                    <div className="media-support-info mt-2">
                      <h5 className="mb-0 d-inline-block"><Link to={`/${post.postedBy._id}`} className> {post.postedBy.firstName} {post.postedBy.lastName}</Link></h5>
                      <p className="mb-0 d-inline-block"></p>
                      <p className="mb-0 text-primary">{timeAgo(new Date(post.created).getTime())}</p>
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
                  <p>{post.body}</p>
                </div>
                <div className="user-post">
                  <img src={`${photoAPI}/${post._id}`} alt="" className="img-fluid rounded w-100" />
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
                              {post.likes.length} Likes
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
                          {post.comments.length} Comment
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
                    <li className="mb-2">
                      <div className="d-flex flex-wrap">
                        <div className="user-img">
                          <img src="images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                        </div>
                        <div className="comment-data-block ml-3">
                          <h6>Monty Carlo</h6>
                          <p className="mb-0">Lorem ipsum dolor sit amet</p>
                          <div className="d-flex flex-wrap align-items-center comment-activity">
                            <a href="fake">like</a>
                            <a href="fake">reply</a>
                            <a href="fake">translate</a>
                            <span> 5 min </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <form action="" className="comment-text d-flex align-items-center mt-3">
                    <input type="text" className="form-control rounded" />
                    <div className="comment-attagement d-flex">
                      <a href="fake"><i className="ri-link mr-3" /></a>
                      <a href="fake"><i className="ri-user-smile-line mr-3" /></a>
                      <a href="fake"><i className="ri-camera-line mr-3" /></a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          ))
          : (
          <div>
            <p>No posts </p>
          </div>
          )
        }


      {/*
  <div className="col-sm-12">
    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
      <div className="iq-card-body">
        <div className="user-post-data">
          <div className="d-flex flex-wrap">
            <div className="media-support-user-img mr-3">
              <img className="rounded-circle img-fluid" src="images/user/01.jpg" alt="post" />
            </div>
            <div className="media-support-info mt-2">
              <h5 className="mb-0 d-inline-block"><a href="fake" className>Anna Sthesia</a></h5>
              <p className="mb-0 d-inline-block">Add New Post</p>
              <p className="mb-0 text-primary">Just Now</p>
            </div>
            <div className="iq-card-post-toolbar">
              <div className="dropdown">
                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                  <i className="ri-more-fill" />
                </span>
                <div className="dropdown-menu m-0 p-0">
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
          </div>
        </div>
        <div className="mt-3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
        </div>
        <div className="user-post">
          <div className="d-flex">
            <div className="col-md-6">
              <a href="fake"><img src="images/page-img/p2.jpg" alt="post" className="img-fluid rounded w-100" /></a>
            </div>
            <div className="col-md-6 row m-0 p-0">
              <div className="col-sm-12">
                <a href="fake"><img src="images/page-img/p1.jpg" alt="post" className="img-fluid rounded w-100" /></a>
              </div>
              <div className="col-sm-12 mt-3">
                <a href="fake"><img src="images/page-img/p3.jpg" alt="post" className="img-fluid rounded w-100" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-area mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="like-block position-relative d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="like-data">
                  <div className="dropdown">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                      <img src="images/icon/01.png" className="img-fluid" alt="post" />
                    </span>
                    <div className="dropdown-menu">
                      <a className="ml-2 mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt="post" /></a>
                      <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt="post" /></a>
                      <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt="post" /></a>
                      <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt="post" /></a>
                      <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt="post" /></a>
                      <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt="post" /></a>
                      <a className="mr-2" href="fake" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt="post" /></a>
                    </div>
                  </div>
                </div>
                <div className="total-like-block ml-2 mr-3">
                  <div className="dropdown">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                      140 Likes
                    </span>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="fake">Max Emum</a>
                      <a className="dropdown-item" href="fake">Bill Yerds</a>
                      <a className="dropdown-item" href="fake">Hap E. Birthday</a>
                      <a className="dropdown-item" href="fake">Tara Misu</a>
                      <a className="dropdown-item" href="fake">Midge Itz</a>
                      <a className="dropdown-item" href="fake">Sal Vidge</a>
                      <a className="dropdown-item" href="fake">Other</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total-comment-block">
                <div className="dropdown">
                  <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                    20 Comment
                  </span>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="fake">Max Emum</a>
                    <a className="dropdown-item" href="fake">Bill Yerds</a>
                    <a className="dropdown-item" href="fake">Hap E. Birthday</a>
                    <a className="dropdown-item" href="fake">Tara Misu</a>
                    <a className="dropdown-item" href="fake">Midge Itz</a>
                    <a className="dropdown-item" href="fake">Sal Vidge</a>
                    <a className="dropdown-item" href="fake">Other</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="share-block d-flex align-items-center feather-icon mr-3">
              <a href="fake"><i className="ri-share-line" />
                <span className="ml-1">99 Share</span></a>
            </div>
          </div>
          <hr />
          <ul className="post-comments p-0 m-0">
            <li className="mb-2">
              <div className="d-flex flex-wrap">
                <div className="user-img">
                  <img src="images/user/02.jpg" alt="post" className="avatar-35 rounded-circle img-fluid" />
                </div>
                <div className="comment-data-block ml-3">
                  <h6>Monty Carlo</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet</p>
                  <div className="d-flex flex-wrap align-items-center comment-activity">
                    <a href="fake">like</a>
                    <a href="fake">reply</a>
                    <a href="fake">translate</a>
                    <span> 5 min </span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex flex-wrap">
                <div className="user-img">
                  <img src="images/user/03.jpg" alt="post" className="avatar-35 rounded-circle img-fluid" />
                </div>
                <div className="comment-data-block ml-3">
                  <h6>Paul Molive</h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet</p>
                  <div className="d-flex flex-wrap align-items-center comment-activity">
                    <a href="fake">like</a>
                    <a href="fake">reply</a>
                    <a href="fake">translate</a>
                    <span> 5 min </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
            <input type="text" className="form-control rounded" />
            <div className="comment-attagement d-flex">
              <a href="fake"><i className="ri-link mr-3" /></a>
              <a href="fake"><i className="ri-user-smile-line mr-3" /></a>
              <a href="fake"><i className="ri-camera-line mr-3" /></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
      */}
      </Fragment>
  )
}
