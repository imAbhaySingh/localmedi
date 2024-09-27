import React from "react";
import "./about_us.css";

const about_us = () => {
  return (
    <div>
      <div class="about_us_page">
        <div className="heading">
          <h1 className="heading">About Us</h1>
          <p>
            Welcome to our medical automation web-app! We are a team of
            healthcare professionals, software engineers, and data analysts who
            are passionate about making healthcare more efficient, accessible,
            and affordable for everyone.
          </p>
        </div>
        <div className="about_us-content">
          <div className="part-one">
            <div className="what-we-do">
            <h2 className="h2">What We Do</h2>
            <p>
              Our web-app is designed to help healthcare providers to automate
              various aspects of their practice, such as patient intake,
              scheduling, billing, and reporting. Our user-friendly interface
              and customizable features make it easy for providers to tailor the
              app to their unique needs and preferences.
            </p>
            </div>

            <div className="our-commitment ">
            <h2 className="cs">Our Commitment</h2>
            <p>
              We are committed to ensuring that our web-app is secure, reliable,
              and compliant with industry standards and regulations. We employ
              the latest encryption and data protection technologies to
              safeguard the confidentiality and privacy of patient information.
            </p>
            </div>
          </div>

          <div className="part-two">
            <div className="our-team">
            <h2 className="ot">Our Team</h2>
            <p>
              At the heart of our web-app is our team of experts who bring a
              wealth of knowledge and experience to the table. From medical
              professionals with decades of experience in clinical practice to
              software engineers with expertise in machine learning and
              artificial intelligence, we are united by a common goal – to
              create a better future for healthcare.
            </p>
            </div>

            <div className="our-vision">
            <h2 className="ov">Our Vision</h2>
            <p>
              We believe that our web-app has the potential to revolutionize the
              healthcare industry, by enabling healthcare providers to deliver
              better care, more efficiently, and at a lower cost. We are excited
              to be at the forefront of this transformative change, and we
              invite you to join us on this journey!
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about_us;
