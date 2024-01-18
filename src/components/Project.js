import React,{useEffect} from 'react'
import Aos from "aos";
import '../App.css'
import 'aos/dist/aos.css'

function Project() {
    useEffect(() => {
        Aos.init({ duration: 1000});
      });
  return (
    <div className='project row' id='projects'>
         <div className="  education-heading col-lg-3 col-md-12 col-sm-12"  data-aos="fade-right"> 
         <h1  >Projects</h1>
       </div>
      <div className="project-sections row col-lg-9 col-md-12 col-sm-12" >
      <div className=" ecommerce col-lg-12 col-md-12 col-sm-12 "  data-aos="fade-up"><h3><span><i class="fa-solid fa-cart-shopping"></i></span>{" "}E-Commerce Website </h3> 
      <p>This is a online shopping website like <strong>Amazon and Flipkart</strong> Which I have made whith my friend during my  <strong>Internship Program</strong>.With the help of this website one cane buy products online.To design the frontend of this Website we have use technologies like<strong> HTML,CSS,Javascript and Bootstrap </strong>and for the backend we have use  <strong>Django</strong>.We have use <strong>My SQL</strong> for database .

       </p></div>
      <div className=" video  col-lg-12 col-md-12 col-sm-12"  data-aos="fade-up"> <h3><span><i class="fa-solid fa-video"></i></span>{" "} Online Video Sharing Website</h3>
      <p>This is online video sharing website like youtube.com .I have made this website with the hekp of<strong> React.js</strong>I have use use the  <strong>API </strong> of Youtube.com for streaming videos on tthe website.Currently it is in the devloping stage and not fullly devloped.It is a single page Website.
        </p>
      </div>
      <div className=" portfolio col-lg-12 col-md-12 col-sm-12"  data-aos="fade-up"><h3><span><i class="fa-solid fa-user"></i></span>{' '}Personal Portfolio</h3>
      <p>This is my personal website which I have made whith the helo of <strong>React.js</strong>. It  is single page website.The main motive behind making this website is to show my <strong>Skills,Educational Qualification,Personal Projects and Knowlwdge </strong>to other people.One can contact me with the help of this website.
       </p>
      </div>

        
      </div>
   
      
    </div>
  )
}

export default Project
