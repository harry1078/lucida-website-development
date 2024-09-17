import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import JobModal from "./JobModal";


const Modals = (props) => {
  const { data, onHide } = props;
  const [isOpen, setIsOpen]  = useState(false)
  const [modalShow, setModalShow] = useState(false);

  const jobDescStyles ={
    display: isOpen ? 'block' : '-webkit-box',
    WebkitBoxOrient: isOpen ? 'unset' : 'vertical',
    WebkitLineClamp: isOpen ? 'none' : '7',
    overflow: isOpen ? 'auto':'hidden',
    }
  
  const onClickHandler = ()=>{
    setIsOpen(!isOpen)
  }

  const onApplyButtonHandler = ()=>{
    setModalShow(true)
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        className={modalShow ? 'blur__modal' : ''}
        centered
      >
        <Modal.Header closeButton>
          <FaArrowLeftLong className="backArrow" onClick={onHide} />
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal__header mb-2">
              <div className="modal__title">{data.title}</div>
              <div className="location__info">
                <FaLocationDot /> Bangalore
              </div>
            </div>
            <div className="modal__header">
              <h6>
                Posted: <span className="post__day">3d ago</span>
              </h6>
              <h6>
                Expires on: <span className="post__date">27-08-2024</span>
              </h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-2 mb-md-4" style={jobDescStyles}>
              <div className="qualifications">
                <h5>Qualifications:</h5>
                <ul>
                  <li>
                    Bachelor's degree in Design, Human-Computer Interaction,
                    Computer Science, a related field, or equivalent practical
                    experience.{" "}
                  </li>
                  <li>4 years of experience in product design or UX.</li>
                  <li>
                    Experience designing across multiple platforms, and working
                    with technical/design teams to create user flows,
                    wireframes, and building user interface mockups and
                    prototypes.
                  </li>
                  <li>
                    A portfolio highlighting multiple projects and your direct
                    contributions.
                  </li>
                </ul>
              </div>
              <div className="about__job">
                <h5>About the Job:</h5>
                <p>
                  Designers take complex tasks and make them intuitive and
                  easy-to-use for billions of people around the globe.
                  Throughout the design process—from creating user flows and
                  wireframes to building user interface mockups and
                  prototypes—you’ll envision how people will experience our
                  products, and bring that vision to life in a way that feels
                  inspired, refined, and even magical.
                </p>
              </div>
              <div className="responsibilities">
                <h5>Responsibilities:</h5>
                <ul>
                  <li>
                    Bachelor's degree in Design, Human-Computer Interaction,
                    Computer Science, a related field, or equivalent practical
                    experience.{" "}
                  </li>
                  <li>4 years of experience in product design or UX.</li>
                  <li>
                    Experience designing across multiple platforms, and working
                    with technical/design teams to create user flows,
                    wireframes, and building user interface mockups and
                    prototypes.
                  </li>
                  <li>
                    A portfolio highlighting multiple projects and your direct
                    contributions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn__block">
              <Button
                className="readMore__btn px-3 px-md-4"
                variant="outline"
                type="button"
                onClick={onClickHandler}
              >
                {isOpen ? "Read Less" : "Read More"}
              </Button>
              <Button
                className="apply__btn px-3 px-md-4 "
                type="button"
                onClick={onApplyButtonHandler}
              >
                Apply
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {<JobModal show={modalShow} onHide={() => setModalShow(false)} />}
    </>
  );
};

export default Modals;
