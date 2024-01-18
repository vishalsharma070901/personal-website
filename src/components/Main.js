import React, { useEffect } from "react";
import "../App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import avatar1 from "./avatar1.png";
import Aos from "aos";


function Main() {
  const [text] = useTypewriter({
    words: ["Devloper.", "Designer.", "Photographer.", "Coder."],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 150,
  });
  useEffect(() => {
    Aos.init({ duration: 2000});
  });
  return (
    <>
      <div className=" main" id="main">
        <div className="row" >
          <div
            className=" heading col-lg-6 col-md-12 col-sm-12 "
            data-aos="fade-right" 
          >
            <center>
              
            <h1
              style={{
                
                
                fontFamily: "Montserrat",
                fontSize: "55px",
                fontWeight: 600,
              }}
              >
              HEY! I'M A{" "}
            </h1>
            <span
              style={{
                color: "#4ec2ec",
                marginTop: "17rem",
                
                fontFamily: "Montserrat",
                fontSize: "55px",
                fontWeight: 600,
              }}
            >
              {text}
            </span>
            <span style={{ color: "#4ec2ec" ,fontSize:'55px'}}>
              <Cursor />
            </span>

            <p
              style={{
                marginTop: "1rem",
                textAlign:'center',
                fontFamily: "Montserrat",
                fontSize: "18px",
              }}
              >
              I'm a web devloper,photographer,web designer 
              and coder base in India.Specially I'm a Frontend focused Web
              devloper building frontend of websites and web application.{" "}
            </p>
            <button className="Main-button" type="button">
              <a href="#about"> Know More</a>
              
              
            </button>
              </center>
          </div>
          <div className=" image col-lg-6 col-md-12 col-sm-12"  >
            <center>

            <img src={avatar1} alt="" className="mainImg" data-aos="fade-left" />
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
