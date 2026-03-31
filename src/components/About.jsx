
const About = () => (
  <section id="about">
    <div className="section-inner">
    <div className="row">
      <article className="col-md-6 col-12">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-start">
            <h2>Education</h2>

            <div className="education-item mb-4">
              <h3 className="mb-1">Software Developer .NET</h3>
              <p className="text-muted mb-2">
                <em>Nackademin, Solna · Graduating May 2026</em>
              </p>
              <p className="small">
                Two-year vocational higher education programme. Core areas: .NET, C#, ASP.NET Core, API development, databases, JavaScript, TypeScript, React, object-oriented design, DevOps, CI/CD, Azure, data communication and security.
              </p>
            </div>

            <div className="education-item">
              <h3 className="mb-1">B.Sc. Business Administration</h3>
              <p className="text-muted mb-2">
                <em>Mittuniversitetet, Sundsvall · Graduated 2019</em>
              </p>
              <p className="small">
                Three-year programme focusing on business administration (ekonomie kandidatexamen). Foundation in economics, finance, operations management, and business strategy.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="col-md-6 col-12">
        <div className="card h-100 border-0 shadow-sm">
          <div className="card-body text-start d-flex flex-column gap-4">
            <h2>Languages & Interests</h2>

            <div>
              <h3 className="mb-3">Languages</h3>
              <div className="d-flex flex-wrap gap-2">
                <div className="language-pill">
                  <span className="language-name">Swedish</span>
                  <span className="language-level">Native</span>
                </div>
                <div className="language-pill">
                  <span className="language-name">English</span>
                  <span className="language-level">Fluent</span>
                </div>
                <div className="language-pill">
                  <span className="language-name">Turkish</span>
                  <span className="language-level">Proficient</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3">Interests</h3>
              <div className="d-flex flex-wrap gap-2">
                <div className="hobby-item"><span className="hobby-emoji">⚽</span> Football</div>
                <div className="hobby-item"><span className="hobby-emoji">🎮</span> Gaming</div>
                <div className="hobby-item"><span className="hobby-emoji">🎣</span> Fishing</div>
                <div className="hobby-item"><span className="hobby-emoji">🏋️</span> Gym</div>
                <div className="hobby-item"><span className="hobby-emoji">📈</span> Investing</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    </div>
  </section>
);

export default About;
