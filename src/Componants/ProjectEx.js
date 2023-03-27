import React from 'react'
import { useContext } from 'react';
import { ExcerptContext } from '../Contex/DetailsContext';

const ProjectEx = ( ) => {

  const {excerpt} = useContext(ExcerptContext)

  
  return (
   
    
    <div>
        <h1>
        {excerpt[1]}
        </h1>
        <section className='project-text'>
        {excerpt[2]}
        </section>
        <br></br>
        <div>
        {excerpt[3]}
        </div>
        {/* using dynamic string to get the image from the context works because it is the first element and therefore will always be split on the comma */}
        <img src= {`${excerpt}`.split(",")[0]} className="project-img">
        
        </img>
        
    </div>
    
  )
}

export default ProjectEx