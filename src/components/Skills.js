import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import html from "./images/testimonials/html.png";
import css from "./images/testimonials/css.png";
import JavaScript from "./images/testimonials/javascript.png";
import react from "./images/testimonials/react.png";
import node from "./images/testimonials/node.png";
import mongo from "./images/testimonials/mongodb.png";
import express from "./images/testimonials/express.png";
import cplus from "./images/testimonials/cplus.png";
import Firebase from "./images/testimonials/firebase.png";
import github from "./images/testimonials/github.png";
import sql from "./images/testimonials/sql.png";
import Python from "./images/testimonials/python.png";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="container" id="skills">
      <div className="row text-center">
        <h1 className="display-3 fw-bold" style={{ color: "black" }}>
          Skills
        </h1>
        <div className="heading-line mb-1"></div>
      </div>
      <div className="skills" data-aos="zoom-out">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div
              className="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={html} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    HTML
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={css} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    CSS
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={JavaScript} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    JavaScript
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={express} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    Express.Js
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={react} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    React.Js
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={node} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    Node.Js
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={mongo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    MongoDB
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={sql} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    SQL
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={cplus} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    C++
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card "
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={Python} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    Python
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card "
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={Firebase} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    Firebase
                  </h5>
                </div>
              </center>
            </div>
          </div>
          <div class="col">
            <div
              class="card"
              style={{
                background: "transparent",
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <center>
                <img src={github} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title" style={{ color: "white" }}>
                    Github
                  </h5>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
