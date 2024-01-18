import React ,{useEffect}from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import img from './vishalimg.jpg'
import '../App.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";


function About() {
  const [text] = useTypewriter({
    words: ["Thank You."],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 150,
  });
  useEffect(() => {
    Aos.init({ duration: 2000});
  });
  return (
    <div  className='About row'   id='about'>
      <div className="about-img col-lg-6 col-md-12 col-sm-12 " data-aos="fade-up" >
        <center>

          <img src={img}alt=""  className='aboutImg rounded mx-auto d-block'/>
        </center>
      </div>
      <div className='about-heading col-lg-6 col-md-12 col-sm-12' data-aos="fade-left">
         <h1>About me.</h1>
         <p >
         Hello! Welcome to my website! Really happy to see<br/> you here.<br/>

         
           I'm Vishal Kumar Sharma, and I'm from <strong>Jamshedpur,Jharkhand</strong> .<br/> I'm  a <strong>Computer Science Engineering student</strong> and a Web-devloper, primarily known for my Coding and devlopment skills.<br/>At present I'm  pursuing my B.Tech (IT) from<br/> <strong>RVS College Of Engineering And Technology,Jamshedpur</strong>. I have  worked for 2 Months  as a web devlopment <strong>Intern</strong> at <strong>Aditypur Autocluster,Jamshedpur</strong> .
         </p>
         <h4>{text}<span>
              <Cursor />
            </span></h4>
        
      </div>
     
    </div>
  )
}

export default About
