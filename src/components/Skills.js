import React,{useEffect} from 'react'
import '../App.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  });
  return (
    <div className='skill row' id='skills'>
      <center>
      <h1 data-aos="fade-up">Skills</h1>
        </center>
   

 <div className=" Languages col-lg-4 col-md-12 col-sm-12 "  data-aos="fade-right">
  <center>
  <h3> Languages </h3>
  </center>
  <p>
  <ul>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}C</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}C++</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Python</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Javascript</li>
  </ul>




  </p>
  
</div>
 <div className=" frontend  col-lg-4 col-md-12 col-sm-12" data-aos="fade-up"> 
 <center>
 <h3>Frontend framework </h3>
 </center>
 <p>
 <ul>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}HTML</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}CSS</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}JavaScript</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}React js</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Bootstrap</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Material-ui</li>
  </ul>


 </p>


 
 </div>
 <div className=" backend col-lg-4 col-md-12 col-sm-12" data-aos="fade-left"  >
  <center>
  <h3>Backend framework</h3>
  </center>
  <p>
  <ul>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Django</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Django REST Framework</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}My SQL</li>
    <li><i class="fa-sharp fa-solid fa-arrow-right"></i>{' '}Firebase</li>
  </ul>
  </p>

  
 
 </div>

   
 

 
</div>
  )
}

export default Skills
