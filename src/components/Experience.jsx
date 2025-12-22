// eslint-disable-next-line no-unused-vars
import React from "react";
import cv from "../assets/files/CV_EN.pdf";

const Experience = () => (
  <section id="experience" className="container my-5 flat-section">
    <div className="row">
      <article className="col-md-8 col-12 mx-auto text-start">
        <h2>Prior Experience</h2>

        <div className="experience-list">
          <div className="card experience-card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="mb-1">PostNord– Software Developer Intern</h3>
                  <p className="text-muted mb-2">
                    <em>Nov 2025 — May 2026</em>
                  </p>
                </div>
                <span className="badge job-pill">Backend · .NET</span>
              </div>

              <p>
                Backend .NET developer within International Mail, working with
                event-driven integrations across multiple internal and external
                systems, with high requirements on reliability, traceability, and
                compliance, and a key contributor to an internal business application
                for dues and rates used in international postal flows, including
                analysis, development, and maintenance of backend services supporting
                international logistics.
              </p>

              <p className="mb-2"><strong>Tech stack:</strong><br/>
                .NET / C#, ASP.NET Core, REST APIs, event-driven architecture, SQL, distributed systems,
                Azure (cloud services), Docker, OpenShift, Aspire, GitHub, GitHub Actions, CI/CD, Grafana, PowerShell, Jira, Confluence.
              </p>
            </div>
          </div>

          <div className="card experience-card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h3 className="mb-1">beQuoted – Operations and Process Manager – Investor Relations</h3>
                  <p className="text-muted mb-2">
                    <em>2018 - 2024 and summer 2025</em>
                  </p>
                </div>
                <span className="badge job-pill">Operations · IR</span>
              </div>

              <p>
                Experienced Operations and Process Manager with a background in leadership, regulatory compliance, and investor relations. Skilled in managing daily operations, improving processes, and supporting CEOs and CFOs of publicly listed companies. Expertise in regulatory adherence (Nasdaq Stockholm, First North, etc.), project management, and developing IR and corporate websites.
              </p>
            </div>
          </div>

          <div className="text-center mt-3">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-download"></i> Download my CV
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Experience;