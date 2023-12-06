import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const formattedDate = `${day}/ ${month}/ ${year}  `;
  return (
    <div className="main">
    <div className="header">
      <div className="left">
        <div className="logo">
          Dashboard
        </div>
      </div>
      <div className="right">
        <div className="date-time">
          <p className="date"> {formattedDate}</p>
          <p className="time">{formattedTime}</p>
        </div>

      </div>
      <div className="logout">
        <Link to={'/Login'}><button className='logout'>Logout</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Nav