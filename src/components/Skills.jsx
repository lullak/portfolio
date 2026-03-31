import { useState } from "react";

const categories = [
  {
    label: "Backend",
    skills: [
      { title: ".NET · C#", desc: "The language I think in — OOP, LINQ, async/await, and building production-grade services from the ground up." },
      { title: "ASP.NET Core", desc: "My go-to for APIs, background services, and microservices — from routing and middleware to dependency injection and hosted services." },
      { title: "REST APIs · gRPC", desc: "Designing and consuming service-to-service contracts, both HTTP-based REST and binary gRPC for performance-sensitive communication." },
      { title: "Testing", desc: "Unit and integration tests with xUnit and NUnit — including in-memory databases to test data access without mocking away the interesting parts." },
    ],
  },
  {
    label: "Messaging & Events",
    skills: [
      { title: "Kafka", desc: "Building event-driven pipelines where services communicate asynchronously — reliable, scalable, and decoupled by design." },
    ],
  },
  {
    label: "Data & Storage",
    skills: [
      { title: "SQL Server · PostgreSQL", desc: "Writing queries, designing schemas, and managing migrations — comfortable in both SQL Server and PostgreSQL environments." },
      { title: "EF Core · ADO.NET", desc: "ORM for everyday data access and migrations, with ADO.NET when raw performance or fine-grained control matters more." },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { title: "Azure", desc: "Functions, Service Bus, Communication Services — building and integrating cloud-native services in a real Azure environment." },
      { title: "Containerization", desc: "Docker for local dev and deployment, OpenShift for orchestration — containerizing services end to end." },
      { title: "CI/CD & Automation", desc: "Building pipelines with GitHub Actions — automated testing, build validation, and deployment on every push." },
      { title: "Monitoring & Observability", desc: "Grafana dashboards, structured logging, and distributed tracing to keep production systems visible and debuggable." },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { title: "React · TypeScript", desc: "Component architecture, hooks, and type-safe data handling — enough to build and ship a full frontend independently." },
    ],
  },
  {
    label: "Architecture",
    skills: [
      { title: "SOLID · Design Patterns", desc: "Applying SOLID principles and patterns like repository, factory, and strategy to keep codebases maintainable as they grow." },
      { title: "Security", desc: "JWT-based auth, HTTPS, role-based authorization — securing APIs from the ground up rather than bolting it on later." },
    ],
  },
  {
    label: "AI & Tooling",
    skills: [
      { title: "AI-Assisted Development", desc: "Integrating AI tools into the development workflow — faster iteration, smarter code review, and better problem-solving without losing ownership of the code." },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <section id="skills">
        <div className="section-inner">
        <h2>Technical Skills</h2>

        <div className="skills-tabs">
          <div className="skills-tab-list">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                className={`skills-tab-btn${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skill-cards mt-4">
            {categories[active].skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <span className="skill-title">{s.title}</span>
                <div className="small text-muted">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-inner">
          <h2>Projects</h2>

          <div className="github-cta-card d-flex flex-column align-items-center justify-content-center text-center">
            <i className="bi bi-github github-cta-icon mb-4"></i>
            <h3 className="mb-2">Most of my work is private</h3>
            <p className="text-muted mb-4">
              Production code lives in private repos. What's public on GitHub is mostly school projects and early experiments — not a full picture, but it shows the trajectory. More is coming.
            </p>
            <a
              href="https://github.com/lullak"
              target="_blank"
              rel="noreferrer"
              className="btn github-cta-btn"
            >
              <i className="bi bi-github me-2"></i> View my GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
