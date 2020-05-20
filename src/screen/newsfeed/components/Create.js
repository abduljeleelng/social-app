import React from 'react';

export default function Create() {
    return (
<div className="col-sm-12">
  <div id="post-modal-data" className="iq-card iq-card-block iq-card-stretch iq-card-height">
    <div className="iq-card-header d-flex justify-content-between">
      <div className="iq-header-title">
        <h4 className="card-title">Create Post</h4>
      </div>
    </div>
    <div className="iq-card-body" data-toggle="modal" data-target="#post-modal">
      <div className="d-flex align-items-center">
        <div className="user-img">
          <img src="images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle" />
        </div>
        <form className="post-text ml-3 w-100" action="javascript:void();">
          <input type="text" className="form-control rounded" placeholder="Write something here..." />
        </form>
      </div>
      <hr />
      <ul className="post-opt-block d-flex align-items-center list-inline m-0 p-0">
        <li className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/07.png" alt="icon" className="img-fluid" /> Photo/Video</li>
        <li className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/08.png" alt="icon" className="img-fluid" /> Tag Friend</li>
        <li className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/09.png" alt="icon" className="img-fluid" /> Feeling/Activity</li>
        <li className="iq-bg-primary rounded p-2 pointer">
          <div className="iq-card-header-toolbar d-flex align-items-center">
            <div className="dropdown">
              <span className="dropdown-toggle" id="post-option" data-toggle="dropdown">
                <i className="ri-more-fill" />
              </span>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style={{}}>
                <a className="dropdown-item" href="fake">Check in</a>
                <a className="dropdown-item" href="fake">Live Video</a>
                <a className="dropdown-item" href="fake">Gif</a>
                <a className="dropdown-item" href="fake">Watch Party</a>
                <a className="dropdown-item" href="fake">Play with Friend</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="modal fade" id="post-modal" tabIndex={-1} role="dialog" aria-labelledby="post-modalLabel" aria-hidden="true" style={{display: 'none'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
            <button type="button" className="btn btn-secondary" data-dismiss="modal"><i className="ri-close-fill" /></button>
          </div>
          <div className="modal-body">
            <div className="d-flex align-items-center">
              <div className="user-img">
                <img src="images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
              </div>
              <form className="post-text ml-3 w-100" action="javascript:void();">
                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none'}} />
              </form>
            </div>
            <hr />
            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/07.png" alt="icon" className="img-fluid" /> Photo/Video</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/08.png" alt="icon" className="img-fluid" /> Tag Friend</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/09.png" alt="icon" className="img-fluid" /> Feeling/Activity</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/10.png" alt="icon" className="img-fluid" /> Check in</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/11.png" alt="icon" className="img-fluid" /> Live Video</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/12.png" alt="icon" className="img-fluid" /> Gif</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/13.png" alt="icon" className="img-fluid" /> Watch Party</div>
              </li>
              <li className="col-md-6 mb-3">
                <div className="iq-bg-primary rounded p-2 pointer mr-3"><a href="fake" /><img src="images/small/14.png" alt="icon" className="img-fluid" /> Play with Friends</div>
              </li>
            </ul>
            <hr />
            <div className="other-option">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="user-img mr-3">
                    <img src="images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                  </div>
                  <h6>Your Story</h6>
                </div>
                <div className="iq-card-post-toolbar">
                  <div className="dropdown">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                      <span className="btn btn-primary">Friend</span>
                    </span>
                    <div className="dropdown-menu m-0 p-0">
                      <a className="dropdown-item p-3" href="fake">
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-save-line" /></div>
                          <div className="data ml-2">
                            <h6>Public</h6>
                            <p className="mb-0">Anyone on or off Facebook</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href="fake">
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                          <div className="data ml-2">
                            <h6>Friends</h6>
                            <p className="mb-0">Your Friend on facebook</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href="fake">
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                          <div className="data ml-2">
                            <h6>Friends except</h6>
                            <p className="mb-0">Don't show to some friends</p>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item p-3" href="fake">
                        <div className="d-flex align-items-top">
                          <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                          <div className="data ml-2">
                            <h6>Only Me</h6>
                            <p className="mb-0">Only me</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>   
    )
}
