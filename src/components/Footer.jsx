import logo from "../assets/images/db_logo.png";

const Footer = () => (
  <footer className="bg-light">
    <div className="row">
      <div className="col-12 d-flex justify-content-center py-3">
        <a href="#hero" aria-label="Back to the top">
          <img src={logo} alt="Dennis Bircan" className="logo" />
        </a>
      </div>
      <div className="col-12 d-flex justify-content-center py-3">
        <a
          href="https://www.linkedin.com/in/dennis-bircan-a43bb2135/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark mx-2"
          aria-label="Open Dennis Bircan&apos;s LinkedIn profile"
        >
          <i className="bi bi-linkedin fs-3"></i>
        </a>
        <a
          href="https://github.com/lullak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark mx-2"
          aria-label="Open Dennis Bircan&apos;s GitHub profile"
        >
          <i className="bi bi-github fs-3"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
