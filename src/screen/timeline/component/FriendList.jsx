import React,{Fragment} from 'react'

export default function FriendList({about}) {
    return (
        <Fragment>
                        <div className="tab-pane fade" id="friends" role="tabpanel">
                <div className="iq-card">
                  <div className="iq-card-body">
                    <h2>Friends</h2>
                    <div className="friend-list-tab mt-2">
                      <ul className="nav nav-pills d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                        <li>
                          <a className="nav-link active" data-toggle="pill" href="#all-friends">All Friends</a>
                        </li>
               {/*         <li>
                          <a className="nav-link" data-toggle="pill" href="#recently-add">Recently Added</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#closefriends">Close friends</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#home">Home/Town</a>
                        </li>
                        <li>
                          <a className="nav-link" data-toggle="pill" href="#following">Following</a>
                        </li>*/}
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="all-friends" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              {
                                about && about.friends > 0 ? about.friends.map((friend,index)=>(
                                  <div className="col-md-6 col-lg-6 mb-3">
                                  <div className="iq-friendlist-block">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">
                                        <a href>
                                          <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                        </a>
                                        <div className="friend-info ml-3">
                                          <h5>Petey Cruiser</h5>
                                          <p className="mb-0">15  friends</p>
                                        </div>
                                      </div>
                                      <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                          <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton01" data-toggle="dropdown" aria-expanded="true" role="button">
                                            <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                          </span>
                                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                            <a className="dropdown-item" href="#">Get Notification</a>
                                            <a className="dropdown-item" href="#">Close Friend</a>
                                            <a className="dropdown-item" href="#">Unfollow</a>
                                            <a className="dropdown-item" href="#">Unfriend</a>
                                            <a className="dropdown-item" href="#">Block</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                )) :
                                <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <div className="friend-info ml-3">
                                        <h5> No friends </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="recently-add" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/07.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Otto Matic</h5>
                                        <p className="mb-0">4  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton31" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton31">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="closefriends" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/19.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Bud Wiser</h5>
                                        <p className="mb-0">32  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton39" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton39">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="home" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/18.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Paul Molive</h5>
                                        <p className="mb-0">14  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton49" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton49">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="following" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-6 mb-3">
                                <div className="iq-friendlist-block">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <a href="#">
                                        <img src="images/user/05.jpg" alt="profile-img" className="img-fluid" />
                                      </a>
                                      <div className="friend-info ml-3">
                                        <h5>Maya Didas</h5>
                                        <p className="mb-0">20  friends</p>
                                      </div>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                      <div className="dropdown">
                                        <span className="dropdown-toggle btn btn-secondary mr-2" id="dropdownMenuButton54" data-toggle="dropdown" aria-expanded="true" role="button">
                                          <i className="ri-check-line mr-1 text-white font-size-16" /> Friend
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton54">
                                          <a className="dropdown-item" href="#">Get Notification</a>
                                          <a className="dropdown-item" href="#">Close Friend</a>
                                          <a className="dropdown-item" href="#">Unfollow</a>
                                          <a className="dropdown-item" href="#">Unfriend</a>
                                          <a className="dropdown-item" href="#">Block</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </Fragment>
    )
}
