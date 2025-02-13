// eslint-disable-next-line no-unused-vars
import React from "react";
import picture from "../assets/images/Dennis_Bircan_3.jpg";

const About = () => (
  <section id="about" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <h2>About Me</h2>
        <img
          className="img-fluid portfolio-img"
          src={picture}
          alt="Dennis Bircan"
        />
        <p className="mt-3">
          I enjoy staying active through football, gaming, fishing, and regular
          gym workouts. I’m also passionate about the stock market and
          investing.
        </p>
      </article>
      <article className="col-md-6 col-12">
        <h2>Education</h2>
        <h3>Software Developer .NET</h3>
        <p>
          <em>Nackademin - Graduation 2026</em>
        </p>
        <h3>
          Degree of Bachelor of Science with a major in Business Administration
        </h3>
        <p>
          <em>Mittuniversitetet, Sundsvall - Graduation 2019</em>
        </p>
      </article>
    </div>
  </section>
);

export default About;
