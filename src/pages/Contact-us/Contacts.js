import React, { useState } from "react";
import Header from "../../components/Navbar/Navbar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import interview from "../../assets/png/interview.png";
import careers from "../../assets/png/careers.png";
import { FaSearch } from "react-icons/fa";
import "./Contacts.css";
import SpotLight from "../../components/Slider/SpotLight/SpotLight";
import Footer from "../../components/Footer/Footer";

const Contacts = () => {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const handleInput = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const emailIsValid = enteredValues.email.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log(enteredValues);
  };
  return (
    <>
      <Header />
      <Container className="container-lg contact__container" fluid>
        <div>
          <div className="top__row my-5">
            <h3 className="topSection__heading mb-5">
              Get in touch for the niche solutions provided by{" "}
              <span>LUCIDA TECHNOLOGIES</span>
            </h3>
            <Row className="topSection__subtitle mb-5">
              <Col className="col-12 col-md-6">
                The most interesting, futuristic digital solutions that you can
                choose from us
              </Col>
            </Row>
            <Row>
              <Col className="col-12 col-md-6 d-flex">
                <Form className="solutions__form" onSubmit={submitHandler}>
                  <Form.Group
                    md="12"
                    className=" form__control"
                    controlId="validationCustom01"
                  >
                    <Form.Control
                      type="text"
                      name="name"
                      value={enteredValues.name}
                      onChange={(event) =>
                        handleInput("name", event.target.value)
                      }
                      placeholder="Name*"
                    />
                  </Form.Group>
                  <Form.Group
                    md="12"
                    className=" form__control"
                    controlId="validationCustom02"
                  >
                    <Form.Control
                      type="number"
                      name="phone"
                      value={enteredValues.phone}
                      onChange={(event) =>
                        handleInput("phone", event.target.value)
                      }
                      placeholder="Phone*"
                      min={10}
                    />
                  </Form.Group>
                  <Form.Group
                    className=" form__control"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email*"
                      name="email"
                      value={enteredValues.email}
                      onChange={(event) =>
                        handleInput("email", event.target.value)
                      }
                    />
                    <div>
                      {emailIsInvalid && (
                        <p>Please enter a valid email address.</p>
                      )}
                    </div>
                  </Form.Group>
                  <Form.Group
                    className="form__control"
                    controlId="exampleForm.ControlTextarea1"
                    id="message"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Message (optional)"
                      rows={4}
                      name="message"
                      value={enteredValues.message}
                      onChange={(event) =>
                        handleInput("message", event.target.value)
                      }
                      className="text__area"
                    />
                  </Form.Group>
                  <Button className="px-3 px-md-4 joinUs__btn" type="submit">
                    Join Us
                  </Button>
                </Form>
              </Col>
              <Col className="col-12 col-md-6 text-center order-first order-md-last interview__col">
                <div>
                  <img
                    src={interview}
                    className="interview__img mb-4"
                    alt="interview"
                  />
                  <Button
                    className="px-3 px-md-4 joinUs__btn"
                    type="subnit"
                    onClick={submitHandler}
                  >
                    Join Us
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div className="my-5 p-4">
            <h3 className="careers__heading mb-3 mb-md-5">Careers</h3>
            <Row className="careers__row mb-3 mb-md-5">
              <Col className="careers__subtitle col-12">
                Lucida considers product development in niche technologies as
                its main focus areas.
              </Col>
            </Row>
            <Row className="flex-column flex-md-row">
              <Col className="col-md-6 ">
                <p className="careers__desc pt-4 mb-5">
                  We leverage our industry and domain expertise combined with
                  our technology prowess, delivery focus and quality of work to
                  help our clients ideate and develop their dream products
                </p>

                <Row className="mt-5">
                  <Col className="col-12 col-md-10 mx-auto">
                    <div className="input-group input__group">
                      <input
                        className="form-control border-end-0 border search__box"
                        type="search"
                        placeholder="Find Your Destination"
                        id="example-search-input"
                      />
                      <span className="input-group-append">
                        <button
                          className="btn btn-outline-secondary border-start-0 border-bottom-0 border ms-n5 search__btn"
                          type="button"
                        >
                          <FaSearch className="search__icon" />
                        </button>
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="col-md-6 text-center order-first order-md-last">
                <img src={careers} className="careers__img" alt="careers" />
              </Col>
            </Row>
          </div>
        </div>

        <SpotLight />
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contacts;
