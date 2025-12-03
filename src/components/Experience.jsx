// eslint-disable-next-line no-unused-vars
import React from "react";
import cv from "../assets/files/CV_EN.pdf";

const Experience = () => (
  <section id="experience" className="container my-5">
    <div className="row">
      <article className="col-md-8 col-12 mx-auto">
        <h2>Prior Experience</h2>
        <h3>PostNord – Software Developer Intern</h3>
        <p>
          <em>2025 Nov - 2026 May</em>
        </p>
        <h3>beQuoted - Operations and Process Manager / Investor Relations</h3>
        <p>
          <em>2018-2024 and summer 2025</em>
        </p>
        <p>
          Experienced Operations and Process Manager with a background in
          leadership, regulatory compliance, and investor relations. Skilled in
          managing daily operations, improving processes, and supporting CEOs
          and CFOs of publicly listed companies. Expertise in regulatory
          adherence (Nasdaq Stockholm, First North, etc.), project management,
          and developing IR and corporate websites.
        </p>
        <a href={cv} target="_blank" className="btn btn-primary mb-3 mt-3">
          <i className="fas fa-download"></i> Download my CV
        </a>
      </article>
    </div>
  </section>
);

export default Experience;
