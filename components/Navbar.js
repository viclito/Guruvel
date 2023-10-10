import React from 'react'
import Image from 'next/image'


const Navbar = ({children}) => {
  return (
    <div>
        <div className="navbar">
                <div className="inner">
                    <div className="logo">
                    <Image src="/image/logo.png" width={200} height={70} alt=""/>
                    </div>
                    <ul className='nav-links'>
                    <li>Overview</li>
                    <li>Exterior</li>
                    <li>Interior</li>
                    <li>Our Team</li>
                    <li>Contact us</li>
                    </ul>
                </div> 
        </div>
        {children}
    </div>      
  )
}

export default Navbar