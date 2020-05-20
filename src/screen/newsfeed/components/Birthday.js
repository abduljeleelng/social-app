import React from 'react'

export default function Birthday() {
    return (
<div className="iq-card">
  <div className="iq-card-header d-flex justify-content-between">
    <div className="iq-header-title">
      <h4 className="card-title">Upcoming Birthday</h4>
    </div>
  </div>
  <div className="iq-card-body">
    <ul className="media-story m-0 p-0">
      <li className="d-flex mb-4 align-items-center">
        <img src="images/user/01.jpg" alt="story-img" className="rounded-circle img-fluid" />
        <div className="stories-data ml-3">
          <h5>Anna Sthesia</h5>
          <p className="mb-0">Today</p>
        </div>
      </li>
      <li className="d-flex align-items-center">
        <img src="images/user/02.jpg" alt="story-img" className="rounded-circle img-fluid" />
        <div className="stories-data ml-3">
          <h5>Paul Molive</h5>
          <p className="mb-0">Tomorrow</p>
        </div>
      </li>
    </ul>
  </div>
</div>
    )
}
