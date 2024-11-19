import { useState } from "react";
// Active Link Functionality Only (Tanpa Firebase)
const Header = () => {
  const [activeLink, setActiveLink] = useState("#about");

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                Aprillia's Portfolio
              </a>
            </div>
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="smooth-menu">
                  <a
                    href="#about"
                    className={activeLink === "#about" ? "active" : ""}
                    onClick={() => handleSetActive("#about")}
                  >
                    About
                  </a>
                </li>
                <li className="smooth-menu">
                  <a
                    href="#education"
                    className={activeLink === "#education" ? "active" : ""}
                    onClick={() => handleSetActive("#education")}
                  >
                    Education
                  </a>
                </li>
                <li className="smooth-menu">
                  <a
                    href="#experience"
                    className={activeLink === "#experience" ? "active" : ""}
                    onClick={() => handleSetActive("#experience")}
                  >
                    Experience
                  </a>
                </li>
                <li className="smooth-menu">
                  <a
                    href="#profiles"
                    className={activeLink === "#profiles" ? "active" : ""}
                    onClick={() => handleSetActive("#profiles")}
                  >
                    Profiles
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
