import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
        <div className="about">
            
          <Navbar/>
          <div className="innerabout">
            <h1>Guruvel Associates</h1>
            <h2>Founder : <span>Guruvel</span></h2>

            <div className="siva">
              <div className="left">
                <div className="img">
                  <Image src="/image/shiva.jpeg" alt='' fill={true}/>
                </div>
              </div>
              <div className="right">
                <div className="name">Managing Director : <span>Siva Guruvel</span> </div>
              </div>
            </div>
            <div className="sathish">
              <div className="left">
                <div className="img">
                  <Image src="/image/sathish.jpeg" alt='' fill={true}/>
                </div>
              </div>
              <div className="right">
                <div className="name">Strucrural Designer : <span>Satish</span> </div>
              </div>
            </div>


          </div>
          <Footer/>
            
        </div>
    </>
  )
}

export default About