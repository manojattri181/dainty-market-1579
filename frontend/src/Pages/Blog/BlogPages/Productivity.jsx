import React from 'react'

import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

export const Productivity = () => {
  document.title = 'Productivity | Tracking Time'

  return (
    <div>
      <BlogNav  />
    
    <BlogGrid count={40} />
   
    </div>
  )
}
