import React from "react";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import offerings1 from "../../assets/png/offerings1.png";
import offerings2 from "../../assets/png/offerings2.png";
import services1 from "../../assets/png/services1.png";
import services2 from "../../assets/png/services2.png";
import envisage from "../../assets/png/envisage.png";
import autoUI from "../../assets/png/autoUI.png";
import epiphany from "../../assets/png/epiphany.png";
import rightIcon from "../../assets/svgs/right-icon.svg";
import "./Offerings.css";
import { useNavigate } from "react-router-dom";

const Offerings = () => {
  const navigate = useNavigate()
  const offeringsHandler =()=>{
    navigate('/solutions')
    window.scrollTo({top:0,left: 0, behavior:'smooth'})
  }
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="header__row align-items-center mb-5">
          <Col sm={12} md={6} className="mb-4 mb-lg-0">
            <h2 className="offerings__title">How Our Solutions</h2>
            <h2 className="offerings__title">Can Help You!!</h2>
          </Col>
          <Col className="d-flex tab__column">
            <Nav variant="tabs" className="flex-row">
              <Nav.Item className="nav__items">
                <Nav.Link eventKey="first">Offerings</Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav__items">
                <Nav.Link eventKey="second">Services</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row className="gy-5 gy-md-0">
                <Col md={6} className="d-flex">
                    <div className="offerings__desc">
                      <div className="d-flex flex-column ms-3 ms-lg-4 mb-4 mb-lg-0">
                        <img
                          src={epiphany}
                          className="tag_img mb-2"
                          alt="epiphany"
                        />
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item fw-bold">
                            LLM TEXT ANALYSIS using Gen AI
                          </div>
                        </div>
                        <div className="ms-5 list__item1">
                          Experience advanced text analytics with human-like
                          capabilities.
                        </div>
                      </div>
                      <div className="d-flex flex-column ms-3 ms-lg-4 mb-4 mb-lg-0">
                        <img
                          src={envisage}
                          className="tag_img mb-2"
                          alt="epiphany"
                        />
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item fw-bold">
                            IMAGE & VIDEO ANALYSIS PLATFORM using Gen AI
                          </div>
                        </div>
                        <div className="ms-5 list__item1">
                          Unlock value for your enterprise with advanced image
                          analysis.
                        </div>
                      </div>
                      <div className="d-flex flex-column ms-3 ms-lg-4 mb-4 mb-lg-0">
                        <img
                          src={autoUI}
                          className="autoAi_img mb-2"
                          alt="epiphany"
                        />
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item fw-bold">
                          DESIGN<span>.</span>
                          GENERATE. DEPLOY. EFFORTLESSLY
                          </div>
                        </div>
                        <div className="ms-5 list__item1">
                          Effortlessly design, generate, and deploy solutions
                          that elevate your business to new heights.
                        </div>
                      </div>
                    </div>
                </Col>
                <Col md={6} className="order-first order-md-last text-center">
                  <div className="mb-4 mb-md-5">
                    <img
                      src={offerings1}
                      alt="offerings image"
                      className="offerings1__img d-none d-md-block"
                    />
                    <img
                      src={offerings2}
                      alt="offerings2 image"
                      className="offerings1__img d-block d-md-none"
                    />
                  </div>

                  <Button
                    className="getStarted_btn px-4"
                    size="lg"
                    type="button"
                    onClick={offeringsHandler}
                  >
                    Explore
                  </Button>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row className="gy-5 gy-md-0">
                <Col md={6} className="d-flex">
                    <div className="offerings__desc">
                      <div className="d-flex flex-column ms-3 ms-lg-4 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item">
                            Big Data & Analytics
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column ms-3 ms-lg-4 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item">
                            Artificial Intelligence & Machine Learning{" "}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column ms-3 ms-lg-4 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item">Gen AI Solutions</div>
                        </div>
                      </div>
                      <div className="d-flex flex-column ms-3 ms-lg-4 ">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={rightIcon}
                            alt="rightIcon"
                            className="right_icon ms-2"
                          />
                          <div className="ms-3 list__item">Product Development</div>
                        </div>
                      </div>
                    </div>
                </Col>
                <Col md={6} className="order-first order-md-last text-center">
                  <div className="mb-4 mb-md-5">
                    <img
                      src={services1}
                      alt="offerings image"
                      className="offerings1__img d-none d-md-block"
                    />
                    <img
                      src={services2}
                      alt="offerings2 image"
                      className="offerings1__img d-block d-md-none"
                    />
                  </div>

                  <Button
                    className="getStarted_btn px-4"
                    size="lg"
                    type="button"
                    onClick={offeringsHandler}
                  >
                    Explore
                  </Button>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Offerings;
