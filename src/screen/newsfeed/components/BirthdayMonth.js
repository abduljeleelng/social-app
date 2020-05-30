import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { profilePhoto } from '../../timeline/api';
import profileIcon from '../img/profileIcon.png'

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
                            <Link href={`/${b._id}`} >
                                <li className="d-flex mb-4 align-items-center" key={i}>
                                    <img src={`${profilePhoto}${b._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="" className="rounded-circle img-fluid" />
                                    <div className="stories-data ml-3">
                                        <h5>{b.firstName} {b.lastName}</h5>
                                        <p className="mb-0">this Month</p>
                                    </div>
                                </li>

                            </Link>
                        ))
                        :
                        <li className="d-flex mb-4 align-items-center">
                        <img src={`${profilePhoto}`} onError={i=>i.target.src=`${profileIcon}`} alt="" className="rounded-circle img-fluid" />
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
