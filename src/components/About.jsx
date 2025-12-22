// eslint-disable-next-line no-unused-vars
import React from "react";
import picture from "../assets/images/Dennis_Bircan_3.jpg";

const About = () => (
  <section id="about" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <div className="card portfolio-card h-100 border-0 shadow-sm">
          <div className="card-body d-flex flex-column align-items-center text-center">
            <img
              src={picture}
              alt="Dennis Bircan"
              className="rounded-circle portfolio-img mb-3"
            />
            <h2 className="h4 mb-1">Dennis Bircan</h2>
            <p className="text-muted mb-3">Economist → Software Developer</p>

            <ul className="list-unstyled mb-0 small hobbies-grid w-100">
              <li className="hobby-item">
                <span className="hobby-emoji">⚽</span> Football
              </li>
              <li className="hobby-item">
                <span className="hobby-emoji">🎮</span> Gaming
              </li>
              <li className="hobby-item">
                <span className="hobby-emoji">🎣</span> Fishing
              </li>
              <li className="hobby-item">
                <span className="hobby-emoji">🏋️</span> Gym
              </li>
              <li className="hobby-item">
                <span className="hobby-emoji">📈</span> Investing
              </li>
            </ul>
          </div>
        </div>
      </article>
       <article className="col-md-6 col-12">
        <div className="card portfolio-card h-100 border-0 shadow-sm">
          <div className="card-body text-start">
            <h2>Education</h2>

            <div className="education-item mb-3">
              <h3 className="mb-1">Software Developer .NET</h3>
              <p>
                <em>Nackademin - Graduation 2026</em>
              </p>
            </div>

            <div className="education-item">
              <h3 className="mb-1">
                Degree of Bachelor of Science with a major in Business Administration
              </h3>
              <p>
                <em>Mittuniversitetet, Sundsvall - Graduation 2019</em>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default About;
