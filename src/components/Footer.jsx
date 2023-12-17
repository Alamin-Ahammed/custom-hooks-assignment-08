import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Comments from './Comments'

export default function Footer() {
  return (
    <div className='footer'>
        <h1>Alamin Ahammed</h1>
        <ul className="flex navbar jc-center">
        <li style={{textDecoration: 'underline'}}>
          <NavLink to="/" element={<Home />}>
            Home
          </NavLink>
        </li>
        <li style={{textDecoration: 'underline'}}>
          <NavLink to="/comments" element={<Comments />}>
            Comments
          </NavLink>
        </li>
      </ul>
      <small>Copyright © All Right Reserved.</small>
    </div>
  )
}
