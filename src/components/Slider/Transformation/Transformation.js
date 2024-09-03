import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import { FiCheck } from "react-icons/fi";

const Transformation = () => {
  return (
    <div className="transformation__section">
      <Row className="transformation__row text-center">
        <Col className="col-12">
          <h2 className="transformation__heading">
            Our approach to <span>digital transformation</span>
          </h2>
        </Col>
      </Row>

      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Phase 01</Accordion.Header>
          <Accordion.Body>
            <div className="phase__title mb-3">
              <h5>Strategy & Goals</h5>
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
                <p>Set goals and success criteria for transformation journey</p>
              </div>
              <div className="content">
                <div>
                  <FiCheck className="check__icon" />
                </div>
                <p> Identify initiatives for maximum impact</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Phase 02</Accordion.Header>
          <Accordion.Body>
            <div className="phase__title mb-3">
              <h5>Solutions and Priorities</h5>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Phase 03</Accordion.Header>
          <Accordion.Body>
            <div className="phase__title mb-3">
              <h5>Plan Initiatives</h5>
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
                <p> Identify dependencies within organization for rollout</p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Phase 04</Accordion.Header>
          <Accordion.Body>
            <div className="phase__title mb-3">
              <h5>Execute Solutions</h5>
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Phase 05</Accordion.Header>
          <Accordion.Body>
            <div className="phase__title mb-3">
              <h5>Measure Success</h5>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Transformation;
