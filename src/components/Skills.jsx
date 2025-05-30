// eslint-disable-next-line no-unused-vars
import React from "react";

const Skills = () => (
  <section id="skills" className="container my-5">
    <div className="row">
      <article className="col-md-6 col-12">
        <h2>Skills</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="fw-bold">C# .NET</span>
            <div className="small text-muted">
              Object-oriented programming, LINQ, async/await, and modern .NET
              features.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">ASP .NET</span>
            <div className="small text-muted">
              Building web APIs and MVC web applications with .NET.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">
              Microservices, gRPC & REST Communication
            </span>
            <div className="small text-muted">
              Designing and implementing distributed systems and microservices
              using both gRPC and REST APIs for efficient and scalable
              service-to-service communication.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Unit Testing & Integration Testing</span>
            <div className="small text-muted">
              Writing automated tests for individual components and for
              verifying interactions between multiple parts of the application.
              Experience with tools like xUnit and in-memory databases.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Azure Cloud</span>
            <div className="small text-muted">
              Deploying and managing applications with Azure Functions, Azure
              Service Bus, Azure Communication Services, and other cloud
              resources.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Database</span>
            <div className="small text-muted">
              EF Core, ADO.NET, SQL Server, T-SQL, and MongoDB for data storage
              and management.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Frontend</span>
            <div className="small text-muted">
              JavaScript, TypeScript, React, HTML, and CSS for modern web
              interfaces.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Object-Oriented Analysis and Design</span>
            <div className="small text-muted">
              Design patterns, SOLID principles, and UML for robust software
              architecture.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Data Communication and Security</span>
            <div className="small text-muted">
              REST APIs, JWT, HTTPS, authentication, and authorization best
              practices.
            </div>
          </li>
          <li className="list-group-item">
            <span className="fw-bold">DevOps</span>
            <div className="small text-muted">
              CI/CD pipelines, Azure DevOps, GitHub Actions, and cloud
              deployments.
            </div>
          </li>
        </ul>
      </article>
      <article className="col-md-6 col-12">
        <h2>Portfolio</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="https://github.com/ASP2G4/EmailServiceFunction"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            ><i className="bi bi-box-arrow-up-right me-1"></i>
              Email Service Function <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              Azure Function that listens to an Azure Service Bus queue and
              sends emails via Azure Communication Services.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/ASP2G4/WebApplicationVentixe/tree/master/Authentication"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              MVC Web Application - Authentication Module <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              Authentication module using Identity authentication.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/ASP2G4/GrpcJWTService"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              JWT Service <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              Microservice for JWT authentication using gRPC.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/ASP2G4/GrpcAccountProfileService"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Account Profile Service <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              Microservice for account profiles using gRPC.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/Alpha-Backend"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Web API (backend) <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              ASP.NET, EF Core, JWT, Azure services and more.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/alpha-frontend"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Frontend <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              React frontend connecting to my backend API.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/MovieBooking"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Movie Booking <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              React, TypeScript, and JSON server.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/portfolio"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Portfolio <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              This portfolio site built with React.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/RPGGameIsengard"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              RPG Game <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">
              Text-based RPG game created in C#.
            </div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/HotelApp"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Hotel Management System <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">Created in C# using EF Core.</div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/ShotgunGame"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Shotgun Game <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">Simple game created in C#.</div>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/lullak/HotelApp"
              target="_blank"
              rel="noreferrer"
              className="fw-bold"
            >
              Advertisement App <span className="fa fa-external-link-alt me-1" style={{ fontSize: "0.55em" }}></span>
            </a>
            <div className="small text-muted">Created in C# using ADO.NET.</div>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Skills;
