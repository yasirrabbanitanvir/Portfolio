import React, { useEffect } from "react";
import "../App.css";
import MyPhoto from "../assets/me.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" data-aos="fade-up">
      <div className="jumbotron">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={MyPhoto}
                alt="Yasir Rabbani Tanvir"
                className="rounded-circle img-fluid shadow"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-md-8 text-md-start text-center">
              <h1 
                style={{ fontSize: "2.5rem", fontWeight: "700" }}
                data-aos="fade-left"
              >
                Welcome to My Portfolio
              </h1>
              <div className="name-animation">
                <h2
                  style={{ fontSize: "2rem", fontWeight: "600", marginTop: "10px" }}
                  data-aos="fade-right"
                >
                  Yasir Rabbani Tanvir
                </h2>
              </div>
              <p 
                style={{ fontSize: "1.1rem", marginTop: "10px" }}
                data-aos="fade-left"
              >
                <strong>Frontend Developer</strong> | JavaScript | React.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
