/* import React, { useState } from 'react'
import SingleBlog from './SingleBlog'
import {QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { addPost, getPosts} from '../Api/Blog/BlogApi'


const PostBlogList = () => {

const queryClient = useQueryClient()


//fetching the list data
const {
  isLoading, 
  isError, 
  error, 
  data
} = useQuery("posts", getPosts)






  const addPostMutation = useMutation(addPost, {
      //invalidates the cache and refetch
    onSuccess: () => {
      queryClient.invalidateQueries("posts")}
  })


 
//form for adding new post 
  const startFormData = Object.freeze({
        title: "",
        text: "",
        status:"draft"
  }

  )

// We need two useState here, as it doesn't work if you put picture in the same form for some reason.
const [formData, setFormData] = useState(startFormData)
const [postImage, setPostImage] = useState(null)

 const handleChange = (e) => { 
  if ([e.target.name] == "image") {
    setPostImage({image: e.target.files})
   
  }
  else
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  console.log(postImage)
  console.log(formData)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    // make sure the names are the same as those Django accepts!
    addPostMutation.mutate({title: formData.title, text:formData.text, status:formData.status, pictures: postImage.image[0]})
    setFormData({
        title: "",
        text: "",
        status:"draft",

    })
    setPostImage(null)
  }




const newPostTitle = (
    <form>
    <label htmlFor='new post'>write new post</label>
    <div className='new-post-title'>
      <input
        type="text"
        name='title'
        id = "title"
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
        className='post-title-input'
        
        />
    </div>
    </form>
  )

  const newPostText = (
    <form>
    <label htmlFor='new post'>write new post</label>
    <div className='new-post-text'>
      <textarea
        type="text"
        id = "text"
        name='text'
        value={formData.text}
        onChange={handleChange}
        placeholder="text"
        className='post-text-input'
        />
    </div>
    </form>
  )

const newPostStatus = (
    <form>
    <label htmlFor='new post'>write new post</label>
    <div className='new-post-status'>
      <select type="select" 
      id = "status" 
      name='status' 
      value={formData.status} 
      onChange={handleChange}>

        <option value="draft">Draft</option>
        <option value="public">Public</option>
      </select>
        
    </div>
    </form>
 )

 const newPostImage = (
  <form>
  <div className='new-post-image'>
    <input
      type="file"
      accept='Image'
      name='image'
      id = "image"
      onChange={handleChange}
      className='post-image-input'
    
      
      />
  </div>
  </form>
)
 
let content 
if (isLoading) {
  content = <p> Loading...</p>
} 
else if (isError) {
  content = <p> {error.message} </p>}
  
else { 
  content = data.map((blog) => {
    return(
    <SingleBlog key= {blog.id} blog = {blog}>
    </SingleBlog>
    )
    }) }   

  return (
    <div>
      
        <div>  
            {newPostTitle}
        </div>

        <div>  
            {newPostText}
        </div>

        <div>  
            {newPostStatus}
        </div>

        <div>  
            {newPostImage}
        </div>

        <br></br>
        <button
        type='submit'
        onClick={handleSubmit}
        >Submit</button>
        <br></br>
        <div>  
            {content}
        </div>
        
       
        
          
        
   </div>
  )}

export default PostBlogList */