
import Project from '../Componants/Project'
import ProjectEx from '../Componants/ProjectEx'
import { ExcerptContext } from '../Contex/DetailsContext'
import { useState, useEffect } from 'react'
import { getProjList } from "../Api/Blog/BlogApi";
import { useInfiniteQuery } from "react-query";
import { useRef, useCallback} from "react";




const Projects = () => {

const [excerpt, setExcerpt] = useState(["Welcome",  "please hover the cursor over any project you would like to view"]);
const [SlideIn, setSlideIn] = useState(true);

const handleOpen = () => {

  setSlideIn(false)
}

useEffect(() => {

  handleOpen()
  
}, [])



{
  const {
      data, 
      status,
      error,
      hasNextPage, 
      fetchNextPage,
      isFetchingNextPage,
    } = useInfiniteQuery("project", ({pageParam = 1}) => getProjList(pageParam), 
    {
      getNextPageParam: (lastPage, allPages) => 
      { 
        return lastPage.results.length >= 3 ? allPages[0].current_page_number + 1 : undefined
      }})
  
  

  const intObserver = useRef()
  const lastProjRef = useCallback(project => {
  
    if (isFetchingNextPage) return 
  
   
    if (intObserver.current) intObserver.current.disconnect()
  
  intObserver.current = new IntersectionObserver(entries => {
      if (entries.isIntersecting && hasNextPage) {
        console.log("close to last post")
        fetchNextPage()
      }
    })
    
   
  
    if (project) intObserver.current.observe(project)
      }, [isFetchingNextPage, fetchNextPage, hasNextPage])
  
  
  if (status === "error") return <p className="center"> Error:{error.message}</p>
  
  
  console.log(intObserver.current)
  
const content =
   data?.pages.map(pg => {
      return pg.results.map((project, i) => {
  
      if (pg.results.length === i + 1) { 
        return<Project ref={lastProjRef} key={project.id} project = {project} />
        } 
      
      return <Project key={project.id} project = {project} />
          }) 
      })
  



  return (
    <div>
        <div className="projects">

            <ExcerptContext.Provider value={ {excerpt, setExcerpt} }>
            <div className={`projects-list ${SlideIn ? 'start' : 'finish'}`}>
                {/* <ProjectsList/> */}
                {content}
                {isFetchingNextPage && <p className="center"> Loading</p>}
                <button> Yo</button>
              </div>

                <div className={`projects-single ${SlideIn ? 'start' : 'finish'}`}>
                <ProjectEx/>
                </div> 
                </ExcerptContext.Provider>  
          </div>
        
    </div>
  )
}}

export default Projects