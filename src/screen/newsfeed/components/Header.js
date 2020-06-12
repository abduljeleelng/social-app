import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import profileIcon from '../img/profileIcon.png'
//import { photoAPI } from '../api';
import { profilePhoto } from '../../timeline/api';
import {signout} from '../../../auth'
//import { Container, Row, Col, Input } from 'reactstrap'

export default function HomeHeader({user}) {
  const [redirect, setRedirect] = useState(false);
  //console.log(JSON.stringify({user,profile:"user details"}));
  if(redirect) return <Redirect to="/" />;
    return (
      <Fragment>
        {profilePhoto}
<div className="iq-top-navbar">
  <div className="iq-navbar-custom">
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <div className="iq-navbar-logo d-flex justify-content-between">
        <Link to="/">
          {/*<img src="images/logo.png" className="img-fluid" alt="iamacatholic.org" />*/}
          <span>iamacatholic.org</span>
        </Link>
        <div className="iq-menu-bt align-self-center">
        </div>
      </div>
      <div className="iq-search-bar">
        <form action="face.com" className="searchbox">
          <input type="text" className="text search-input" placeholder="Type here to search..." />
          <i className="search-link"><i className="ri-search-line" /></i>
        </form>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
        <i className="ri-menu-3-line" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-list">
          <li>
            <Link to={`/${user._id}`} className="iq-waves-effect d-flex align-items-center">
              <img src={`${profilePhoto}${user._id}`} onError={i=>i.target.src=`${profileIcon}`} className="img-fluid rounded-circle mr-3" alt="user" />
              <div className="caption">
                <h6 className="mb-0 line-height">{user.firstName}  {user.lastName}</h6>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/user/setting" className="iq-waves-effect d-flex align-items-center">
              <i className="ri-home-line" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="search-toggle iq-waves-effect" to="/"><i className="ri-group-line" /></Link>
            <div className="iq-sub-dropdown iq-sub-dropdown-large">
              <div className="iq-card shadow-none m-0">
                <div className="iq-card-body p-0 ">
                  <div className="bg-primary p-3">
                    <h5 className="mb-0 text-white">Friend Request <small className="badge  badge-light float-right pt-1"> 30 </small></h5>
                  </div>

               {/*   <div className="iq-friend-request">
                    <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img className="avatar-40 rounded" src="images/user/01.jpg" alt="fake" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="mb-0 ">Jaques Amole</h6>
                          <p className="mb-0">40  friends</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <i  className="mr-3 btn btn-primary rounded">Confirm</i>
                        <i  className="mr-3 btn btn-secondary rounded">Delete Request</i>
                      </div>
                    </div>
                  </div>*/}
          
                  <div className="text-center">
                    <Link to="/" className="mr-3 btn text-primary">View More Request</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="fake" className="search-toggle iq-waves-effect">
              <div id="lottie-beil" />
              <span className="bg-danger dots" />
            </a>
            <div className="iq-sub-dropdown">
              <div className="iq-card shadow-none m-0">
                <div className="iq-card-body p-0 ">
                  <div className="bg-primary p-3">
                    <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">30</small></h5>
                  </div>
                  <Link to={`/${user._id}`} className="iq-sub-card">
                    <div className="media align-items-center">
                      <div className="">
                        <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">{user.firstName}</h6>
                        <small className="float-right font-size-12">Just Now</small>
                        <p className="mb-0">95 MB</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="fa" className="search-toggle iq-waves-effect">
              <div id="lottie-mail" />
              <span className="bg-primary count-mail" />
            </a>
            <div className="iq-sub-dropdown">
              <div className="iq-card shadow-none m-0">
                <div className="iq-card-body p-0 ">
                  <div className="bg-primary p-3">
                    <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>
                  </div>
                  <Link to="/" className="iq-sub-card">
                    <div className="media align-items-center">
                      <div className="">
                        <img className="avatar-40 rounded" src="images/user/01.jpg" alt=""/>
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">{user.firstName}</h6>
                        <small className="float-left font-size-12">13 Jun</small>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul className="navbar-list">
          <li>
            <a href className="search-toggle iq-waves-effect d-flex align-items-center">
              <i className="ri-arrow-down-s-fill" />
            </a>
            <div className="iq-sub-dropdown iq-user-dropdown">
              <div className="iq-card shadow-none m-0">
                <div className="iq-card-body p-0 ">
                  <div className="bg-primary p-3 line-height">
                    <h5 className="mb-0 text-white line-height">Hello {user.firstName}</h5>
                    <span className="text-white font-size-12">Available</span>
                  </div>
                  <Link to={`/${user._id}`} className="iq-sub-card iq-bg-primary-hover">
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-primary">
                        <i className="ri-file-user-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">My Profile</h6>
                       {/* <p className="mb-0 font-size-12">View personal profile details.</p>*/}
                      </div>
                    </div>
                  </Link>
                  <Link to="/user/setting" className="iq-sub-card iq-bg-warning-hover">
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-warning">
                        <i className="ri-profile-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">Edit Profile</h6>
                        <p className="mb-0 font-size-12">Modify your personal details.</p>
                      </div>
                    </div>
                  </Link>
              { /*
                 <a href="account" className="iq-sub-card iq-bg-info-hover">
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-info">
                        <i className="ri-account-box-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">Account settings</h6>
                        <p className="mb-0 font-size-12">Manage your account parameters.</p>
                      </div>
                    </div>
                  </a>
                  <a href="privacy" className="iq-sub-card iq-bg-danger-hover">
                    <div className="media align-items-center">
                      <div className="rounded iq-card-icon iq-bg-danger">
                        <i className="ri-lock-line" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="mb-0 ">Privacy Settings</h6>
                        <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                      </div>
                    </div>
                  </a>
                  */}
                  <div className="d-inline-block w-100 text-center p-3">
                    <button className="bg-primary iq-sign-btn" onClick={signout(()=>{setRedirect(false) })} >Sign out<i className="ri-login-box-line ml-2" /></button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
      </Fragment>
    )
}
