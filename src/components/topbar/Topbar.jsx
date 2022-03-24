import React, { useState } from "react";
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import "./topbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>N</span>itesh
            <span> S</span>harma
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="nav-link">
            <li> <a href="/">Home</a></li>
            <li> <a href="#">News</a></li>
            <li> <a href="#/carasoual">Photo</a></li>
            <li> <a href="#">Videos</a></li>
            <li> <a href="#">About</a></li>
            <li> <a href="#">Join Us</a></li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCr86yFtuIDkxVCI_Wu8dhSw"
                target="_blank"
              >
                <FaYoutube className="youtube" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/shivam_a07/" target="_blank">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100005456833376"
                target="_blank"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
