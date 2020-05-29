import React,{Fragment} from 'react';
import cover from '../img/cover.jpg';
import profile from '../img/profile.png';

export default function Cover({user,posts}) {
    return (
      <Fragment>
            <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-body profile-page p-0">
                <div className="profile-header">
                  <div className="cover-container">
                    <img src={``} onError={i=>i.target.src=`${cover}`} alt="cover" className="rounded img-fluid" />
                    <ul className="header-nav d-flex flex-wrap justify-end p-0 m-0">
                      <li><i className="ri-pencil-line" /></li>
                      <li><i className="ri-settings-4-line" /></li>
                    </ul>
                  </div>
                  <div className="user-detail text-center mb-3">
                    <div className="profile-img">
                      <img src={``} onError={i=>i.target.src=`${profile}`} alt="user" className="avatar-130 img-fluid" />
                    </div>
                    <div className="profile-detail">
                      <h3 className>{user.firstName}  {user.lastName}</h3>
                    </div>
                  </div>
                  <div className="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
                    <div className="social-links">
                    </div>
                    <div className="social-info">
                      <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                        <li className="text-center pl-3">
                          <h6>Posts</h6>
                           <p className="mb-0">{posts.length}</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>friends</h6>
                           <p className="mb-0">{user && user.friends.length}</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>Followers</h6>
                          <p className="mb-0">{user && user.followers.length}</p>
                        </li>
                        <li className="text-center pl-3">
                          <h6>Following</h6>
                          <p className="mb-0">{user && user.following.length}</p>
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
      </Fragment>
    )
}
