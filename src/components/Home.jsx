import React from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'

export default function Home() {
  return (
    <div className='home'>
        <h1>Welcome here</h1>
        <h3>Here We have discussed how to use Custom Hooks in React</h3>
        <h4>Go to comments section to see details.</h4>
        <button><Link to='/comments' element={<Comments />}>Go To Comments</Link></button>
    </div>
  )
}
