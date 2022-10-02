import React from 'react'

import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

const Practices = () => {
  document.title = 'Practices | Tracking Time'

  return (
    <div>
      <BlogNav  />
    
    <BlogGrid count={25} />
    
    </div>
  )
}

export default Practices