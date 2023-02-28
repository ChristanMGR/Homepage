/* import Project from "../Componants/Project";
import { getProjList } from "../Api/Blog/BlogApi";
import { useInfiniteQuery } from "react-query";
import { useRef, useCallback} from "react";




const ProjectsList = ( {setDataId} ) => {

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


console.log(intObserver)

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
      {content}
      {isFetchingNextPage && <p className="center"> Loading</p>}
      <button> Yo</button>
      
  </div>


  )
}

export default ProjectsList */