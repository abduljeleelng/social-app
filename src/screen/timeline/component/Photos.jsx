import React, { Fragment } from 'react'

export default function Photos({photo}) {
    return (
        <Fragment>
                <div className="tab-pane fade" id="photos" role="tabpanel">
                <div className="iq-card">
                  <div className="iq-card-body">
                    <h2>Photos</h2>
                    <div className="friend-list-tab mt-2">
                      <ul className="nav nav-pills d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                        <li>
                          <a className="nav-link active" data-toggle="pill" href="#photosofyou">Photos of You</a>
                        </li>
                        {/*
                          <li>
                          <a className="nav-link" data-toggle="pill" href="#your-photos">Your Photos</a>
                        </li>*/}
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="photosofyou" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-3 mb-3">
                                <div className="user-images position-relative overflow-hidden">
                                  <h2> No Photo </h2>
{  /*                                <a href>
                                    <img src="images/page-img/51.jpg" className="img-fluid rounded" alt="Responsive" />
                                  </a>
                                  <div className="image-hover-data">
                                    <div className="product-elements-icon">
                                      <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                        <li><a href className="pr-3 text-white"> 60 <i className="ri-thumb-up-line" /> </a></li>
                                        <li><a href className="pr-3 text-white"> 30 <i className="ri-chat-3-line" /> </a></li>
                                        <li><a href className="pr-3 text-white"> 10 <i className="ri-share-forward-line" /> </a></li>
                                      </ul>
                                    </div>
                                  </div>
                                  <a href className="image-edit-btn" data-toggle="tooltip" data-placement="top" title data-original-title="Edit or Remove"><i className="ri-edit-2-fill" /></a>
                                  */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="your-photos" role="tabpanel">
                          <div className="iq-card-body p-0">
                            <div className="row">
                              <div className="col-md-6 col-lg-3 mb-3">
                                <div className="user-images position-relative overflow-hidden">
                                  <a href>
                                    <img src="images/page-img/51.jpg" className="img-fluid rounded" alt="Responsive" />
                                  </a>
                                  <div className="image-hover-data">
                                    <div className="product-elements-icon">
                                      <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                        <li><a href className="pr-3 text-white"> 60 <i className="ri-thumb-up-line" /> </a></li>
                                        <li><a href className="pr-3 text-white"> 30 <i className="ri-chat-3-line" /> </a></li>
                                        <li><a href className="pr-3 text-white"> 10 <i className="ri-share-forward-line" /> </a></li>
                                      </ul>
                                    </div>
                                  </div>
                                  <a href className="image-edit-btn" data-toggle="tooltip" data-placement="top" title data-original-title="Edit or Remove"><i className="ri-edit-2-fill" /></a>
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
