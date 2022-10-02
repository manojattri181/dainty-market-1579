import React from 'react'
import {Link} from 'react-router-dom'
import './blog.css'
export const BlogNav = () => {
  return (
    <div className=' flex gap-8 m-auto my-6 w-1/2 font-semibold text-gray-400'>
      <Link className='expand' to='/blog'>BLOG</Link>
      <Link className='expand' >PRODUCTIVITY WORK</Link>
      <Link className='expand' >REMOTE WORK</Link>
      <Link className='expand' >BEST PRACTICES</Link>
      <Link className='expand' >RESOURCES</Link>

    </div>
  )
}
