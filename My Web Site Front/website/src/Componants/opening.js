import React, { useState, useEffect } from 'react'

const Opening = () => {

const [showOpeningPage, setShowOpeningpage] = useState(false)

const [showBackPage, setShowBackpage] = useState(true)

const handleOpen = () => {
  setShowOpeningpage(true)
  setShowBackpage(false)
}

useEffect(() => {

  handleOpen()
  
}, [])




  return (
    <div  className={`open-screen-bg ${showBackPage ? 'shown' : 'hidden'}`}>
         <div className="container">
             <div className={`open-screen ${showOpeningPage ? 'shown' : 'hidden'}`}>Christian</div>
             <div className={`open-screen ${showOpeningPage ? 'shown' : 'hidden'}`}>Rasmussen,</div>
             <div className={`open-screen ${showOpeningPage ? 'shown' : 'hidden'}`}>Japan</div> 
         
         </div>
    </div>
  )


}

export default Opening