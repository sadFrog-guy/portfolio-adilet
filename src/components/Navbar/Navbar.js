import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "../Menu/Menu";
import data from "../../data";
import CV from "../../assets/Adilet Kasymbaev - CV.pdf";
import sendEventAnalytics from "../../analytics/sendEventAnalytics";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbarInner">
          <div className="navbarLeft">
            <Link to="/">
              <div className="navbarLogo">
                <span className="logoName">A</span>DILET&nbsp;&nbsp;&nbsp;<span className="logoName">K</span>ASYMBAEV
              </div>
            </Link>
          </div>
          <div className="navbarRight">
            <ul className="navbarLinks">
              <a
                href={CV}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  sendEventAnalytics({
                    category: "Resume View",
                    action: "Open CV",
                    label: "CV",
                  })
                }
              >
                <li className="navLink">Resume</li>
              </a>
            </ul>
            <div className="navbarMobile">
              <div onClick={() => setMenuOpen(true)} className="navbarBurger">
                <MenuIcon fontSize="inherit" />
              </div>
              {menuOpen && (
                <Menu pathname={pathname} setMenuOpen={setMenuOpen} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
