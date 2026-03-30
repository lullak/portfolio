// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => (
  <section id="about" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <div className="card portfolio-card h-100 border-0 shadow-sm">
          <div className="card-body text-start">
            <h2>Education</h2>

            <div className="education-item mb-4">
              <h3 className="mb-1">Software Developer .NET</h3>
              <p className="text-muted mb-2">
                <em>Nackademin, Solna · Graduating May 2026</em>
              </p>
              <p className="small">
                Two-year vocational higher education programme. Core areas: .NET, C#, ASP.NET Core, API development, databases, JavaScript, TypeScript, React, object-oriented design, DevOps, CI/CD, Azure, data communication and security.
              </p>
            </div>

            <div className="education-item">
              <h3 className="mb-1">B.Sc. Business Administration</h3>
              <p className="text-muted mb-2">
                <em>Mittuniversitetet, Sundsvall · Graduated 2019</em>
              </p>
              <p className="small">
                Three-year programme focusing on business administration (ekonomie kandidatexamen). Foundation in economics, finance, operations management, and business strategy.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="col-md-6 col-12">
        <div className="card portfolio-card h-100 border-0 shadow-sm">
          <div className="card-body text-start">
            <h2>Languages & About</h2>

            <div className="mb-4">
              <h3 className="mb-2">Languages</h3>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <strong>Swedish</strong> — Native
                </li>
                <li className="mb-2">
                  <strong>English</strong> — Fluent
                </li>
                <li>
                  <strong>Turkish</strong> — Proficient
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2">Interests</h3>
              <ul className="list-unstyled small hobbies-grid">
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
        </div>
      </article>
    </div>
  </section>
);

export default About;
