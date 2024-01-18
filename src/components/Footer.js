import React from 'react'

function Footer() {
  return (
    <>
      <div className="footer">
          <div className="row">
           <div className="col-lg-4  footer-heading"> 
           <center>

           <h1>
            Vishal
           </h1>
           </center>
           </div>
           <div className="col-lg-4 footer-links">
            {/* <center> */}
           <h4 style={{marginLeft:'2rem'}}>Links</h4>
           {/* </center>  */}
           <ul>
                    <a href="#main"><li>{' '}Home</li></a>
                   <a href="#about"> <li>{' '} About</li></a>
                   <a href="#education"> <li>{' '}Education</li></a> 
                    <a href="#skills"><li>{' '}Skills</li></a>
                  <a href="#projects"><li>{' '}Projects</li></a> 
                   <a href="#contact"> <li>{' '}Contact</li></a> 

             </ul>
           
                
           </div>
           
           <div className="col-lg-4 footer-contact">
            <center>

            <h4>Get In Touch</h4>
            shobits723@gmail.com
            </center>
           </div>

   


          </div>
        
           <div className="copyright">
            <center>

           Copyright © {' '}2023 Vishal. All Rights Reserved.<br/>
            Devloped by Vishal Kr. Sharma <i class="fa-solid fa-heart"></i>

            </center>
           </div>

      </div>
      
    </>
  )
}

export default Footer
