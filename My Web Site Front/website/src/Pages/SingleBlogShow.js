import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery} from 'react-query'
import { getSinglePost} from '../Api/Blog/BlogApi'
import { Link } from 'react-router-dom'




const SingleBlogShow = ( ) => {

  
const { id } = useParams()

console.log(id)

  
const {
  isLoading, 
  isError, 
  error, 
  data
} = useQuery("post", getSinglePost)

let content 
if (isLoading) {
  content = <p> Loading...</p>
} 
else if (isError) {
  content = <p> {error.message} </p>}
  
else { 
  console.log(data)
  content = data.results.find(user => user.id === Number(id))}
  
      
  

  return (
    
    <div className='blog-intro'>
     
  
        <h1>
          {content.title}
        </h1>
        <div>
          {content.text}
        </div>
        <div>
          {content.date}
        </div>

       {/*  <Link to={`/blog/postedit/${content.id}`} style={{ textDecoration: 'none' }}>  
      <button>edit</button>
      </Link> */}

        </div>
  
  
  )
}

export default SingleBlogShow