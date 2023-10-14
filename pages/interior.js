import Navbar from '@/components/Navbar'

import Image from 'next/image'
import { useEffect } from 'react'
import Footer from '@/components/Footer'

const Interior = () => {
    useEffect(() => {
        const doc = document.documentElement

      
        doc.addEventListener("mousemove", e => {
          doc.style.setProperty("--x", e.clientX + 'px');
          doc.style.setProperty("--y", e.clientY + 'px');
        });
      }, []);
    
  return (
    <>
        <div className="interior">
            <Navbar></Navbar>
            <div className="frontpage">
                <h3>Interior Designs</h3>
                <ul>
                        <li datatype=''>
                            <a href="">
                                <div className="img">
                                 <Image src="/image/int1.jpg" alt="" fill={true}/>
                                </div>
                                <div className='text'>CORPORATE DESIGN</div>
                                
                            </a>
                        </li>
                        <li datatype=''>
                            <a href="">
                                
                                <div className="img">
                                 <Image src="/image/int2.jpg" alt="" fill={true}/>
                                </div>
                                <div className="text">OFFICE DESIGN</div>
                                
                            </a>
                        </li>
                        <li datatype=''>
                            <a href="">
                                <div className="img">
                                 <Image src="/image/int3.webp" alt="" fill={true}/>
                                </div>
                                <div className="text">SHOWROOM DESIGN</div>
                                
                            </a>
                        </li>
                        <li datatype=''>
                            <a href="">
                                <div className="img">
                                 <Image src="/image/int4.jpg" alt="" fill={true}/>
                                </div>
                                <div className="text">VILLA DESIGN</div>
                                
                            </a>
                        </li>
                </ul>
            </div>

            <div className="cards">

                <div className="corporate card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/corp1.jpg"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/corp2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>Corporate Interior</h1>
                        <p>Elevate your workspace with our innovative corporate interior designs, <br /> where creativity meets productivity in every square foot.</p>
                    </div>
                </div>

                <div className="office card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/off1.webp"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/off2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>Office Interior</h1>
                        <p>Transform your office space into a hub of inspiration with our cutting-edge interior designs, <br /> where productivity and aesthetics converge.</p>
                    </div>
                </div>

                <div className="showroom card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/show1.webp"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/show2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>Showroom Interior</h1>
                        <p>Step into a world of elegance and style with our showroom interior designs, <br /> where every corner is a masterpiece waiting to be discovered.</p>
                    </div>
                </div>

                <div className="villa card">
                    <div className="images">
                        <div className="img1">
                            <Image src={"/image/vil1.webp"} alt='' fill={true}/>
                        </div>
                        <div className="img2">
                            <Image src={"/image/vil2.jpg"} alt='' fill={true}/>
                        </div>
                    </div>
                    <div className="texts">
                        <h1>Villa Interior</h1>
                        <p>Experience the epitome of luxury and comfort with our villa interior designs, where every room is a <br /> work of art, and every space tells a story of elegance.</p>
                    </div>
                </div>

            </div>


        </div> 
        <Footer/>
    </>
  )
}

export default Interior