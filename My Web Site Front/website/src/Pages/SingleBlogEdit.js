/* import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import {QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { getSinglePost, updatePost, deletePost } from '../Api/Blog/BlogApi'




const SingleBlogEdit = ( ) => {



const queryClient = useQueryClient()

  
  const { id } = useParams()

  
const {
  isLoading, 
  isError, 
  error, 
  data
} = useQuery("posts", getSinglePost)


let content 
if (isLoading) {
  content = <p> Loading...</p>
} 
else if (isError) {
  content = <p> {error.message} </p>}
  
else { 
  content = data.results.find(user => user.id === Number(id))

}




const updatePostMutation = useMutation(updatePost, {
    //invalidates the cache and refetch
  onSuccess: () => {
    queryClient.invalidateQueries("data")
  }
})
const deletePostMutation = useMutation(deletePost, {
    //invalidates the cache and refetch
  onSuccess: () => {
    queryClient.invalidateQueries("data")
  }
})


//form for adding new post 
const startFormData = Object.freeze({
      title: content.title,
      text: content.text,
      status: content.status,
      id: content.id
})


const [formData, setFormData] = useState(startFormData)



const handleChange = (e) => { 
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  })}


const handleSubmit = (e) => {
  e.preventDefault()
  updatePostMutation.mutate({ title: formData.title, text:formData.text, status:formData.status, id:formData.id})
  setFormData({
    title: content.title,
    text: content.text,
    status: content.status,
    id: content.id,
  })

  console.log(startFormData)
}

  



  const editPostTitle = (
    <form>
    <div className='new-post-title'>
      <input
        type="text"
        name='title'
        id = "title"
        value={formData.title}
        onChange={handleChange}
        className='post-title-input'
        
        />
    </div>
    </form>
  )

  const editPostText = (
    <form>
    <div className='new-post-text'>
      <textarea
        type="text"
        id = "text"
        name='text'
        value={formData.text}
        onChange={handleChange}
        className='post-text-input'
        />
    </div>
    </form>
  )

const editPostStatus = (
    <form>
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




      
  

  return (
    
    <div className='post-edit'>
     

        <div>
          {editPostTitle}
        </div>
        <br></br>
        <div>
          {editPostText}
        </div>
        <br></br>
        <div>
          {editPostStatus}
        </div>

        <br></br>
        <button
        className='delete' 
        onClick={() => deletePostMutation.mutate({
            id: content.id})}
    

        > delete</button>
       

        <br></br>
        <button
        type='submit'
        onClick={handleSubmit}
        >Submit</button>
        
      

        </div>
  
  
  )
}

export default SingleBlogEdit */