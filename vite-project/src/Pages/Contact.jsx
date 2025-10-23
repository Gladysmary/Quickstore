import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out! Contact us through any of the following means...</p>
          <div className="contact-info">
            <div className="contact-item">
              <h4>Email</h4>
              <p>amuagatha@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4>Phone Number</h4>
              <p>+234 815 612 6482</p>
            </div>
            <div className="contact-item">
              <h4>Address</h4>
              <p>Navy Estate, Karshi, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
