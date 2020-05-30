import React, { Fragment } from 'react';

export default function BirthdayMonth(data) {
    return (
        <Fragment>
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Upcoming Birthday this month</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="media-story m-0 p-0">
                    {
                        data.data.length > 0 ? data.data.map((b,i)=>(
                            <a href={`/${b._id}`} >
                                <li className="d-flex mb-4 align-items-center" key={i}>
                                    <img src="images/user/01.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ml-3">
                                        <h5>{b.firstName} {b.lastName}</h5>
                                        <p className="mb-0">this Month</p>
                                    </div>
                                </li>

                            </a>
                        ))
                        :
                        <li className="d-flex mb-4 align-items-center">
                        <img src="" alt="" className="rounded-circle img-fluid" />
                        <div className="stories-data ml-3">
                          <h5>No Birthday party this Month</h5>
                          <p className="mb-0">MOnth</p>
                        </div>
                      </li>
                    }
                </ul>
              </div>
            </div>
        </Fragment>
    )
}
