import React,{useEffect} from 'react'
import Aos from "aos";
import '../App.css'
import 'aos/dist/aos.css'
function Education() {
    useEffect(() => {
        Aos.init({ duration: 1000});
      });
  return (
    <div className='education row' id='education'>
         <div className="  education-heading col-lg-3 col-md-12 col-sm-12"  data-aos="fade-right"> 
         <h1  >Education</h1>
       </div>
      <div className="education-sections row col-lg-9 col-md-12 col-sm-12" >
      <div className=" btech col-lg-12 col-md-12 col-sm-12 "  data-aos="fade-up"><h3> <h5>2020-2024</h5><span><i class="fa-solid fa-graduation-cap"></i></span>{" "}Bachelor of Technology </h3><h5>RVS College Of Engineering And Technology,Jamshedpur</h5> 
      <p>Currently, I'm  pursuing my B.Tech (IT) from <strong>RVS College Of Engineering And Technology,Jamshedpur</strong>.<br/>My branch is <strong>Computer Science  & Engineering</strong>.At present I'm in <strong>3rd year(6th semester)</strong>.<br/>My current CGPA is <strong>8.45</strong>

       </p></div>
      <div className=" intermediate  col-lg-12 col-md-12 col-sm-12"  data-aos="fade-up"> <h5>2018-2020</h5><h3><span><i class="fa-sharp fa-solid fa-school"></i></span>{" "} Intermediate (12th)</h3><h5>BSS PranavChildren's World,Jamshedpur</h5>
      <p>I have completed my intermediate from <strong>BSS Pravav Childern's World,Jamshedpur</strong>,in the year <strong>2020</strong>.I have secured <strong>72%</strong> marks during my intermediate
        </p>
      </div>
      <div className=" school col-lg-12 col-md-12 col-sm-12"  data-aos="fade-up"><h5>2005-2018</h5> <h3><span><i class="fa-solid fa-building-columns"></i></span>{' '}Matriculation(10th)</h3><h5>BSS PranavChildren's World,Jamshedpur</h5>
      <p>I have completed my <strong>Matirculation</strong> from <strong>BSS Pravav Childern's World,Jamshedpur</strong>,in the year <strong>2018</strong>.I have secured <strong>71%</strong> marks during my  matriculation
       </p>
      </div>

        
      </div>
   
      
    </div>
  )
}

export default Education
