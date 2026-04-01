import cv from "../assets/files/DB_CV.pdf";

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
                  <h3 className="mb-1">PostNord – Software Developer Intern</h3>
                  <p className="text-muted mb-3">
                    <i className="bi bi-calendar3 me-2"></i>
                    <em>Nov 2025 — May 2026 · International Mail Division</em>
                  </p>
                </div>
                <span className="badge job-pill">Backend · .NET</span>
              </div>

              <p className="mb-3">
                .NET backend developer within the International Mail division, working on
                event-driven microservices that connect internal systems and external partners,
                following agile practices with high requirements on reliability, traceability,
                and regulatory compliance.
              </p>

              <ul className="mb-4">
                <li>
                  Led the full rewrite of a legacy EDI processing service, replacing
                  regex-based parsing with a typed, model-driven approach. Upgraded the
                  codebase from .NET Core 3.1 to .NET 10, adding unit tests with NUnit as part
                  of the effort.
                </li>
                <li>
                  Delivered multiple production fixes, including merging duplicate events
                  where one was empty to ensure correct field mapping, correcting a legacy
                  EDI bug that displayed service names instead of locations, and replacing
                  a byte-by-byte image comparison in a legacy IPS service that was degrading
                  database performance.
                </li>
                <li>
                  Contributed to the CI/CD pipeline setup and the migration from Bitbucket
                  to GitHub across all repositories in the International Mail division, working
                  with repository structure, branching strategy, and GitHub Actions workflows.
                </li>
                <li>
                  Selected as part of PostNord's internal AI pilot study, working with
                  AI-assisted development tools including GitHub Copilot.
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
                Operations and Process Manager with deep expertise in investor relations, regulatory
                compliance, and supporting C-suite executives (CEOs, CFOs) of publicly listed companies.
                Mastered complex regulatory requirements and translated business needs into operational excellence
                across multiple industries and stakeholders.
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
                  ensuring alignment on priorities, processes, and deliverables. Managed all
                  investor communication touch-points and regulatory reporting timelines.
                </li>
                <li>
                  Led and developed the operations team with personnel responsibility, managing
                  day-to-day performance, training, and quality standards.
                </li>
                <li>
                  Ensured <strong>100% regulatory compliance</strong> with Nasdaq Stockholm and First North
                  disclosure requirements across all client platforms and communications through
                  systematic process documentation and auditing.
                </li>
                <li>
                  Drove continuous process improvements that increased efficiency, reduced errors,
                  and elevated the quality of investor communications and financial reporting output.
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