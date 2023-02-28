import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlog = ( {blog} ) => {
  return (

  <div>


<div>
    
        <div className='blog-post-title-container'>
        <Link className='blog-post-title' to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}> 
          {blog.title}
        </Link>
        </div>
        <div className='blog-post-image' style={{ backgroundImage: `url(${blog.pictures})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",} }>
        </div>
          
    
  
  </div>
  </div>
  )
}

export default SingleBlog