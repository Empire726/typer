import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact">
                <h2>Get In Touch</h2>
                <p><i className="fas fa-phone" />+012 345 67890</p>
                <p><i className="fa fa-envelope" />Gmail address@example.com</p>
                <div className="footer-social">
                  <a className="btn" href><i className="fab fa-twitter" /></a>
                  <a className="btn" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn" href><i className="fab fa-youtube" /></a>
                  <a className="btn" href><i className="fab fa-instagram" /></a>
                  <a className="btn" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>INFORMATION</h2>
                <a href>Home</a>
                <a href>Privacy & Policy</a>
                <a href>Terms & condition</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h2>Contact Info</h2>
                <a href>Monday-Sunday</a>
                <a href>Hansi,India</a>
                <a href>Help</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <form>
                  <input type="text" className="form-control" placeholder="Full Name" />
                  <input className="form-control" placeholder="Email" />
                  <button className="btn btn-custom">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>©<a href="#">abcnews.in</a>, All Right Reserved. Designed By <a href="Coder.IN">NEXT CODER</a></p>
        </div>
      </div>
      
    </>
  )
}

export default Footer;