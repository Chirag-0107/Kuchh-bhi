import React from "react";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import "./Contact.css";
import Logo from "./assets/download.jpeg"
import { Link } from "react-router";
export default function Contacts() {
  return (
    <div className="contact-container">
      <h3 className="contact-heading">Contacts</h3>

      <div className="contact-wrapper">
        <div className="contact-map">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.210618329009!2d77.5131006741615!3d28.473203091300576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7ee9000001%3A0xbbdba26b85bfef6b!2sAinwik%20Infotech!5e0!3m2!1sen!2sin!4v1753899636849!5m2!1sen!2sin"
  width="700"
  height="500"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <textarea rows="6" placeholder="Message"></textarea>
          <button className="hoverSubmit" type="submit">
            Send Message
          </button>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-grid">
          <div className="footer-section">
            <img
              src={Logo}
              alt="AINWIK"
            />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              AINWIK INFOTECH
            </p>
            <p style={{ textAlign: "justify", padding: "0 10px" }}>
              Ainwik Infotech is providing the best software development platform and industrial training.
            </p>
            <div className="footer-social">
              <ul>
                <Link to="https://www.facebook.com/people/Ainwik-Infotech/100064115341870/?mibextid=LQQJ4d"><li><FaFacebook /></li></Link>
                <Link to="https://www.instagram.com/ainwikinfotech/?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr#"><li><FaInstagram /></li></Link>
                <Link to="https://www.youtube.com/@ainwikinfotech5006"><li><IoLogoYoutube /></li></Link>
              </ul>
            </div>
          </div>

          <div className="footer-section changecol" >
            <p style={{ fontWeight: "bold" }}>Useful Links</p>
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About us</p></Link>
            <Link to="/login"><p>Registration</p></Link>
            <Link to="/courses"><p>Apply</p></Link>
          </div>

          <div className="footer-section changecol" id="service">
            <p style={{ fontWeight: "bold" }}>Our Services</p>
            <p>Training</p>
            <p>Placement</p>
            <p>Development</p>
          </div>

          <div className="footer-section changecol">
            <p style={{ fontWeight: "bold" }}>Contact Us</p>
            <p>Om Tower 8th Floor Alpha-I Commercial Belt Greater Noida</p>
            <p><strong>Phone:</strong> +91 8178104315</p>
            <p><strong>Email:</strong> info@ainwikinfotech.in</p>
          </div>
        </div>

        <div className="copyright-bar">
          <p>© Copyright 2025 Ainwik Infotech All Rights Reserved</p>
          <p>Designed by Chirag,Kishan,Fauzan,Kirti,Inderpreet</p>
        </div>
      </div>
    </div>
  );
}
