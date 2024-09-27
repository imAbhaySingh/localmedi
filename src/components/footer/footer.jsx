import React from "react";
import "./footer.css";
import{FiTwitter} from 'react-icons/fi'
import{BsLinkedin} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'
import abt from "../../assets/conatct_us.png"

const footer = () => {
  return (
    <div>
    <img src={abt} className="abt"></img>
      <footer>
      <div class="footer-contact-info">
          <h4 className="contact-heading">Contact Us</h4>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: 555-555-5555</p>
          <p>Address: 123 Main St, Anytown USA</p>
        </div>
        <div class="footer-social-media">
          <h4 className="connect">Connect with us</h4>
          <ul>
            <li>
              <a href="#">
                <i class="twitter"><FiTwitter/></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="linkedin"><BsLinkedin/></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="instagram"><BsInstagram/></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-legal-info">
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div class="footer-copyright">
          <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
