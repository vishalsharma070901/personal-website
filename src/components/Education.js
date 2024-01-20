import React from "react";
import Aos from "aos";
import "../App.css";
import "aos/dist/aos.css";

import intermediate from "./images/services/service-2.png";
import matriculation from "./images/services/service-3.png";
import school from "./images/services/school.jpg";
function Education() {
  Aos.init({ duration: 1000 });
  return (
    <section id="education" class="services">
      <div class="container">
        <div class="row text-center">
          <h1 class="display-3 fw-bold" style={{ color: "black" }}>
            Education
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
              <div class="icon d-block fas fa-paper-plane\">
                <i class="fa-solid fa-code"></i>
              </div>
              <h3 class="display-3--title mt-1">Bachelor of Technology</h3>
              <p class="about-me">
                Currently, I'm pursuing my B.Tech (IT) from{" "}
                <strong>
                  RVS College Of Engineering And Technology,Jamshedpur
                </strong>
                . My branch is <strong>Computer Science & Engineering</strong>
                .At present I'm in <strong>3rd year(6th semester)</strong>.My
                current CGPA is <strong>8.45</strong>
              </p>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
            data-aos="zoom-out"
          >
            <div class="services__pic">
              <img
                src={intermediate}
                alt="marketing illustration"
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
                src={matriculation}
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
              <div class="icon d-block fas fa-cod/e">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 class="display-3--title mt-1">Intermidiate(12th)</h3>
              <p class="about-me">
                I have completed my intermediate from{" "}
                <strong>BSS Pravav Childern's World,Jamshedpur</strong>, in the
                year <strong>2020</strong>.I have secured <strong>72%</strong>{" "}
                marks during my intermediate
              </p>
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
                <i class="fa-solid fa-school"></i>
              </div>
              <h3 class="display-3--title mt-1">Matriculation(10th)</h3>
              <p class="about-me">
                I have completed my <strong>Matirculation</strong> from{" "}
                <strong>BSS Pravav Childern's World,Jamshedpur</strong>,in the
                year <strong>2018</strong>.I have secured <strong>71%</strong>{" "}
                marks during my matriculation
              </p>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end"
            data-aos="zoom-out"
          >
            <div class="services__pic">
              <img
                src={school}
                alt="cloud hosting illustration"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
