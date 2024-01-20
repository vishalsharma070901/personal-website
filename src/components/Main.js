import React from "react";
import "../App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Aos from "aos";
import mainimg from "./images/arts/intro-section-illustration.png";


function Main() {
  const [text] = useTypewriter({
    words: ["Developer.", "Designer.", "Photographer.", "Coder."],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 150,
  });

  Aos.init({ delay: 0, duration: 1000 });
  return (
    <>
        
      <section id="home" class="intro-section">
 
        <div class="container">
          <div class="row align-items-center text-white">
            <div class="col-md-6 intros text-start" data-aos="zoom-in">
              <h1 class="display-2">
                <span class="display-2--intro" style={{ color: "white" }}>
                  Hey ! I'm{" "}
                </span>
                <br />
                <span style={{ color: "white" }}>{text}</span>
                <span style={{ color: "white", fontSize: "55px" }}>
                  <Cursor />
                </span>
                <span
                  class="display-2--description lh-base"
                  style={{ color: "white" }}
                >
                  I'm a Full Stack Web Developer base in India.Specially I'm a
                  Frontend focused Web developer building frontend of websites
                  and web application.
                </span>
              </h1>
              <button type="button" class="rounded-pill btn-rounded">
                <a href="#about" style={{ textDecoration: "none" }}>
                  Know More
                </a>
                <span>
                  <i class="fas fa-arrow-down"></i>
                </span>
              </button>
            </div>

            <div class="col-md-6 intros text-end">
              <div class="video-box">
                <img
                  src={mainimg}
                  alt="video illutration"
                  class="img-fluid image-fluid"
                />

              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default Main;
