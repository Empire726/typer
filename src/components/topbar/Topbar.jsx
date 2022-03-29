import React, { useState } from "react";
import { FaFacebookSquare, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import "./topbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const handleClick = () => setShowMediaIcons(!showMediaIcons);


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
          <ul className="nav-link" >
            <li > <a href="/#" onClick={handleClick}>Home</a></li>
            <li> <a href="/#post" onClick={handleClick}>News</a></li>
            <li> <a href="/#cara" onClick={handleClick}>Photo</a></li>
            <li> <a href="/#youtube" onClick={handleClick}>Videos</a></li>
            <li> <a href="/#" onClick={handleClick}>About</a></li>
            <li> <a href="/#footer" onClick={handleClick}>Join Us</a></li>
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

          <div className="hamburger-menu" onClick={handleClick} >
            <a href="#" >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
