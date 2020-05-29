import React, { Fragment } from 'react';

export default function Abouts({about}) {
    return (
        <Fragment>
              <div className="tab-pane fade" id="about" role="tabpanel">
                <div className="iq-card">
                  <div className="iq-card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <ul className="nav nav-pills basic-info-items list-inline d-block p-0 m-0">
                          <li>
                            <a className="nav-link active" data-toggle="pill" href="#basicinfo">Contact and Basic Info</a>
                          </li>
                          <li>
                            <a className="nav-link" data-toggle="pill" href="#work">Work and Education</a>
                          </li>
                          <li>
                            <a className="nav-link" data-toggle="pill" href="#details">Details About You</a>
                          </li>
                          <li>
                            <a className="nav-link" href="/user/setting">Account Seeting </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-9 pl-4">
                        <div className="tab-content">
                          <div className="tab-pane fade active show" id="basicinfo" role="tabpanel">
                            <h4>Contact Information</h4>
                            <hr />
                            <div className="row">
                              <div className="col-3">
                                <h6>Email</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">{about.email}</p>
                              </div>
                              <div className="col-3">
                                <h6>First Name</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">{about.firstName}</p>
                              </div>
                              <div className="col-3">
                                <h6>Last Name</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">{about.lastName}</p>
                              </div>
                              <div className="col-3">
                                <h6>Mobile</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">{about.phone}</p>
                              </div>
                              <div className="col-3">
                                <h6>Address</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">{about.address}</p>
                              </div>
                            </div>
                            <h4 className="mt-3">Basic Information</h4>
                            <hr />
                            <div className="row">
                              <div className="col-3">
                                <h6>Birth Date</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">24 January</p>
                              </div>
                              <div className="col-3">
                                <h6>Birth Year</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">1994</p>
                              </div>
                              <div className="col-3">
                                <h6>Gender</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">{about.gender === "01" ? "Male" :"Female"}</p>
                              </div>
                              <div className="col-3">
                                <h6>interested in</h6>
                              </div>
                              <div className="col-9">
                              <p className="mb-0">{about.interest}</p>
                              </div>
                              <div className="col-3">
                                <h6>language</h6>
                              </div>
                              <div className="col-9">
                                <p className="mb-0">English, French</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="work" role="tabpanel">
                            <h4 className="mb-3">Work</h4>
                            <ul className="suggestions-lists m-0 p-0">
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><i className="ri-add-fill" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>Add Work Place</h6>
                                </div>
                              </li>
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" className="rounded-circle avatar-40" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>Themeforest</h6>
                                  <p className="mb-0">Web Designer</p>
                                </div>
                                <div className="edit-relation"><a href><i className="ri-edit-line mr-2" />Edit</a></div>
                              </li>
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><img src="images/user/02.jpg" alt="story-img" className="rounded-circle avatar-40" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>iqonicdesign</h6>
                                  <p className="mb-0">Web Developer</p>
                                </div>
                                <div className="edit-relation"><a href><i className="ri-edit-line mr-2" />Edit</a></div>
                              </li>
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><img src="images/user/03.jpg" alt="story-img" className="rounded-circle avatar-40" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>W3school</h6>
                                  <p className="mb-0">Designer</p>
                                </div>
                                <div className="edit-relation"><a href><i className="ri-edit-line mr-2" />Edit</a></div>
                              </li>
                            </ul>
                            <h4 className="mb-3">Professional Skills</h4>
                            <ul className="suggestions-lists m-0 p-0">
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><i className="ri-add-fill" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>Add Professional Skills</h6>
                                </div>
                              </li>
                            </ul>
                            <h4 className="mt-3 mb-3">College</h4>
                            <ul className="suggestions-lists m-0 p-0">
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><i className="ri-add-fill" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>Add College</h6>
                                </div>
                              </li>
                              <li className="d-flex mb-4 align-items-center">
                                <div className="user-img img-fluid"><img src="images/user/01.jpg" alt="story-img" className="rounded-circle avatar-40" /></div>
                                <div className="media-support-info ml-3">
                                  <h6>Lorem ipsum</h6>
                                  <p className="mb-0">USA</p>
                                </div>
                                <div className="edit-relation"><a href><i className="ri-edit-line mr-2" />Edit</a></div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane fade" id="details" role="tabpanel">
                            <h4 className="mb-3">About You</h4>
                            <p>{about.about}</p>
                            <h4 className="mt-3 mb-3">Favorite Quotes</h4>
                            <p>{about.status}</p>
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
