import React from 'react'
import Greeting from '../Componants/greeting'
import Cv from '../Componants/cv'
import { getImgs } from '../Api/Blog/BlogApi'
import { useQuery } from 'react-query'




  
const Home = () => {

  const {
    isLoading, 
    isError, 
    error, 
    data
  } = useQuery("img", getImgs)
  
  let content 
  if (isLoading) {
    content = <p> Loading...</p>
  } 
  else if (isError) {
    content = <p> {error.message} </p>}
    
  else { 
    console.log(data)
    content = data.results.find(user => user.id === Number(1))}
    console.log(content)


  return (

    // image is just temp. untill I figure out where to upload the img. like make it an endpoint in the backend
    <div className='home-back' style={{backgroundImage: `url(${content.img})`}}>
      
        <Greeting></Greeting>
        <Cv></Cv>
    </div>
  )
}

export default Home