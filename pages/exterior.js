import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useEffect } from 'react'
import Footer from '@/components/Footer'

const Exterior = () => {
    useEffect(() => {
        const doc = document.documentElement
      
        doc.addEventListener("mousemove", e => {
          doc.style.setProperty("--x", e.clientX + 'px');
          doc.style.setProperty("--y", e.clientY + 'px');
        });

      }, []);
  return (
    <>
        <div className="exterior">
            <Navbar></Navbar>
            <div className="frontpage">
                <h3>CONSTRUCTION</h3>
                <ul>
                        <li datatype=''>
                            <a href="">
                                <div className="img">
                                 <Image src="/image/ext1.jpg" alt="" fill={true}/>
                                </div>
                                <div className='text'>INDUSRIES</div>
                                
                            </a>
                        </li>
                        <li datatype=''>
                            <a href="">
                                
                                <div className="img">
                                 <Image src="/image/ext2.webp" alt="" fill={true}/>
                                </div>
                                <div className="text">COMPANIES</div>
                                
                            </a>
                        </li>
                        <li datatype=''>
                            <a href="">
                                <div className="img">
                                 <Image src="/image/ext3.jpg" alt="" fill={true}/>
                                </div>
                                <div className="text">HOUSE</div>
                                
                            </a>
                        </li>
                        
                </ul>
            </div>

            <div className="cards">


                

                <div className="industries card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/industries1.jpg"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/industries2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>INDUSTRIAL CONSTRUCTION</h1>
                        <p>Our construction company prides itself on pioneering progress in the industry, <br /> creating spaces that inspire and amaze. <br /><br />
                            At our firm, we believe in building with integrity, making us the cornerstone <br /> of successful construction projects.</p>
                    </div>
                </div>


                <div className="companies card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/companies1.png"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/companies2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>COMPANIES CONSTRUCTION</h1>
                        <p>Milestone Builders takes pride in transforming your ideas into concrete reality, <br /> one milestone at a time. <br /><br />
                            We're not just builders; we're visionaries. Choose VisionCraft for construction <br /> that exceeds your imagination.</p>
                    </div>
                </div>

                <div className="house card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/house1.jpg"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/house2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>HOUSE CONSTRUCTION</h1>
                        <p>Your Vision, Our Blueprint: At Pinnacle Properties, we're dedicated to making <br /> your dream home a reality. <br /><br />
                            From Plan to Perfection: Prism House Builders transforms your ideas into <br /> elegant living spaces</p>
                    </div>
                </div>

            </div>


        </div>
        <Footer/>
        
    </>
  )
}

export default Exterior