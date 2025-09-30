import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h2>About Us</h2>
        <p>
          We provide premium event services including catering, photography, decoration,
          and more.
        </p>
      </div>

      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
