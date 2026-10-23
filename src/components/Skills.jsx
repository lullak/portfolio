import { useRef, useState } from "react";

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
      { title: "Kafka · TIBCO", desc: "Working with event-driven and enterprise messaging systems where services and business processes communicate asynchronously." },
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
      { title: "Kubernetes · AKS · OpenShift", desc: "Working with Kubernetes-based environments across Azure Kubernetes Service (AKS) and OpenShift, including service migration and deployment workflows." },
      { title: "Docker", desc: "Containerizing backend services for local development, testing, and deployment across Kubernetes-based environments." },
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
  const tabRefs = useRef([]);
  const activeCategory = categories[active];

  const handleTabKeyDown = (event) => {
    let nextIndex = active;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (active + 1) % categories.length;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex = (active - 1 + categories.length) % categories.length;
    }

    if (nextIndex !== active) {
      setActive(nextIndex);
      requestAnimationFrame(() => tabRefs.current[nextIndex]?.focus());
    }
  };

  return (
    <>
      <section id="skills">
        <div className="section-inner">
        <h2>Technical Skills</h2>

        <div className="skills-tabs">
          <div className="skills-tab-list" role="tablist" aria-label="Technical skill categories">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                id={`skill-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls="skill-panel"
                tabIndex={active === i ? 0 : -1}
                ref={(element) => {
                  tabRefs.current[i] = element;
                }}
                className={`skills-tab-btn${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
                onKeyDown={handleTabKeyDown}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            id="skill-panel"
            className="skill-cards mt-4"
            key={activeCategory.label}
            role="tabpanel"
            aria-labelledby={`skill-tab-${active}`}
            tabIndex="0"
          >
            {activeCategory.skills.map((s) => (
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
          <h2>Public Work</h2>

          <div className="github-cta-card d-flex flex-column align-items-center justify-content-center text-center">
            <i className="bi bi-github github-cta-icon mb-4"></i>
            <h3 className="mb-2">Most of my work is private</h3>
            <p className="text-muted mb-4">
              Most production work is private, so GitHub shows selected school
              projects and early experiments rather than the full picture. It is
              still the best place to see how my work is developing.
            </p>
            <a
              href="https://github.com/lullak"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github-cta-btn"
            >
              <i className="bi bi-github me-2"></i> View public work on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
