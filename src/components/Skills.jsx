// eslint-disable-next-line no-unused-vars
import React from "react";

const Skills = () => (
  <section id="skills" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <h2>Technical Skills</h2>

        <div className="skills-section">
          <div className="skill-category">
            <h4 className="skill-category-title">Backend</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">.NET · C#</span>
                <div className="small text-muted">
                  Object-oriented programming, LINQ, async/await, and modern .NET features.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">ASP.NET Core</span>
                <div className="small text-muted">
                  Building web APIs, MVC applications, and microservices with .NET.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">REST APIs · gRPC</span>
                <div className="small text-muted">
                  Designing and implementing distributed service-to-service communication.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">Testing</span>
                <div className="small text-muted">
                  Unit and integration testing with xUnit, NUnit, and in-memory databases.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Messaging & Events</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">Kafka</span>
                <div className="small text-muted">
                  Event-driven architecture and reliable message processing at scale.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Cloud & DevOps</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">Azure</span>
                <div className="small text-muted">
                  Azure Functions, Service Bus, Communication Services, VMs, and managed services.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">Containerization</span>
                <div className="small text-muted">
                  Docker, OpenShift, and container orchestration for modern deployments.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">CI/CD & Automation</span>
                <div className="small text-muted">
                  GitHub Actions, pipeline design, automated testing, and deployment workflows.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">Monitoring & Observability</span>
                <div className="small text-muted">
                  Grafana, logging, tracing, and production system health monitoring.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Databases</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">SQL & ORM</span>
                <div className="small text-muted">
                  SQL Server, PostgreSQL, T-SQL, EF Core, and ADO.NET.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Frontend</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">React · TypeScript</span>
                <div className="small text-muted">
                  Modern UI development with React and TypeScript for robust interfaces.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">AI & Emerging Tools</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">AI-Assisted Development</span>
                <div className="small text-muted">
                  GitHub Copilot, Claude, Gemini, and Anthropic API for faster, smarter coding.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Architecture & Principles</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">SOLID · Design Patterns</span>
                <div className="small text-muted">
                  Object-oriented analysis, design patterns, and maintainable architecture.
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">Security</span>
                <div className="small text-muted">
                  REST APIs, JWT, HTTPS, authentication, authorization, and compliance.
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="skill-category-title">Domain Expertise</h4>
            <div className="skill-cards">
              <div className="skill-card">
                <span className="skill-title">Business & Finance</span>
                <div className="small text-muted">
                  Investor relations, financial reporting, regulatory compliance (Nasdaq, First North).
                </div>
              </div>

              <div className="skill-card">
                <span className="skill-title">Cross-Industry</span>
                <div className="small text-muted">
                  Pharma, real estate, mining, space tech, gaming, security, and media tech.
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="col-md-6 col-12">
        <h2>Featured Projects</h2>

        <div className="portfolio-list">
          <div className="project-card featured">
            <a
              href="https://github.com/ASP2G4/EmailServiceFunction"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>
              Email Service Function
            </a>
            <div className="small text-muted">
              Azure Function listening to Service Bus queue, sending emails via Azure Communication Services.
            </div>
          </div>

          <div className="project-card featured">
            <a
              href="https://github.com/lullak/Alpha-Backend"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>
              Web API (Backend)
            </a>
            <div className="small text-muted">
              ASP.NET Core REST API, EF Core, JWT, Azure services.
            </div>
          </div>

          <div className="project-card featured">
            <a
              href="https://github.com/lullak/alpha-frontend"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>
              Frontend (React)
            </a>
            <div className="small text-muted">
              React frontend connecting to backend Web API.
            </div>
          </div>

          <div className="collapse-trigger">
            <button
              className="btn btn-outline-secondary btn-sm w-100"
              data-bs-toggle="collapse"
              data-bs-target="#moreProjects"
              aria-expanded="false"
            >
              <i className="bi bi-chevron-down me-1"></i> View More Projects
            </button>
          </div>

          <div className="collapse" id="moreProjects">
            <div className="mt-3">
              <div className="project-card">
                <a
                  href="https://github.com/ASP2G4/WebApplicationVentixe/tree/master/Authentication"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  MVC Web Application - Authentication
                </a>
                <div className="small text-muted">
                  ASP.NET MVC authentication module using .NET Identity.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/ASP2G4/GrpcJWTService"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  JWT Service (gRPC)
                </a>
                <div className="small text-muted">
                  Microservice for JWT authentication using gRPC protocol.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/ASP2G4/GrpcAccountProfileService"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Account Profile Service (gRPC)
                </a>
                <div className="small text-muted">
                  Microservice for account profiles using gRPC.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/lullak/MovieBooking"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Movie Booking
                </a>
                <div className="small text-muted">
                  React + TypeScript application with JSON server backend.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/lullak/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Portfolio
                </a>
                <div className="small text-muted">
                  This portfolio site, built with React and Vite.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/lullak/RPGGameIsengard"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  RPG Game
                </a>
                <div className="small text-muted">
                  Text-based RPG game created in C#.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/lullak/HotelApp"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Hotel Management System
                </a>
                <div className="small text-muted">
                  C# application with EF Core ORM.
                </div>
              </div>

              <div className="project-card">
                <a
                  href="https://github.com/lullak/ShotgunGame"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Shotgun Game
                </a>
                <div className="small text-muted">
                  Simple game created in C#.
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Skills;
