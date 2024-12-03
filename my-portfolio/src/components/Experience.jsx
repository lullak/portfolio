import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../index.css";

const Experience = () => (
  <section id="experience" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <h2>Prior Experience</h2>
        <h3>Operations and Process Manager – Investor Relations</h3>
        <p><em>2018-2024</em></p>
        <p>
          Experienced Operations and Process Manager with a strong background in leadership, regulatory compliance, and investor relations.
        </p>
        <a href="/documents/resume.pdf" target="_blank" className="btn btn-primary mb-3">
          <i className="fas fa-download"></i> Download my CV
        </a>
      </article>
      <article className="col-md-6 col-12">
        <h2>References</h2>
        <ul>
          <li><a href="https://se.linkedin.com/in/daniel-malmsäter-56506717/sv" target="_blank" rel="noreferrer">Daniel Malmsäter</a></li>
          <li><a href="https://www.linkedin.com/in/oscar-hässlehult-1a7a236/" target="_blank" rel="noreferrer">Oscar Hässlehult</a></li>
          <li><a href="https://se.linkedin.com/in/felix-cau-a3991ba3" target="_blank" rel="noreferrer">Felix Cau</a></li>
          <li><a href="https://se.linkedin.com/in/may-adnan-b90793193" target="_blank" rel="noreferrer">May Adnan</a></li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;