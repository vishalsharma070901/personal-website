import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img from "./images/aboutimg.jpg";
import "../App.css";

function About() {
  Aos.init({ delay: 0 });
  return (
    <section id="about" className="services">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold" style={{ color: "black" }}>
            About Me!
          </h1>
          <div className="heading-line mb-1"></div>
        </div>
      </div>

      <div className="container">
        <div className="row about-image-row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start"
            data-aos="zoom-in"
          >
            <div className="services__pic">
              <img
                src={img}
                alt="web development illustration"
                className="aboutImg img-fluid "
              />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
            data-aos="fade-up"
          >
            <div className="services__content">
              <div className="icon d-block fas fa-code"></div>

              <p className="about-me">
                Hello! Welcome to my website! Really happy to see you here. My
                name is Vishal Kumar Sharma.Currently I am pursuing my{" "}
                <strong>Btech</strong> from{" "}
                <strong>
                  RVS College of Engineering and Technology, Jamshedpur
                </strong>{" "}
                and my specialization is{" "}
                <strong>Computer Science and Engineering</strong> . I m skilled
                in Full stack web development using{" "}
                <strong>Reactjs ,Nodejs ,Expressjs and MongoDB</strong>,apart
                from that I also a good knowledge of C++,andSQL. I have also
                made projects using Reactjs and Nodejs such as{" "}
                <strong>Full stack chat application </strong>through which a
                user to exchange message in real time.and a{" "}
                <strong>Full stack blog application</strong>, apart from that
                Last summer during my 3rd year I have also done an internship At{" "}
                <strong> Sikharthy Infotech Private Limited </strong>and
                developed a banking app. I really enjoyed my experience there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
