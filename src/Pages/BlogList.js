import React, { useState } from 'react'
import SingleBlog from './SingleBlog'
import { useQuery } from 'react-query'
import { getPosts } from '../Api/Blog/BlogApi'

const BlogList = () => {

const [pageNumber, setPageNumber] = useState(1)
const [cards, setCards] = useState(false)


//fetching the list data
const {
  isLoading, 
  isError, 
  error, 
  data, 
} = useQuery(["posts", pageNumber], ()=> getPosts(pageNumber))






  

let content, pages 
if (isLoading) {
  content = <p> Loading...</p>
} 
else if (isError) {
  content = <p> {error.message} </p>}
  
else { 
  // because of Djanga pagination, I have to use data.results to get the data
  pages = Number(data.total_pages)
  content = data.results.map((blog) => {
    return(
    <SingleBlog key= {blog.id} blog = {blog}/>
    )
    })}   


  return (
    <div className='blog-page'>
      
 <div className='blog-intro'> 
 <h1>私のブログへようこそ！。</h1> 
 <h2>ここでは面白い話やデンマークについて紹介したいと思います。よろしくお願いします</h2>
 <div className='blog-intro-photo'></div>
 <br></br>
 
 </div>
      {/* Since i have 3 posts per page in this api call, a put them in individual divs to make the card effect. Also, order has  been reversed to avoid the front card being blank */}
        <div className= "blog-container">  
          <div className={`blog-list-item ${cards ? 'open' : 'close'}`}>
              {content[2]}
          </div>
          <div className={`blog-list-item ${cards ? 'open' : 'close'}`}>  
              {content[1]}
          </div>
          <div className={`blog-list-item ${cards ? 'open' : 'close'}`}>  
              {content[0]}
          </div>
        </div>


        <div className='blog-button-back'>

          <button className={`blog-button ${cards ? 'close' : 'open'}`} onClick={()=> setCards(true)} >開</button>
          <button className={`blog-button ${cards ? 'open' : 'close'}`} onClick={()=> setCards(false)} >閉</button>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div>
          <button className='blog-button' onClick={()=> setPageNumber(1)} disabled={pageNumber === 1} > ページ１ </button>
          <button className='blog-button' onClick={()=> setPageNumber(page => page - 1)} disabled={pageNumber === 1} >戻</button>
          <button className='blog-button' onClick={()=> setPageNumber(page => page + 1)} disabled={pageNumber === pages} >次</button>
          <button className='blog-button' onClick={()=> setPageNumber(pages)} disabled={pageNumber === pages} >最後</button>
          
        </div>

        </div>
          
        
   </div>
  )}

export default BlogList