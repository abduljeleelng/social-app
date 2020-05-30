import React from 'react'
import { Link } from 'react-router-dom';
import { profilePhoto } from '../../timeline/api';
import profileIcon from '../img/profileIcon.png'

export default function Birthday(b) {
    return (
      <div className="iq-card">
      <div className="iq-card-header d-flex justify-content-between">
        <div className="iq-header-title">
          <h4 className="card-title">Today's Birthday</h4>
        </div>
      </div>
      <div className="iq-card-body">
        <ul className="media-story m-0 p-0">
          {
            b.b.length > 0 ? b.b.map((b,i)=>{
            return(
              <Link href={`/${b._id}`} >
              <li className="d-flex mb-4 align-items-center" key={i}>
              <img src={`${profilePhoto}${b._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="" className="rounded-circle img-fluid" />
              <div className="stories-data ml-3">
                <h5> {b.firstName} {b.lastName}</h5>
                <p className="mb-0">Today</p>
              </div>
            </li>
            </Link>
            )})
          :
          <li className="d-flex mb-4 align-items-center">
          <img src={`${profilePhoto}${b._id}`} onError={i=>i.target.src=`${profileIcon}`} alt="" className="rounded-circle img-fluid" />
          <div className="stories-data ml-3">
            <h5>No Birthday today , watch tomorow </h5>
            <p className="mb-0">Today</p>
          </div>
        </li>
          }
        </ul>
      </div>
    </div>
    )
}
