import React from 'react'

import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

const Resources = () => {
document.title = 'Resources | Tracking Time'
  
  return (
    <div>
      <BlogNav  />
   
    <BlogGrid count={10} />
   
    </div>
  )
}

export default Resources