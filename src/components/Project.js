import React from "react";
import Aos from "aos";
import "../App.css";
import "aos/dist/aos.css";
import blog from "./images/services/blog.jpg";
import chat from "./images/services/chat.jpg";
import weather from "./images/services/weather.jpg";
import ecommerce from "./images/services/ecommerce.jpg";

function Project() {
  Aos.init({ duration: 1000 });
  return (
    <section id="projects" class="services">
      <div class="container">
        <div class="row text-center">
          <h1 class="display-3 fw-bold" style={{ color: "black" }}>
            Projects
          </h1>
          <div class="heading-line mb-1"></div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
            data-aos="fade-right"
          >
            <div class="services__content">
              <div class="icon d-block fas fa-paper-plane"></div>
              <h3 class="display-3--title mt-1">Chat Application</h3>
              <p class="about-me">
                I developed a dynamic chat website using
                <strong>
                  HTML, CSS, JavaScript, React.js, Node.js, Express.js, and
                  MongoDB
                </strong>
                . The seamless integration of front-end and back-end
                technologies allows users to engage in
                <strong> real-time conversations</strong>. The Node.js server
                handles communication, while MongoDB stores chat data, creating
                a responsive and interactive user experience.
              </p>
              <button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                <a
                  href="https://github.com/vishalsharma070901/Chat-app"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  Source Code
                </a>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
            data-aos="zoom-out"
          >
            <div class="services__pic">
              <img src={chat} alt="marketing illustration" class="img-fluid" />
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start"
            data-aos="zoom-in"
          >
            <div class="services__pic">
              <img
                src={blog}
                alt="web development illustration"
                class="img-fluid"
              />
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
            data-aos="fade-left"
          >
            <div class="services__content">
              <div class="icon d-block fas fa-codee">
                <i class="fa-solid fa-message"></i>
              </div>
              <h3 class="display-3--title mt-1">Blog Application</h3>
              <p class="about-me">
                I successfully created a dynamic blog website using
                <strong> HTML, CSS, and Django</strong>. The site features a
                clean and responsive design, allowing users to navigate
                seamlessly. With Django's powerful framework, I implemented
                robust backend functionalities, enabling easy content
                management. The project combines aesthetics with functionality
                for an engaging user experience.
              </p>
              <button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                <a
                  href="https://github.com/vishalsharma070901/Vishal-Blogs"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  Source Code
                </a>
                <span>
                  <i class="fas fa-arrow-left"></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
            data-aos="fade-right"
          >
            <div class="services__content">
              <div class="icon d-block fas fa-cloud-upload-alt/">
                <i class="fa-solid fa-bolt"></i>
              </div>
              <h3 class="display-3--title mt-1">Weather App</h3>
              <p class="about-me">
                I developed a weather website using{" "}
                <strong>HTML, CSS, JavaScript, and ReactJS</strong>, creating a
                dynamic and user-friendly interface. The site provides real-time
                weather information, featuring a responsive design for optimal
                viewing on various devices. Users can easily access accurate and
                up-to-date weather forecasts, enhancing their overall browsing
                experience.
              </p>
              <button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                <a
                  href="https://github.com/vishalsharma070901/Weather-App"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  Source Code
                </a>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
            data-aos="zoom-out"
          >
            <div class="services__pic">
              <img
                src={weather}
                alt="cloud hosting illustration"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start"
            data-aos="zoom-in"
          >
            <div class="services__pic">
              <img
                src={ecommerce}
                alt="web development illustration"
                class="img-fluid"
              />
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
            data-aos="fade-left"
          >
            <div class="services__content">
              <div class="icon d-block fas fa-codee">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <h3 class="display-3--title mt-1">E-Commerce Website</h3>
              <p class="about-me">
                This is a online shopping website like{" "}
                <strong>Amazon and Flipkart</strong> Which I have made whith my
                friend during my <strong>Internship Program</strong>.With the
                help of this website one cane buy products online.To design the
                frontend of this Website we have use technologies like
                <strong> HTML,CSS,Javascript and Bootstrap </strong>and for the
                backend we have use <strong>Django</strong>.We have use{" "}
                <strong>My SQL</strong> for database .
              </p>
              <button
                type="button"
                class="rounded-pill btn-rounded border-primary"
              >
                <a
                  href="https://github.com/vishalsharma070901/shopping"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  Source Code
                </a>
                <span>
                  <i class="fas fa-arrow-left"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
