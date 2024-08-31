import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import solution from "../../assets/png/solution.png";

import "./BusinessSolutions.css";
import RequestForm from "../Forms/RequestForm";
import { useNavigate } from "react-router-dom";

const BusinessSolutions = () => {
  const navigate = useNavigate();
  const goToContactPage = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Row className="header__row align-items-center mb-4">
        <Col sm={12} className="header__column">
          <h2 className="offerings__title">How to Choose a perfect solution</h2>
          <h2 className="offerings__title">To Your Business</h2>
        </Col>
      </Row>
      <Row className="gy-2 gy-md-0">
        <Col md={6} className="solutions__column">
          <div className="d-flex solutions__content mb-5">
            <div className="solutions__desc ms-3 ms-md-4">
            <p className="content m-0">
                When it comes to choosing the perfect solution for your
                business, it's essential to take a comprehensive approach that
                aligns with your unique needs and goals. At Lucida Technologies,
                we understand that every business is different, and that's why
                we offer personalized consultations to help you find the right
                fit. We believe in building long-lasting partnerships with our
                clients.
              </p>
            </div>
          </div>

          <Row>
            <Col className="mx-auto button__group">
              <Button
                className="contact_btn px-3 px-md-4 "
                type="button"
                onClick={goToContactPage}
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Col>

        <Col
          md={6}
          className="order-first order-md-last text-center mb-5 mb-md-0"
        >
          <div>
            <img
              src={solution}
              alt="offerings image"
              className="solutions__img "
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BusinessSolutions;
