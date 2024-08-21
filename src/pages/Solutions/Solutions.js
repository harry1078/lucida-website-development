import React from "react";
import Header from "../../components/Navbar/Navbar";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import epiphiny from "../../assets/png/epiphany1.png";
import envisage from "../../assets/png/envisage.png";
import autoUI from "../../assets/png/autoUI.png";
import epiphany from "../../assets/png/epiphany.png";
import envisage1 from "../../assets/png/envisage1.png";
import autoUI1 from "../../assets/png/autoUI1.png";
import bigData1 from "../../assets/png/bigData1.png";
import ml1 from "../../assets/png/ML1.png";
import product1 from "../../assets/png/product1.png";
import gen1 from "../../assets/png/GenAi1.png";
import "./Solutions.css";
import Footer from "../../components/Footer/Footer";

const Solutions = () => {
  return (
    <>
      <Header />
      <Container className="container-lg solutions__container" fluid>
        <Row className="justify-content-center mb-5">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="tab__row  align-items-center my-5">
              <Col className="col-12 col-sm-6 col-md-6 d-flex tab__column">
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
                  <div>
                    <Row className="details">
                      <Col className="col-12 col-sm-12  col-md-6 epiphany__col1">
                        <div className="d-flex gap-3 gap-md-4 ">
                          <span className="number">1</span>
                          <img src={epiphany} className="section__img" alt="epiphany" />
                        </div>

                        <div className="epiphany__title my-5">
                          LLM TEXT ANALYSIS using Gen AI
                        </div>

                        <div className="epiphany__subtitle">
                          Experience advanced text analytics with human-like
                          capabilities.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 epiphany__col2">
                        <img src={epiphiny} className="epiphiny1__img" />
                      </Col>
                      <Col className="col-12">
                        <p className="epiphany__desc">
                          Structured and unstructured text formats present an
                          abundant source of rich information, offering vast
                          potential for insights and analysis. Our product,
                          Epiphany, harnesses this potential by utilizing a
                          powerful and flexible analytics framework, powered by
                          large language models (LLMs). Epiphany excels at
                          processing and interpreting diverse data types, from
                          well-organized databases to free-form text such as
                          emails, reports, and social media posts. By leveraging
                          LLMs, Epiphany can comprehend context, identify
                          patterns, and extract meaningful insights from both
                          structured and unstructured data. This enables
                          businesses to make informed decisions, uncover hidden
                          trends, and gain a deeper understanding of their data,
                          driving innovation and growth.
                        </p>
                      </Col>
                    </Row>
                    <Row className="details">
                      <Col className="col-12 col-sm-12 col-md-6">
                        <div className="d-flex gap-3 gap-md-4 ">
                          <span className="number">2</span>
                          <img src={envisage} className="section__img" alt="envisage" />
                        </div>

                        <div className="epiphany__title my-5">
                          IMAGE & VIDEO ANALYSIS PLATFORM using Gen AI
                        </div>

                        <div className="epiphany__subtitle">
                          Unlock value for your enterprise with advanced image
                          analysis.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 epiphany__col2">
                        <img src={envisage1} className="epiphiny1__img" />
                      </Col>
                      <Col className="col-12">
                        <p className="epiphany__desc">
                          Enterprises often possess unstructured datasets in the
                          form of images and videos, containing hidden insights
                          of significant value. Lucida’s Envisage Image Analysis
                          Platform leverages large language models (LLMs) and
                          advanced image analytics to extract, analyse, and
                          process information from these visual data sources.
                          This powerful platform enables enterprises to
                          capitalize on various applications, including threat
                          detection, annotation, summarization, and object
                          tracking. By mining visual data, the Envisage Image
                          Analysis Platform provides updated information and
                          actionable triggers, aiding in informed
                          decision-making.
                        </p>
                      </Col>
                    </Row>
                    <Row className="details">
                      <Col className="col-12 col-sm-12 col-md-6">
                        <div className="d-flex gap-3 gap-md-4 ">
                          <span className="number">3</span>
                          <img src={autoUI} className="section__img" id='autoUI' alt="autoAI image" />
                        </div>

                        <div className="epiphany__title my-5">
                          DESIGN<span>.</span>
                          GENERATE. DEPLOY. EFFORTLESSLY
                        </div>

                        <div className="epiphany__subtitle">
                          Effortlessly design, generate, and deploy solutions
                          that elevate your business to new heights.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 epiphany__col2">
                        <img src={autoUI1} className="epiphiny1__img" />
                      </Col>
                      <Col className="col-12">
                        <p className="epiphany__desc">
                          Lucida offers a groundbreaking platform that utilizes
                          GenAI for the automated coding of user interfaces
                          (UI). This innovative solution simplifies and
                          accelerates the development process by leveraging
                          advanced AI algorithms to generate high-quality,
                          responsive UI code automatically. Lucida's platform
                          analyzes design inputs and user requirements,
                          transforming them into functional and aesthetically
                          pleasing interfaces without the need for extensive
                          manual coding. This automation not only reduces
                          development time and costs but also ensures
                          consistency and precision in the final product. By
                          integrating GenAI into the UI development process,
                          Lucida empowers enterprises to rapidly create, test,
                          and deploy user interfaces, enhancing user experiences
                          and driving digital transformation with unmatched
                          efficiency and creativity.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
                    <Row className="details">
                      <Col className="col-12 col-sm-12 col-md-6">
                        <div className="d-flex align-items-baseline gap-3 gap-md-4 ">
                          <span className="number">1</span>
                          <div className="analytics__title my-5">
                            Big Data & Analytics
                          </div>
                        </div>
                        <div className="analytics__subtitle">
                          we offer comprehensive Big Data and Analytics as a
                          Service to help businesses unlock the full potential
                          of their data.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 analytics_col2">
                        <img src={bigData1} className="bigData1__img" />
                      </Col>
                      <Col className="col-12">
                        <p className="epiphany__desc">
                        Our solutions are designed to manage, process, and analyze large volumes of data efficiently, providing you with actionable insights and strategic intelligence. By leveraging advanced analytics, machine learning, and real-time data processing, Lucida enables you to uncover hidden trends, optimize operations, and make data-driven decisions. Our expert team supports you through every step, from data ingestion to visualization, ensuring seamless integration and maximum impact. With Lucida’s Big Data and Analytics services, transform your data into powerful tools for innovation and growth.
                        </p>
                      </Col>
                    </Row>
                    <Row className="details">
                      <Col className="col-12 col-sm-12 col-md-6">
                        <div className="d-flex align-items-baseline gap-3 gap-md-4 mb-5">
                          <span className="number">2</span>
                          <div className="analytics__title">
                          Artificial Intelligence & Machine Learning
                          </div>
                        </div>
                        <div className="analytics__subtitle">
                        we offer cutting-edge Artificial Intelligence(AI) and Machine Learning(ML) as a service to help businesses harness the power of advanced analytics and automation.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 analytics_col2">
                        <img src={ml1} className="bigData1__img" />
                      </Col>
                      <Col className="col-12 mt-4">
                        <p className="epiphany__desc">
                        Our robust AI and ML solutions are designed to integrate seamlessly with your existing systems, enabling you to extract valuable insights, automate complex processes, and drive innovation. Whether it's predictive analytics, natural language processing, or computer vision, Lucida's AI services are tailored to meet your unique needs, ensuring you stay ahead in a rapidly evolving digital landscape. Empower your enterprise with Lucida's AI and ML expertise, and transform data into actionable intelligence.
                        </p>
                      </Col>
                    </Row>
                    <Row className="details">
                      <Col className="col-12 col-sm-12 col-md-6">
                        <div className="d-flex align-items-baseline gap-3 gap-md-4 ">
                          <span className="number">3</span>
                          <div className="analytics__title my-5">
                          Gen AI Solutions
                          </div>
                        </div>
                        <div className="analytics__subtitle">
                        we offer Generative AI (GenAI) as a service to empower businesses with the ability to create and innovate like never before.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 analytics_col2">
                        <img src={gen1} className="bigData1__img" />
                      </Col>
                      <Col className="col-12">
                        <p className="epiphany__desc">
                        Our GenAI solutions leverage advanced algorithms and deep learning models to generate high-quality content, automate creative processes, and enhance decision-making. Whether you need to generate realistic images, craft compelling text, or develop sophisticated simulations, Lucida’s GenAI services provide the tools and expertise to transform your ideas into reality. With our GenAI capabilities, you can streamline operations, boost productivity, and gain a competitive edge in your industry. Unlock the full potential of AI with Lucida's GenAI as a service.
                        </p>
                      </Col>
                    </Row>
                    <Row className="details">
                      <Col className="col-12 col-sm-12 col-md-6 ">
                        <div className="d-flex align-items-baseline gap-3 gap-md-4 ">
                          <span className="number">4</span>
                          <div className="analytics__title my-5">
                          Product Development
                          </div>
                        </div>
                        <div className="analytics__subtitle">
                        we offer Product Development as a Service to help businesses bring their innovative ideas to life.
                        </div>
                      </Col>
                      <Col className="col-12 col-sm-12 col-md-6 analytics_col2">
                        <img src={product1} className="bigData1__img" />
                      </Col>
                      <Col className="col-12">
                        <p className="epiphany__desc">
                        Our end-to-end product development solutions encompass everything from initial concept design and prototyping to full-scale development and deployment. Leveraging our expertise in cutting-edge technologies and industry best practices, Lucida ensures that your products are not only market-ready but also aligned with your strategic goals. Our collaborative approach, combined with a deep understanding of market trends and user needs, guarantees that each product we develop is both high-quality and highly impactful. Partner with Lucida to accelerate your product development journey and turn your vision into reality.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </Row>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Solutions;
