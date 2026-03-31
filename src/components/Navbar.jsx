import logo from "../assets/images/db_logo.png";

const Navbar = () => (
  <header className="sticky-top">
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div className="d-flex align-items-center">
          <a
            href="https://www.linkedin.com/in/dennis-bircan-a43bb2135/"
            target="_blank"
            rel="noreferrer"
            className="text-dark mx-2"
          >
            <i className="bi bi-linkedin fs-3"></i>
          </a>
          <a
            href="https://github.com/lullak"
            target="_blank"
            rel="noreferrer"
            className="text-dark mx-2"
          >
            <i className="bi bi-github fs-3"></i>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Education
              </a>
            </li>
         {/*   <li className="nav-item">
              <a className="nav-link" href="#typecraft">
                Minigame
              </a>
            </li>*/}
            {/* <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
