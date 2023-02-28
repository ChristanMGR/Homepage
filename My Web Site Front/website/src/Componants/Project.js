import React from 'react'
import { useContext} from 'react'
import { ExcerptContext } from '../Contex/DetailsContext';


// Notice that the forwardRef paranthesis clases all the way in the end for the component
const Project = React.forwardRef(({project}, ref)  => {

const {excerpt, setExcerpt} = useContext(ExcerptContext)

function HandleMouseEnter (e){
    setExcerpt([project.pictures, project.title, project.explaination, project.link, project.link_2])

    }
  
const projectBody = (
        <>
        <div className='project-box' onMouseEnter={HandleMouseEnter}>
        <h1>
        {project.title}
        </h1>

        <div className='project-date'>
        {project.excerpt} 
        </div>

        <div className='project-link'>
        {project.date} 
        </div>
        </div>

        <br></br>
        </>
        )
  
const content = ref 
? <div ref = {ref}> {projectBody}</div>
: <div> {projectBody}</div>


return content
/* <div ref = {ref}>
<div className='project-box' onMouseEnter={HandleMouseEnter}>
<h1>
{project.title}
</h1>

<div className='project-date'>
{project.excerpt} 
</div>

<div className='project-link'>
{project.date} 
</div>
</div>

<br></br>
</div>) */

})


export default Project
