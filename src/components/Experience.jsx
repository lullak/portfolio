import cv from "../assets/files/Dennis_Bircan_CV_updated.pdf";

const Experience = () => (
  <section id="experience">
    <div className="section-inner">
    <div className="row">
      <article className="col-lg-10 col-md-11 col-12 mx-auto text-start">
        <h2>Experience</h2>

        <div className="experience-list">
          <div className="card experience-card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                <div className="flex-grow-1">
                  <h3 className="mb-1">PostNord – Software Engineer</h3>
                  <p className="text-muted mb-3">
                    <i className="bi bi-calendar3 me-2"></i>
                    <em>Nov 2025 — Present · Full-time since June 2026 · International Mail Division</em>
                  </p>
                </div>
                <span className="badge job-pill">Backend · .NET</span>
              </div>

              <p className="mb-3">
                .NET backend developer within the International Mail division, working on
                reliable, traceable event-driven microservices that connect internal systems
                and external partners.
              </p>

              <ul className="mb-4">
                <li>
                  Migrated services from OpenShift to Azure Kubernetes Service (AKS),
                  working with Kubernetes-based deployment and runtime environments.
                </li>
                <li>
                  Led the full rewrite of a legacy EDI processing service, replacing
                  regex-based parsing with a typed, model-driven approach. Upgraded the
                  codebase from .NET Core 3.1 to .NET 10 and added NUnit unit tests.
                </li>
                <li>
                  Develop and maintain backend code that runs in production, contributing
                  to reliable services and integrations used by PostNord.
                </li>
              </ul>

              <p className="small text-muted mb-0">
                <strong>Stack:</strong> .NET, C#, ASP.NET Core, REST APIs, Kafka, SQL Server,
                PostgreSQL, Azure, Docker, OpenShift, Aspire, GitHub Actions, Grafana,
                GitHub Copilot, Jira, Confluence
              </p>
            </div>
          </div>

          <div className="card experience-card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                <div className="flex-grow-1">
                  <h3 className="mb-1">beQuoted – Operations and Process Manager, Investor Relations</h3>
                  <p className="text-muted mb-3">
                    <i className="bi bi-calendar3 me-2"></i>
                    <em>2018 – 2024, Summer 2025 · Nasdaq Stockholm / First North</em>
                  </p>
                </div>
                <span className="badge job-pill">Operations · IR</span>
              </div>

              <p className="mb-3">
                Operations and Process Manager supporting CEOs and CFOs of publicly listed
                companies, translating complex regulatory and business requirements into
                reliable processes and clear communication.
              </p>

              <ul className="mb-4">
                <li>
                  Designed, built, and delivered over <strong>60 IR and corporate websites</strong> for Nasdaq
                  Stockholm and First North listed companies, developing broad cross-industry
                  knowledge across pharma, real estate, mining, space tech, gaming, security,
                  media tech, and finance.
                </li>
                <li>
                  Acted as the primary point of contact between senior management and operations,
                  aligning priorities, deliverables, investor communications, and regulatory
                  reporting timelines.
                </li>
                <li>
                  Led and developed the operations team with personnel responsibility, managing
                  day-to-day performance, training, quality standards, and systematic process
                  improvements that supported <strong>100% regulatory compliance</strong>.
                </li>
              </ul>

              <p className="small text-muted mb-0">
                <strong>Domain:</strong> Investor relations, financial reporting, regulatory compliance,
                business strategy, cross-industry domain knowledge
              </p>
            </div>
          </div>

          <div className="text-center mt-5">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-download me-2"></i> Download Full CV & References
            </a>
          </div>
        </div>
      </article>
    </div>
    </div>
  </section>
);

export default Experience;