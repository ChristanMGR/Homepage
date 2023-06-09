import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <nav className='navbar'> 
   <h1 className="logo">CRJ</h1>
   
   <div></div>
   <Link to={"/Home"} className='links' style={{color: 'white'}}> Home</Link>
   <Link to={"/Projects"} className='links' style={{color: 'white'}}> Projects</Link>
   <Link to={"/Blog"} className='links' style={{color: 'white'}}> Blog</Link> 
   
 
   
    </nav>
  )
}

export default Navbar