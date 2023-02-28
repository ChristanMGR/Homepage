import React from 'react'
import { useRef, useEffect, useState } from 'react'

const Cv = () => {

  const firstRef = useRef();
  const secondRef = useRef();
  const [elelmentIsVisable, setElmentIsVisable] = useState()


useEffect(() => {
  const observer = new IntersectionObserver( (entries) => {
  const entry1 = entries[0]

  setElmentIsVisable(entry1.isIntersecting)
  
})
observer.observe(firstRef.current)

  }, [])

  

    


  return (
    <div className='main-container'>

        <div className='cv-box'>
           

        

            <div className={`basic-info ${elelmentIsVisable ? 'shown' : 'hidden'}`}>
            <h1> Basic info</h1>

            <section>
                <h3>Name</h3> Christian Milsoe Granberg Rasmussen
                <h3>Born</h3> 10th December, 1989
                <br></br>
                
                
            </section>
            
            </div>

            <div className={`education-info ${elelmentIsVisable ? 'shown' : 'hidden'}`}>
            
              <h1> Educational History</h1>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <div ref={firstRef} className='edu-writing'>
                <h3>Highschool:</h3> Nyborg Gymnaium, Denmark (2006-2009) Major in Maths an physics
              </div>

              <br></br>

              <div className='edu-writing'>
                <h3>University: </h3> <div >Aarhus University, Denmark (2010-2016) Major in Japanese studies and Minor in Business</div>
              </div>

              <br></br>

              <div className='edu-writing'>
                <h3>Mext Scholarship:</h3> Nagasaki University, Denmark (2015-2016) A one year scholarship where I studied Japanse and Business
              </div>

          
            </div>


              
            <div className= "work-info">
            <h1> Work info</h1>
            <section>
                <h3>2016-2018</h3> Kindergarten Teacher at "Valhalla Kindergarten", Denmark
                <h3>2018-2023</h3> Assistant Language Teacher at "Sapporo Eastern Business Highschool"
            </section>
            </div>


            <div className="other-experience">
            <h1>Other Experience</h1>
            <section>
                <h3>2007-2015</h3> Volunteer Karate Instructor at Nyborg Karate Club
                <h3>2013-2014</h3> Volunteer at Sapporo kyoudou fukushikai
            </section>


            </div>
            
            <div className={`skills-info ${elelmentIsVisable ? 'shown' : 'hidden'}`}>
              <h1> Skills </h1>
              <section>

              <h3>- Knowledge of Japan and the international environment.  </h3>
              <h3>- Ability to work with and understand different types of people. </h3> 
              <h3>- Problem solving and reflection.</h3> 

              </section>
            </div>


            <div ref={secondRef} className='something-else'>
              
            <h1> Languages</h1>
            <section>
                <h3>English</h3> 
                <h3>Japanese</h3> 
                <h3>Danish</h3> 
            </section>

            <h1> Programming</h1>
            <section>
                <h3>Python</h3> 
                <h3>Django</h3> 
                <h3>React</h3> 
            </section>
            </div>
           
            
        </div>
    </div>
  )
}

export default Cv