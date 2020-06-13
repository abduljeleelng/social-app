import React, { Fragment } from 'react'

export default function TimeLineEvent({events,photos}) {
    return (
        <Fragment>
                    <div className="col-lg-4">
                      <div className="iq-card">
                        <div className="iq-card-body">
                          <a href><span className="badge badge-pill badge-primary font-weight-normal ml-auto mr-1"><i className="ri-star-line" /></span> {events.length} Events for you</a>
                        </div>
                      </div>
                      <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                          <div className="iq-header-title">
                            <h4 className="card-title">Life Event</h4>
                          </div>
                          <div className="iq-card-header-toolbar d-flex align-items-center">
                            <p className="m-0"><a href="javacsript:void();"> Create </a></p>
                          </div>
                        </div>
                        <div className="iq-card-body">
                          <div className="row">
                            {
                              events.length > 0 ? events.map((event,i)=>(
                                <div className="col-sm-12">
                                  <div className="event-post position-relative">
                                    <a href><img src={event.image} alt="" className="img-fluid rounded" /></a>
                                    <div className="job-icon-position">
                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle"><i className="ri-briefcase-line" /></div>
                                    </div>
                                    <div className="iq-card-body text-center p-2">
                                      <h5>{event.title}</h5>
                                      <p>{event.start}</p>
                                    </div>
                                  </div>
                              </div>
                              ))
                              :(
                                <div className="col-sm-12">
                                  <div className="event-post position-relative">
                                    <a href><img src="images/page-img/07.jpg" alt="" className="img-fluid rounded" /></a>
                                    <div className="job-icon-position">
                                      <div className="job-icon bg-primary p-2 d-inline-block rounded-circle"><i className="ri-briefcase-line" /></div>
                                    </div>
                                    <div className="iq-card-body text-center p-2">
                                      <h5>You don't have any event, create an event </h5>
                                    </div>
                                  </div>
                              </div>
                              )
                            }
                       
                          </div>
                        </div>
                      </div>
                      <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                          <div className="iq-header-title">
                            <h4 className="card-title">Photos</h4>
                          </div>
                          <div className="iq-card-header-toolbar d-flex align-items-center">
                            {/*<p className="m-0"><a href="javacsript:void();">Add Photo </a></p>*/}
                          </div>
                        </div>
                        <div className="iq-card-body">
                          {
                            
                              <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                                {
                                  photos.length >0 ? photos.map((photo,i)=>(
                                    <li className="col-md-4 col-6 pl-2 pr-0 pb-3" key={i}><a href><img src={photo.photo} alt="" className="img-fluid" /></a></li>
                                  ))
                                  :(
                                    <li className="col-md-4 col-6 pl-2 pr-0 pb-3">No Image here</li>
                                  )
                                }
                              </ul>
                          }
                     
                        </div>
                      </div>
                      {/*
                      <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                          <div className="iq-header-title">
                            <h4 className="card-title">Friends</h4>
                          </div>
                          <div className="iq-card-header-toolbar d-flex align-items-center">
                            <p className="m-0"><a href="javacsript:void();">Add New </a></p>
                          </div>
                        </div>
                        <div className="iq-card-body">
                          <ul className="profile-img-gallary d-flex flex-wrap p-0 m-0">
                            <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                              <a href="javascript:void();">
                                <img src="images/user/05.jpg" alt="gallary-image" className="img-fluid" /></a>
                              <h6 className="mt-2">Anna Rexia</h6>
                            </li>
                            
                            <li className="col-md-4 col-6 pl-2 pr-0 pb-3">
                              <a href><img src="images/user/06.jpg" alt="gallary" className="img-fluid" /></a>
                              <h6 className="mt-2">Tara Zona</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                      */}
                    </div>
        </Fragment>
    )
}
