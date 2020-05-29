import React, { Fragment } from 'react'
import { photoAPI } from '../../newsfeed/api';
import logo from '../../asset/img/logo.png'

export default function TimeLInePost({posts}) {
  //console.log(JSON.stringify(posts))
    return (
        <Fragment>
                      <div className="iq-card">
                        <div className="iq-card-body">
                          {
                            posts && posts.length > 0 ? posts.map((post,index)=>(
                              <div className="post-item" key={index}>
                              <div className="user-post-data p-3">
                                <div className="d-flex flex-wrap">
                                  <div className="media-support-user-img mr-3">
                                    <img className="rounded-circle img-fluid" src="images/user/1.jpg" alt="user" />
                                  </div>
                                  <div className="media-support-info mt-2">
                                  <h5 className="mb-0 d-inline-block"><a href className>{`${post.postedBy.firstName}  ${post.postedBy.lastName}`}</a></h5>
                                    <p className="ml-1 mb-0 d-inline-block"></p>
                                    <p className="mb-0"> {new Date(post.created).toDateString()}</p>
                                  </div>
                                  {
                                    /***
                                     *
                                     * <div className="iq-card-post-toolbar">
                                    <div className="dropdown">
                                      <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i className="ri-more-fill" />
                                      </span>
                                      <div className="dropdown-menu m-0 p-0">
                                        <a className="dropdown-item p-3" href>
                                          <div className="d-flex align-items-top">
                                            <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                            <div className="data ml-2">
                                              <h6>Save Post</h6>
                                              <p className="mb-0">Add this to your saved items</p>
                                            </div>
                                          </div>
                                        </a>
                                        <a className="dropdown-item p-3" href>
                                          <div className="d-flex align-items-top">
                                            <div className="icon font-size-20"><i className="ri-pencil-line" /></div>
                                            <div className="data ml-2">
                                              <h6>Edit Post</h6>
                                              <p className="mb-0">Update your post and saved items</p>
                                            </div>
                                          </div>
                                        </a>
                                        <a className="dropdown-item p-3" href>
                                          <div className="d-flex align-items-top">
                                            <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                            <div className="data ml-2">
                                              <h6>Hide From Timeline</h6>
                                              <p className="mb-0">See fewer posts like this.</p>
                                            </div>
                                          </div>
                                        </a>
                                        <a className="dropdown-item p-3" href>
                                          <div className="d-flex align-items-top">
                                            <div className="icon font-size-20"><i className="ri-delete-bin-7-line" /></div>
                                            <div className="data ml-2">
                                              <h6>Delete</h6>
                                              <p className="mb-0">Remove thids Post on Timeline</p>
                                            </div>
                                          </div>
                                        </a>
                                        <a className="dropdown-item p-3" href>
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
                                     */
                                  }

                                </div>
                              </div>
                              <div className="user-post">
                                <a href><img src={photoAPI+post._id} alt="post" className="img-fluid w-100" /></a>
                              </div>
                              <div className="mt-3">
                                <p>{post.body}</p>
                              </div>
                              <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                      <div className="like-data">
                                        <div className="dropdown">
                                          <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <img src="images/icon/01.png" className="img-fluid" alt="user" />
                                          </span>
                                          <div className="dropdown-menu">
                                            <a className="ml-2 mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt="like" /></a>
                                            <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt="love" /></a>
                                            <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt="happy" /></a>
                                            <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt="Haha" /></a>
                                            <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt="think" /></a>
                                            <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt="sade" /></a>
                                            <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt="Lovely" /></a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="total-like-block ml-2 mr-3">
                                        <div className="dropdown">
                                          <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            {post.likes.length} Like
                                          </span>
                                          {
                                            /***
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href>Max Emum</a>
                                            <a className="dropdown-item" href>Bill Yerds</a>
                                            <a className="dropdown-item" href>Hap E. Birthday</a>
                                            <a className="dropdown-item" href>Tara Misu</a>
                                            <a className="dropdown-item" href>Midge Itz</a>
                                            <a className="dropdown-item" href>Sal Vidge</a>
                                            <a className="dropdown-item" href>Other</a>
                                          </div>
                                             * 
                                             */
                                          }
                                        </div>
                                      </div>
                                    </div>
                                    <div className="total-comment-block">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                          {post.comments.length} Comments
                                        </span>
                                        {
                                          /***
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href>Max Emum</a>
                                          <a className="dropdown-item" href>Bill Yerds</a>
                                          <a className="dropdown-item" href>Hap E. Birthday</a>
                                          <a className="dropdown-item" href>Tara Misu</a>
                                          <a className="dropdown-item" href>Midge Itz</a>
                                          <a className="dropdown-item" href>Sal Vidge</a>
                                          <a className="dropdown-item" href>Other</a>
                                        </div>
                                           */
                                        }
                                      </div>
                                    </div>
                                  </div>
                                  <div className="share-block d-flex align-items-center feather-icon mr-3">

                                  </div>
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                          {
                            post.comments && post.comments.length > 0 ? 
                            (
                              post.comments.map((comment,index)=>(
                                <li className="mb-2" key={index}>
                                  <div className="d-flex flex-wrap">
                                    <div className="user-img">
                                      <img src={''} onError={i=>i.target.src=`${logo}`} alt="Profile" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ml-3">
                                      {/*<h6>Monty Carlo</h6>*/}
                                      <p className="mb-0">{comment.text}</p>
                                    
                                      <div className="d-flex flex-wrap align-items-center comment-activity">
                                      {
                                        /*<a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        */
                                      }
                                        <span>Comment on {new Date(comment.created).toDateString()} </span>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                </li>
                             
                              ))

                            ):(
                              <li className="mb-2">
                              <div className="d-flex flex-wrap">
                                <div className="comment-data-block ml-3">
                                  <h6>Be the first person to comments on this</h6>
                                </div>
                              </div>
                            </li>
                            )
                          }
                        </ul>
                                <form className="comment-text d-flex align-items-center mt-3" action="">
                                  <input type="text" className="form-control rounded" />
                                  <div className="comment-attagement d-flex">
                                    <a href><i className="ri-link mr-3" /></a>
                                    <a href><i className="ri-user-smile-line mr-3" /></a>
                                    <a href><i className="ri-camera-line mr-3" /></a>
                                  </div>
                                </form>
                              </div>
                            </div>
                            )):(
                              <>
                              <h6>Post your first Modd</h6>
                              </>
                            )
                          }
                        </div>
                      </div>
        </Fragment>
    )
}
