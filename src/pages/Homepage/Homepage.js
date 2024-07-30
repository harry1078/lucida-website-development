import React from "react";
import Header from "../../components/Navbar/Navbar";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import banner from "../../assets/png/section1_banner.png";
import banner2 from "../../assets/png/section1_banner2.png";
import thumbnailBanner from "../../assets/png/thumbnail.png";
import nextGenIcon from "../../assets/svgs/nextGen-Icon.svg";
import genAiIcon from "../../assets/svgs/genAi-Icon.svg";
import contractIcon from "../../assets/svgs/contract-Icon.svg";
import rightIcon from "../../assets/svgs/right-icon.svg";

import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Header />
      <Container className="container-lg mt-xs-2.5 mt-md-3 mt-lg-5" fluid>
        {/* Top Section */}
        <section className="mb-5">
          <Row>
            <Col sm={12} md={12} lg={6} className="mt-4 col1">
              <h2 className="mb-5 top_header">
                The impetus for embarking on your {""}
                <span className="digital__transformation">
                  digital transformation
                </span>{" "}
                voyage.
              </h2>
              <div className="d-flex mb-5">
                <div className="vertical_line"></div>
                <div className="description ms-4">
                  <p className="content pe-lg-4">
                    At Lucida, we understand that digital transformation is more
                    than just implementing new technologies. It's a holistic
                    approach that requires a deep understanding of your
                    business, your customers, and the challenges you face. Our
                    team of experts work closely with you to develop a tailored
                    digital transformation strategy that aligns with your
                    organizational goals and objectives.
                  </p>
                  <p className="">&nbsp;</p>
                  <p className="content pe-lg-4">
                    <b>
                      Venture  on your digital transformation journey with
                      Lucida, the catalyst that will propel your business into a
                      future of endless possibilities.
                    </b>
                  </p>
                </div>
              </div>
              <Row>
                <Col className="mx-auto text-center">
                  <Button
                    className="getStarted_btn px-4"
                    size="lg"
                    type="button"
                  >
                    Get Started
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="column2nd p-3 p-lg-0 order-first order-lg-last"
            >
              <img src={banner} className="banner_img d-none d-lg-block" />
              <img src={banner2} className="banner_img d-block d-lg-none" />
            </Col>
          </Row>
        </section>
        {/* Services Section  */}
        <section className="service__section">
          <h4 className="service__text mb-4 mb-md-5">Services</h4>
          <div className="d-flex justify-content-between align-items-center headerDiv mb-4 mb-lg-5">
            <h3 className="title">The Future of Digital Solutions is Here</h3>
            <div>
              <span className="see_all">See All</span>
            </div>
          </div>
          <Row className="gy-5 justify-content-center ">
            <Col className="col-12 col-sm-6 col-md-4 card_col">
              <Card className="cards h-100 ">
                <Card.Img
                  variant="top"
                  className="top_icon mt-4"
                  src={nextGenIcon}
                  width={79}
                  height={83}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="card_title">
                    Next Gen Technology Services
                    <div className="d-flex justify-content-center my-4">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">
                          Big Data Analytics and AI/ML
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">
                          AI automated Product Development
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                  <div className="read_more text-center">Read More</div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-md-4 card_col">
              <Card className="cards h-100 ">
                <Card.Img
                  variant="top"
                  className="card_icon mt-4"
                  src={genAiIcon}
                  width={79}
                  height={83}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="card_title">
                    Tool Suite for Smart Future
                    <div className="d-flex justify-content-center my-4">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">GenAI - Epiphany</div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">GenAI - Chatbot</div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">GenAI - envisage</div>
                      </div>
                    </div>
                  </Card.Text>
                  <div className="read_more text-center">Read More</div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-md-4 card_col">
              <Card className="cards h-100 ">
                <Card.Img
                  variant="top"
                  className="card_icon mt-4"
                  src={contractIcon}
                  width={79}
                  height={83}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="card_title">
                    Next Gen Technology Services
                    <div className="d-flex justify-content-center my-4">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">
                          Expertise and Specialized Knowledge
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">
                          Flexibility and Scalability
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src={rightIcon}
                          alt="rightIcon"
                          className="right_icon"
                        />
                        <div className="desc ms-3">
                          Cost-Effective Solutions
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                  <div className="read_more text-center">Read More</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        {/* Business & Solution Section  */}
        <section className="business__section">
          <Row className="gy-2 justify-content-between mb-5">
            <Col className="col-12 col-md-6">
              <h4 className="title">Your Business. Our Solutions.</h4>
            </Col>
            <Col className="col-12 col-md-5">
              <div class="vision_text">
                Build your vision product with our cutting edge solutions and
                technologies
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <img
                className="business_img"
                src={thumbnailBanner}
                alt="sample_img"
                width={840}
                height={460}
              />
            </Col>
          </Row>
        </section>
        {/* Case Study Section  */}
        <section className="caseStudy__section">
          <h4 className="caseStudy__header mb-5">Check Out Our Case Studies</h4>
          <Row className="d-flex flex-sm-column flex-md-row">
            <Col className="col-sm-12 col-md-4 p-0">
              <div className="d-flex flex-column flex-sm-row flex-md-column">
                <Card className="card_layout h-100">
                  <Card.Body>
                    <Card.Title className="caseStudy__title">
                      Text Duo
                    </Card.Title>
                    <Card.Text className="caseStudy__description">
                      Intelligent Insights: Summarize and Extract, Effortlessly
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card_layout h-100">
                  <Card.Body>
                    <Card.Title className="caseStudy__title">
                      OptiScan
                    </Card.Title>
                    <Card.Text className="caseStudy__description">
                      Text Discovery, Powered by AI Dialogue
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="col-sm-12 col-md-4 p-0">
              <div className="d-flex flex-column flex-sm-row flex-md-column">
                <Card className="card_layout h-100">
                  <Card.Body>
                    <Card.Title className="caseStudy__title">
                      Speechscribe
                    </Card.Title>
                    <Card.Text className="caseStudy__description">
                      Speech to Script, Powered by AI
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card_layout h-100">
                  <Card.Body>
                    <Card.Title className="caseStudy__title">PnID</Card.Title>
                    <Card.Text className="caseStudy__description">
                      P&ID Automation, Elevated by AI Vision
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="col-sm-12 col-md-4 p-0">
              <div className="d-flex flex-column flex-sm-row flex-md-column">
                <Card className="card_layout h-100">
                  <Card.Body>
                    <Card.Title className="caseStudy__title">
                      Senti-Mentify
                    </Card.Title>
                    <Card.Text className="caseStudy__description">
                      Emotional Intelligence, Elevated by AI
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card_layout h-100">
                  <Card.Body>
                    <Card.Title
                      className="caseStudy__title"
                      id="traffic__title"
                    >
                      Traffic Surveillance System
                    </Card.Title>
                    <Card.Text className="caseStudy__description">
                      AI-Powered Traffic Transparency, Through CCTV Lenses
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Homepage;
