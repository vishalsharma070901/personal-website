import React ,{useEffect, useState}from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

const Contact = () => {
  const [user,setUser]=useState({
    name:'',
    phone:'',
    email:'',
    message:'',
  });
  let name ,value;
  const getUserData=(event)=>{
    name=event.target.name;
   value=event.target.value;
   setUser({...user,[name]:value})

  }
  const postData= async(e)=>{
    e.preventDefault();
    const { name,phone, email, message} =user;
    if(name && phone && email && message){
      const res= await fetch('https://vishalportfolio-712c2-default-rtdb.firebaseio.com/portfolioform.json' ,
      {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          name,
          phone,
          email,
          message
        })
      }
      );
      if(res){
        setUser({
          name:'',
          phone:'',
          email:'',
          message:'',
        });
         alert("Congratulations! Your message is been sucessfully dilevered")
      }    




    }
    else{
        alert("Please fill the data")
    }

  };
  useEffect(()=>{
    Aos.init({duration :2000})
  })
  return (
    <>  <div className='container contact' id='contact'>
     

    <center><h1 data-aos="fade-up"> Contact Me</h1></center>
       <div className="form" data-aos="fade-up"> 
     <div className="row">
     <div className=" col-lg-6 col-md-12" >
      <form method="POST">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" name='name' value={user.name} onChange={getUserData} autoComplete='off' required/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Phone Number </label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="mobile number " name='phone' value={user.phone} onChange={getUserData}  autoComplete='off ' required/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email'  value={user.email} onChange={getUserData} autoComplete='off' required/>
      </div>
    
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={user.message} onChange={getUserData} autoComplete='off' required></textarea>
      </div>
       <div >
     <button class=" form-btn" type="submit" onClick={postData}>Submit</button>
       </div>
      </form>
     </div>


     <div className='col-lg-6 col-md-12 col-sm-12 contactdetails' >
      <h3>Contact<br/>Information</h3>
      <div className='contactemail'>
        <center>

      <i class="fa-solid fa-envelope"></i><br/>
       shobits723@gmail.com
        </center>
      </div>
      <div className='contacticons'>
      <a href='https://www.linkedin.com/in/vishal-kumar-sharma-11029321a/'><i class="fa-brands fa-linkedin-in"></i></a>{' '}
       <a href="https://github.com/vishalsharma070901"><i class="fa-brands fa-github"></i></a>{' '}
       <a href=" https://www.instagram.com/_mr.vishal_007/"><i class="fa-brands fa-instagram"></i></a>
  
      </div>
     </div>

     </div>
     </div>
       
       


   </div>
      
    </>
  )
}

export default Contact
