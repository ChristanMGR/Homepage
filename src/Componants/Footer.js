import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
        

            <div className='logo'>
                    CRJ
            </div>

            <div className='links'>

                <div className='Projects'>
                <Link to={"/Home" } style={{color: 'white'}}>Home</Link>
                </div>

                <div className='Projects'>
                <Link to={"/Projects" } style={{color: 'white'}}>Projects</Link>
                </div>

                <div className='Blog'>
                <Link to={"/Blog" } style={{color: 'white'}}>Blog</Link>
                </div>

                
            </div>



            <div className='contact'>
                <div>
                    Phone: 
                    080-7746-8948
                </div>

                <div>
                    E-mail: Milsoe.christian@gmail.com
                </div>

            <div className='facebook'>
                Facebook: Link
            </div>
            </div>

            
            
            
            <div className='Quotes'>
                Changing quotes
            </div>

            


        </div>

    </div>
  )
}

export default Footer