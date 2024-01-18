import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import '../App.css'

const Counter = () => {
    const[Counter,SetCounter]=useState(false);

  return (
   

    <ScrollTrigger onEnter={()=>SetCounter(true)} onExit={()=> SetCounter(false)}>

    <div className='row' style={{background:'#4ec2ec',color:'white',padding:'50px'}}>
      <div className=" follow-countup col-lg-4  col-md-12 col-sm-12 ">
        <center>

      <h1 >
       {Counter &&  <CountUp start={0} end={250} duration={5} delay={0}/>}
      +
      <h4>Followers</h4>
      <h6><a href='https://www.instagram.com/_mr.vishal_007/'>On Instagram</a></h6>
    </h1 >
        </center>
      </div>
      <div className=" connection-countup col-lg-4 col-md-12 col-sm-12">
        
        <center>

      <h1>
       {Counter && <CountUp start={0} end={150} duration={5} delay={0}/>}
      +
      <h4>Connections</h4>
      <h6><a href='https://www.linkedin.com/in/vishal-kumar-sharma-11029321a/'>On Linkedin</a></h6>
    </h1>
        </center>
      </div>
      <div className=" member-countup col-lg-4 col-md-12 col-sm-12">
        <center>

      <h1>
       {Counter && <CountUp start={0} end={150} duration={5} delay={0}/>}
      +
      <h4>Members</h4>
      <h6><a href='https://www.facebook.com/profile.php?id=100049893883308'>On Facebook</a></h6>
    </h1>
        </center>
      </div>
   
    
    
    </div>
    </ScrollTrigger>
   
  )
}

export default Counter
