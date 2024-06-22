import React from "react";
import "../App.css"; // Make sure to import your CSS file for styling

const Home = () => {
  return (
    <section id="home" data-aos="fade-up">
      <div className="jumbotron text-center">
        <h1>Welcome to My Portfolio</h1>
        <div className="name-animation">
          <h2>Yasir Rabbani Tanvir</h2>
        </div>
        <p>Web Developer | React.js | WordPress</p>
      </div>
    </section>
  );
};

export default Home;
