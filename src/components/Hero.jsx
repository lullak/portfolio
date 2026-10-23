import picture from "../assets/images/Db_forest.jpeg";
import cv from "../assets/files/Dennis_Bircan_CV.pdf";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="container">
      <div className="row align-items-center g-5">

        {/* Left: photo + contact */}
        <div className="col-lg-4 col-md-5 text-center">
          <img
            src={picture}
            alt="Dennis Bircan"
            className="hero-photo mb-4"
          />
          <h1 className="h2 mb-2">Dennis Bircan</h1>
          <p className="hero-title mb-4">Backend .NET Software Developer</p>

          <div className="d-flex justify-content-center gap-3 mb-5">
            <a
              href="https://www.linkedin.com/in/dennis-bircan-a43bb2135/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="Open Dennis Bircan&apos;s LinkedIn profile"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/lullak"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social"
              aria-label="Open Dennis Bircan&apos;s GitHub profile"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>

          <div className="d-flex flex-column gap-2">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100"
            >
              <i className="bi bi-download me-2"></i> Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/dennis-bircan-a43bb2135/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark w-100"
            >
              Contact me on LinkedIn
            </a>
          </div>
        </div>

        {/* Right: profile paragraph + skill tags */}
        <div className="col-lg-8 col-md-7">
          <div className="hero-content">
            <p className="hero-paragraph mb-5">
              Backend developer with a background in economics, finance, and
              operations management. Six years working directly with CEOs and CFOs
              of publicly listed companies built a strong ability to understand
              complex business logic and translate it into practical technical
              solutions. Combined with hands-on experience in event-driven systems,
              integrations, and CI/CD, that business perspective helps me build
              backend software that solves the right problems.
            </p>

            <div>
              <p className="small text-muted mb-3 text-uppercase fw-bold letter-spaced">Key Technologies</p>
              <div className="d-flex flex-wrap gap-2">
                {[
                  ".NET & C#",
                  "Event-Driven",
                  "Kafka",
                  "Azure Cloud",
                  "CI/CD",
                  "Docker",
                  "REST APIs",
                  "AI-Assisted Dev",
                  "Business Domain",
                ].map((tag) => (
                  <span key={tag} className="hero-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
