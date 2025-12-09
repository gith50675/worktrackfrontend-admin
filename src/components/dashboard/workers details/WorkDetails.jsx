import React from 'react'
import "./WorkDetails.css"
import { NavLink } from "react-router-dom"

const WorkDetails = () => {
  const workdetail = [
    { icon: "dates icon.svg", name: "John",   hour: "6h 48m", time: "8h",  fill: "85%" },
    { icon: "dates icon.svg", name: "Jessica",hour: "6h 20m", time: "8h",  fill: "65%" },
    { icon: "dates icon.svg", name: "David",  hour: "6h 11m", time: "8h",  fill: "80%" },
  ]

  return (
    <div className="work-detail-container">
      <div className="detail-head">
        <div className="head-left-side">
          <div className="icon-at">
            <img src="\Group.svg" alt="At work" />
            <p>At Work</p>
          </div>
          <NavLink to="/workersdetail">
            <div className="viewall-head">View all</div>
          </NavLink>
        </div>

        <div className="head-right-side">
          <img src="\dates icon.svg" alt="date" />
          <p>Today</p>
        </div>
      </div>

      <div className="user-atwork-head">
        <div className="user-head">User</div>
        <div className="at-work-head">At Work</div>
      </div>

      {workdetail.map((row, index) => (
        <div className="user-work" key={index}>
          <div className="left-user">
            <div className="user">
              <img src="\user icon.svg" alt={row.name} />
              <p>{row.name}</p>
            </div>
          </div>

          <div className='right-atwork'>
            <div className="time-hour">
              <p>{row.hour}</p>
              <div className="bar-time">
                <div className="bar-container">
                  {/* violet progress fill */}
                  <div className="bar-box" style={{ width: row.fill }} />
                </div>
                <div className='bar-value'>{row.time}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkDetails
