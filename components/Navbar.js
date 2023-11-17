import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Navbar = ({children}) => {
  const [active , setActive] = useState(false)

  const displayingNav=()=>{
    setActive(!active)
  }
  return (
    <div>
        <div className="navbar">
                <div className="inner">
                    <div className="logo">
                      <Image src="/image/logo.png" width={100} height={70} alt=""/>
                    </div>
                    <div className={active ? 'active navigation':'navigation'}>
                      <ul className='nav-links'>
                        <li><Link href='/' passHref> <div className='anchor'>Overview</div> </Link> </li>
                        <li><Link href='/interior'><div className='anchor'>Interior</div> </Link></li>
                        <li><Link href='/exterior'><div className='anchor'>Exterior</div> </Link></li>
                        <li><Link href='/about'><div className='anchor'>About Us</div> </Link></li>
                        
                      </ul>
                    </div>
                    <div className="hamburger" onClick={()=> displayingNav()}>
                      <Image src="/image/reorder.png" width={50} height={40} alt=""/>
                    </div>
                    
                </div> 
        </div>
        {children}
    </div>      
  )
}

export default Navbar