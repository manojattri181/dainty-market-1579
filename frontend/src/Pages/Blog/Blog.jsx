import React from 'react'
import Footer from '../Footer/Footer'
import Example from '../Navbar/FinalNavbar'

import BlogGrid from './BlogGrid'
import { BlogNav } from './BlogNav'

const Blog = () => {
document.title = 'Blog | Tracking Time'

  return (
    <div>
      <Example />
    <BlogNav />
    <BlogGrid count={0} />
    <Footer />
    </div> 
  )
}

export default Blog