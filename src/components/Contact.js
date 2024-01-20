import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, phone, email, message } = user;
    if (name && phone && email && message) {
      const res = await fetch(
        "https://personal-portfolio-be5bf-default-rtdb.firebaseio.com/userdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        toast.success('Thank You!, Your message is being sent', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      }
    } else {
      toast.error('Please fill all the fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }
  };

  Aos.init({ duration: 2000 });

  return (
    <>
      <section id="contact" className="get-started">
        <div className="container">
          <div className="row text-center">
            <h1
              className="display-3 fw-bold text-capitalize"
              style={{ color: "black" }}
            >
              Get In Touch
            </h1>
            <div className="heading-line"></div>
          </div>

          <div className="row text-white">
            <div className="col-12 col-lg-6 gradient shadow p-3">
              <div className="cta-info w-100">
                <h4 className="display-4 fw-bold">Contact Information</h4>
                <div className="contacticons">
                  <div className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/vishal-kumar-sharma-11029321a/"
                      target="blank"
                    >
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>{" "}
                  </div>
                  <div className="github">
                    <a
                      href="https://github.com/vishalsharma070901"
                      target="blank"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>{" "}
                  </div>
                  <div className="instagram">
                    <a
                      href=" https://www.instagram.com/_mr.vishal_007/"
                      target="blank"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 bg-white shadow p-3">
              <div className="form w-100 pb-2">
                <h4 className="display-3--title mb-5">Send Me a Message</h4>
                <form action="#" className="row" method="POST">
                  <div className="col-lg-6 col-md mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      id="inputFirstName"
                      className="shadow form-control form-control-lg"
                      name="name"
                      value={user.name}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-lg-6 col-md mb-3">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      id="inputLastName"
                      className="shadow form-control form-control-lg"
                      name="phone"
                      value={user.phone}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="email"
                      placeholder="email address"
                      id="inputEmail"
                      className="shadow form-control form-control-lg"
                      name="email"
                      value={user.email}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                      name="message"
                      placeholder="message"
                      id="message"
                      rows="8"
                      className="shadow form-control form-control-lg"
                      value={user.message}
                      onChange={getUserData}
                    ></textarea>
                  </div>
                  <div className="text-center d-grid mt-1">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill pt-3 pb-3"
                      onClick={postData}
                    >
                      submit
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </>
  );
};

export default Contact;
