import React from "react";
import { Col, Row } from "react-bootstrap";
import polygon from "../../../assets/png/polygon.png";
import phase1Icon from "../../../assets/svgs/phase_01.svg";
import phase2Icon from "../../../assets/svgs/phase_02.svg";
import phase3Icon from "../../../assets/svgs/phase_03.svg";
import phase4Icon from "../../../assets/svgs/phase_04.svg";
import phase5Icon from "../../../assets/svgs/phase_05.svg";
import { FiCheck } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Transformation = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="transformation__section">
      <Row className="transformation__row text-center">
        <Col className="col-12">
          <h2 className="transformation__heading">
            Our approach to <span>digital transformation</span>
          </h2>
        </Col>
      </Row>

      <Row className="mb-4">
        <Slider {...settings}>
          <div className="phase__wrapper">
            <div className="phase-col1">
              <img src={polygon} alt="" className="polygon__img" />
              <div className="phase__icon">
                <img src={phase1Icon} alt="phase1" />
              </div>
              <div className="phase__div">
                <div className=" phase__header mb-3">
                  <span className="mb-2">Phase 01</span>
                  <h6>Stratergy & Goals</h6>
                </div>
                <div className="phase__desc">
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>Create strategy based on organization current state</p>
                  </div>
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      Set goals and success criteria for transformation journey
                    </p>
                  </div>
                  <div className="content">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p> Identify initiatives for maximum impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase__wrapper">
            <div className="phase-col1">
              <img src={polygon} alt="" className="polygon__img" />
              <div className="phase__icon">
                <img src={phase2Icon} alt="phase1" />
              </div>
              <div className="phase__div">
                <div className=" phase__header mb-3">
                  <span className="mb-2">Phase 02</span>
                  <h6>Solutions and Priorities</h6>
                </div>
                <div className="phase__desc">
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      Prioritize and identify best fit use cases based on target
                      business state
                    </p>
                  </div>
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      Execute PoCs to verify solutions and quantify return on
                      investments
                    </p>
                  </div>
                  <div className="content">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      {" "}
                      Set up organizational change management team to evangelize
                      digital initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase__wrapper">
            <div className="phase-col1">
              <img src={polygon} alt="" className="polygon__img" />
              <div className="phase__icon">
                <img src={phase3Icon} alt="phase1" />
              </div>
              <div className="phase__div">
                <div className=" phase__header mb-3">
                  <span className="mb-2">Phase 03</span>
                  <h6>Plan Initiatives</h6>
                </div>
                <div className="phase__desc">
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>Create a roadmap for the rollout of initiatives</p>
                  </div>
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      Identify investment needs and prioritize spend based on
                      organizational priorities and goals
                    </p>
                  </div>
                  <div className="content">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      {" "}
                      Identify dependencies within organization for rollout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase__wrapper">
            <div className="phase-col1">
              <img src={polygon} alt="" className="polygon__img" />
              <div className="phase__icon">
                <img src={phase4Icon} alt="phase1" />
              </div>
              <div className="phase__div">
                <div className=" phase__header mb-3">
                  <span className="mb-2">Phase 04</span>
                  <h6>Execute Solutions</h6>
                </div>
                <div className="phase__desc">
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>Build out initiatives/use cases as per plan</p>
                  </div>
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>Provide high level guidance and monitoring</p>
                  </div>
                  <div className="content">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      {" "}
                      Ensure support framework in place to enable execution of
                      solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phase__wrapper">
            <div className="phase-col1">
              <img src={polygon} alt="" className="polygon__img" />
              <div className="phase__icon">
                <img src={phase5Icon} alt="phase1" />
              </div>
              <div className="phase__div">
                <div className=" phase__header mb-3">
                  <span className="mb-2">Phase 05</span>
                  <h6>Measure Success</h6>
                </div>
                <div className="phase__desc">
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      Ensure initiatives achieve success and meet the objectives
                      they were set out to achieve
                    </p>
                  </div>
                  <div className="content mb-4">
                    <div>
                      <FiCheck className="check__icon" />
                    </div>
                    <p>
                      Continuous change management to ensure initiatives become
                      business as usual
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Row>
    </div>
  );
};

export default Transformation;
