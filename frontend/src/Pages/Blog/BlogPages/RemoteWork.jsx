import React from 'react'

import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

const RemoteWork = () => {
document.title = 'Remote Work | Tracking Time'
  
  return (
    <div>
      <BlogNav  />
    <BlogGrid count={50} />
    
    </div>
  )
}

export default RemoteWork