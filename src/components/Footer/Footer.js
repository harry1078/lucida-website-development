import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/png/lucida logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToHomePage = ()=>{
    navigate('/')
    window.scrollTo(0, 0)
  }
  const goToAboutUsPage = ()=>{
    navigate('/about')
    window.scrollTo({top:0,left: 0, behavior:'smooth'})
  }
  const goToSolutionsPage = ()=>{
    navigate('/solutions')
    window.scrollTo({top:0,left: 0, behavior:'smooth'})
  }
  const goToResourcesPage = ()=>{
    navigate('/resources')
    window.scrollTo({top:0,left: 0, behavior:'smooth'})
  }
  const goToContactPage = ()=>{
    navigate('/contact')
    window.scrollTo({top:0,left: 0, behavior:'smooth'})
  }
  return (
    <>
      <Container className="container-lg mt-md-3 mt-lg-5" fluid>
        <Row className="footer__section">
          <img src={logo} className="lucida_logo mb-4" />
          <div>
            <Row className="footer__row">
              <Col className="col-sm-6 col-md-2">
                <h1 className="footer__header mb-2.5 mb-md-4">company</h1>
                <ul className="company__ul bottom__nav">
                  <li>
                    <p onClick={goToHomePage}>Home</p>
                  </li>
                  <li>
                    <p onClick={goToAboutUsPage}>About Us</p>
                  </li>
                  <li>
                    <p onClick={goToSolutionsPage}>Solutions</p>
                  </li>
                  <li>
                    <p onClick={goToResourcesPage}>Resources</p>
                  </li>
                  <li>
                    <p onClick={goToContactPage}>Contact</p>
                  </li>
                </ul>
              </Col>
              <Col className="col-sm-6 col-md-3 address__col">
                <h1 className="footer__header mb-2.5 mb-md-4">Address</h1>
                <p>
                  #3980/3981, 80 Feet Rd
                  <br />
                  1st phase, Girinagar, 3rd Block
                  <br />
                  BSK 3rd Stage
                  <br />
                  Bengaluru - 560 085
                </p>
              </Col>
              <Col className="col-sm-6 col-md-4">
                <h1 className="footer__header mb-2.5 mb-md-4">contact</h1>
                <div className="footer-widget">
                  <ul className="company__ul">
                    <li>
                      <span>
                        <p><FaPhoneAlt/> +91 9739049299</p>
                      </span>
                    </li>
                    <p></p>

                    <li>
                      <span>
                        <p><FaEnvelope /> info@lucidatechnologies.com</p>
                      </span>
                    </li>
                    <li>
                      <span>
                        <p><FaGlobe/> www.lucidatechnologies.com</p>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget social-widget">
                  <ul className="social-icons company__ul">
                    <li>
                      <div className="icon__box fb">
                        <a
                          className="facebook"
                          target="_blank"
                          href="https://www.facebook.com/lucidatechnologies/"
                        >
                          <FaFacebookF />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon__box twt">
                        <a
                          className="twitter"
                          target="_blank"
                          href="https://twitter.com/lucida_tech"
                        >
                          <FaTwitter />
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="icon__box linkedIn">
                        <a
                          className="linkedin"
                          target="_blank"
                          href="https://www.linkedin.com/company/lucidatech/"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
             
            </Row>
          </div>

          <div className="copyright-section">
            <div className="copyright__row">
                <p>© 2024 Lucida Technologies Pvt Ltd | All Rights Reserved.</p>

                <ul className="footer_nav">
                  <li>
                    <a href="privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="contact">Terms &amp; Conditions</a>
                  </li>
                </ul>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
