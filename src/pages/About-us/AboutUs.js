import React from "react";
import Header from "../../components/Navbar/Navbar";
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import aboutUsBanner from "../../assets/png/aboutUs_banner.png";
import workLife from "../../assets/png/workLife.png";
import celebrations from "../../assets/png/celebrations.png";
import celebrations1 from "../../assets/png/celebrations1.png";
import celebrations2 from "../../assets/png/celebrations2.png";
import celebrations3 from "../../assets/png/celebrations3.png";
import collaborative1 from "../../assets/png/collaborative1.png";
import collaborative2 from "../../assets/png/collaborative2.png";
import collaborative3 from "../../assets/png/collaborative3.png";
import funMore from "../../assets/png/fun&More.png";
import fun1 from "../../assets/png/fun1.png";
import fun2 from "../../assets/png/fun2.png";
import fun3 from "../../assets/png/fun3.png";
import leader1 from "../../assets/png/leader1.png";
import leader2 from "../../assets/png/leader2.png";
import leader3 from "../../assets/png/leader3.png";
import leader4 from "../../assets/png/leader4.png";
import leader5 from "../../assets/png/leader5.png";
import leader6 from "../../assets/png/leader6.png";
import avatar1 from "../../assets/png/avatar1.png";
import avatar2 from "../../assets/png/avatar2.png";
import avatar3 from "../../assets/png/avatar3.png";
import { FaGraduationCap } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import "./AboutUs.css";
import Sliders from "../../components/Slider/slider";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const workLife__imgData = [
  { img: collaborative1 },
  { img: collaborative2 },
  { img: collaborative3 },
  { img: collaborative1 },
  { img: collaborative2 },
  { img: collaborative3 },
];
const celebrations__imgData = [
  { img: celebrations1 },
  { img: celebrations2 },
  { img: celebrations3 },
  { img: celebrations1 },
  { img: celebrations2 },
  { img: celebrations3 },
];
const funMore__imgData = [
  { img: fun1 },
  { img: fun2 },
  { img: fun3 },
  { img: fun1 },
  { img: fun2 },
  { img: fun3 },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <Container className="container-lg aboutUs__container" fluid>
        <section>
          <Row className="mt-3 banner__row">
            <Col className="banner__column">
              <img src={aboutUsBanner} className="aboutUs__banner" alt="" />
              <Row className="topSection__row">
                <Col className="col-12 topSection__col d-flex">
                  <div className="topSection__block">
                    <p>Projects</p>
                    <p>100+</p>
                  </div>
                  <div className="topSection__block">
                    <p>Case Studies</p>
                    <p>40+</p>
                  </div>
                  <div className="topSection__block">
                    <p>Innovations</p>
                    <p>25+</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="tabs__row">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="tab__row mb-5">
                <Col className="col-12 col-sm-10 col-md-8 ">
                  <Nav variant="tabs" className="flex-row">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work Life</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Celebrations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Fun & More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="gy-5 gy-md-0 mb-5">
                      <Col md={6} className="d-flex">
                        <div className="">
                          <h2 className="workLife__header mb-4">
                            Our{" "}
                            <span className="brainStorm__text">
                              {" "}
                              Brainstorming!!!{" "}
                            </span>{" "}
                          </h2>
                          <p className="rewards__text mb-5">
                            Rewards & Recognitions-2024
                          </p>
                          <p className="workLife__desc mb-4">
                            Individually, we are one drop. Together, we are an
                            ocean.
                          </p>
                          <p className="workLife__desc">
                            Where our hard work, dedication and consistency is
                            truly appreciated
                          </p>
                        </div>
                      </Col>
                      <Col
                        md={6}
                        className="order-first order-md-last"
                      >
                        <div className="mb-4 mb-md-5">
                          <img
                            src={workLife}
                            alt="workLife image"
                            className="offerings1__img"
                          />
                        </div>
                      </Col>
                    </Row>
                      <Sliders data={workLife__imgData} />
    
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="gy-5 gy-md-0 mb-5">
                      <Col md={6} className="d-flex">
                        <div className="">
                          <h2 className="workLife__header mb-4">
                            Our{" "}
                            <span className="brainStorm__text">
                              {" "}
                              Celebrations!!!{" "}
                            </span>{" "}
                          </h2>
                          <p className="rewards__text mb-5">Townhall meet</p>
                          <p className="workLife__desc">
                            Opportunities to recognize & share success stories
                            of the past, answer employee concerns, give shout
                            outs to every team member
                          </p>
                          <p className="workLife__desc">
                            Welcome new hires, share company updates, provide a
                            road map for the upcoming year.
                          </p>
                        </div>
                      </Col>
                      <Col
                        md={6}
                        className="order-first order-md-last text-center"
                      >
                        <div className="mb-4 mb-md-5">
                          <img
                            src={celebrations}
                            alt="celebrations image"
                            className="offerings1__img"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Sliders data={celebrations__imgData} />
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className="gy-5 gy-md-0 mb-5">
                      <Col md={6} className="d-flex">
                        <div className="">
                          <h2 className="workLife__header mb-4">
                            Our{" "}
                            <span className="brainStorm__text">
                              {" "}
                              giggles!!!{" "}
                            </span>{" "}
                          </h2>
                          <p className="rewards__text mb-5">
                            Team Outing-Mango Mist Resort
                          </p>
                          <p className="workLife__desc">
                            Team building, team meet and greet after a long
                            hiatus of covid outbreak.
                          </p>
                          <p className="workLife__desc">
                            A day just spent casually at the resort minus the
                            work worries
                          </p>
                        </div>
                      </Col>
                      <Col
                        md={6}
                        className="order-first order-md-last text-center"
                      >
                        <div className="mb-4 mb-md-5">
                          <img
                            src={funMore}
                            alt="funMore image"
                            className="offerings1__img"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Sliders data={funMore__imgData} />
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>
          </div>
          {/* Leadership  */}
          <div className="team__row">
            <Row className="text-center mb-4">
              <Col className="col-12">
                <h4 className="team__heading">Team</h4>
              </Col>
              <Col className="col-12">
                <h3 className="leadership__heading">
                  Meet Our Executive Leadership
                </h3>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="col-12 leadership__desc text-center">
                Lucida's expert team specializes in digital transformation,
                boasting diverse skills from development to strategic analysis.
                With a focus on innovation and client satisfaction, we deliver
                cutting-edge solutions that unlock the full potential of
                applications and data.
              </Col>
            </Row>

            <Row className="gy-5 leadership__section">
              <Col className="col-12 col-sm-6 col-md-4">
                <Card className="leaders__card h-100">
                  <Row className="text-center">
                    <Col className="sm-3">
                      <Card.Img
                        variant="top"
                        className="leadership__img"
                        src={leader1}
                      />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title className="leaders__name mb-3">
                      Krishnamurthy NT
                    </Card.Title>
                    <Card.Subtitle className="leaders__role mb-3">
                      {" "}
                      <FaGraduationCap className="graduationCap__icon" /> &nbsp;
                      Co-Founder and COO
                    </Card.Subtitle>
                    <Card.Text className="leaders__desc">
                      Database Technologies expert with over 28+ years of
                      industry experience
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-sm-6 col-md-4">
                <Card className="leaders__card h-100">
                  <Row className="text-center">
                    <Col className="sm-3">
                      <Card.Img
                        variant="top"
                        className="leadership__img"
                        src={leader2}
                      />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title className="leaders__name mb-3">
                      Ramachandran Subramanian (Ramc)
                    </Card.Title>
                    <Card.Subtitle className="leaders__role mb-3">
                      {" "}
                      <FaGraduationCap className="graduationCap__icon" /> &nbsp;
                      CEO
                    </Card.Subtitle>
                    <Card.Text className="leaders__desc">
                      Over 30+ years of global IT industry experience with
                      organizations like Zensar, Accenture, TechMahindra.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-sm-6 col-md-4">
                <Card className="leaders__card h-100">
                  <Row className="text-center">
                    <Col className="sm-3">
                      <Card.Img
                        variant="top"
                        className="leadership__img"
                        src={leader3}
                      />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title className="leaders__name mb-3">
                      Banu Prakash C
                    </Card.Title>
                    <Card.Subtitle className="leaders__role mb-3">
                      {" "}
                      <FaGraduationCap className="graduationCap__icon" /> &nbsp;
                      Co-Founder and CTO
                    </Card.Subtitle>
                    <Card.Text className="leaders__desc">
                      Software Architect with over 28+ years of experience in
                      architecting/ designing/ developing complex n-tier
                      distributed applications.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-sm-6 col-md-4">
                <Card className="leaders__card h-100">
                  <Row className="text-center">
                    <Col className="sm-3">
                      <Card.Img
                        variant="top"
                        className="leadership__img"
                        src={leader4}
                      />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title className="leaders__name mb-3">
                      Suhas Dutta
                    </Card.Title>
                    <Card.Subtitle className="leaders__role mb-3">
                      <FaGraduationCap className="graduationCap__icon" />
                      Digital Transformation Advisor / Consultant
                    </Card.Subtitle>
                    <Card.Text className="leaders__desc">
                      an ex-Accenture partner, with over 30 years experience.
                      Currently runs a Strategy Consulting, and Digital
                      Transformation firm, partner to Lucida.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-sm-6 col-md-4">
                <Card className="leaders__card h-100">
                  <Row className="text-center">
                    <Col className="sm-3">
                      <Card.Img
                        variant="top"
                        className="leadership__img"
                        src={leader5}
                      />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title className="leaders__name mb-3">
                      Murali Setty
                    </Card.Title>
                    <Card.Subtitle className="leaders__role mb-3">
                      {" "}
                      <FaGraduationCap className="graduationCap__icon" /> &nbsp;
                      VP, Enterprise Architecture
                    </Card.Subtitle>
                    <Card.Text className="leaders__desc">
                      Over 20 years of experience in solution architecting and
                      designing of software systems
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-12 col-sm-6 col-md-4">
                <Card className="leaders__card h-100">
                  <Row className="text-center">
                    <Col className="sm-3">
                      <Card.Img
                        variant="top"
                        className="leadership__img"
                        src={leader6}
                      />
                    </Col>
                  </Row>
                  <Card.Body>
                    <Card.Title className="leaders__name mb-3">
                      Jahnavi Thekkada
                    </Card.Title>
                    <Card.Subtitle className="leaders__role mb-3">
                      {" "}
                      <FaGraduationCap className="graduationCap__icon" /> &nbsp;
                      VP, Analytics and Data Science
                    </Card.Subtitle>
                    <Card.Text className="leaders__desc">
                      Over 22 years experience in Data Science, Analytics and
                      Data warehousing{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Testimonial  */}
          <Testimonials />
        </section>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
