import React, {useEffect, useState} from "react";
import ContactForm from "../Contact/index.js";


function Nav(props) {
  const { navLinks = [], 
    setCurrentNavLink, 
    currentNavLink,
    setShowResume
   } = props;

  useEffect(() => {
    document.title = currentNavLink.name;
  }, [currentNavLink]);

  const [showForm, setShowForm] = useState(false);
 

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const toggleResume = () => {
    setShowResume((prev) => !prev)
  }

  return (
    <header className="container-fluid">
      <section className="d-flex flex-row ">
        <div className="d-flex ms-auto">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler collapsed d-flex d-lg-none d-flex flex-column 
                                justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarToggleExternalContent"
            >
              <ul className="navbar-nav">
                {navLinks.map((navLink) => (
                  <li key={navLink.name}>
                    <span>
                      <a
                        className={`nav-item ${
                          currentNavLink.name === navLink.name && "navActive"
                        }`}
                        href={"#" + navLink.name}
                        onClick={() => {
                          if (navLink.name === "Contact") {
                            toggleForm();
                          } else {
                            setCurrentNavLink(navLink);
                            setShowForm(false)
                          }
                          if (navLink.name === "Resume") {
                            toggleResume();                          
                          } else {
                            setCurrentNavLink(navLink);
                            setShowResume(false)
                          }
                          setCurrentNavLink(navLink);
                        }}
                      >
                        {navLink.name}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
      {<ContactForm showForm={showForm} setShowForm={setShowForm} />}
    </header>
  );
}


export default Nav;
