import React, { useState } from "react";
import Header from "../../components/Navbar/Navbar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import interview from "../../assets/png/interview.png";
import careers from "../../assets/png/careers.png";
import "./Contacts.css";
import SpotLight from "../../components/Slider/SpotLight/SpotLight";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";

const Contacts = () => {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
  });
  const [nameIsInvalid, setNameIsInvalid] = useState(false);
  const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [isBtnDisable, setIsBtnDisable] = useState("typing");

  let nameReg = /^\S[A-Za-z\s]+$/;
  let phoneReg = new RegExp(/^[0-9]{10}$/g);
  const emailIsValid = didEdit.email && !enteredValues.email.includes("@");

  const handleInput = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  const buttonIsEnabled =
    enteredValues.name.length === 0 ||
    enteredValues.phone.length === 0 ||
    enteredValues.email.length === 0 ||
    isBtnDisable === "SUBMITTED";

  const clearInputData = () => {
    setEnteredValues({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  
  const handleInputBlur = (identifier)=>{
    setDidEdit((prevEdit)=>({
      ...prevEdit,
      [identifier]: true
    }))
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!nameReg.test(enteredValues.name)) {
      setNameIsInvalid(true);
      return;
    }
    setNameIsInvalid(false);

    if (
      !phoneReg.test(enteredValues.phone) &&
      enteredValues.phone.length !== 10
    ) {
      setPhoneNumberIsInvalid(true);
      return;
    }
    setPhoneNumberIsInvalid(false);

    if (enteredValues.email.trim().length >= 0 && emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    setIsBtnDisable("SUBMITTED");

    try {
      await sendFormData(enteredValues);
      Swal.fire({
        title: "Submitted Successfully!",
        icon: "success",
        allowOutsideClick: false,
        confirmButtonText: "OK",
      });
      clearInputData();
      setIsBtnDisable("typing");
    } catch (error) {
      console.log(error);
    }
  };

  const sendFormData = async (data) => {
    console.log("data", data);
    const response = await fetch(
      "http://localhost:8000/api/v1/users/register",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const respData = await response.json();

    if (!response.ok || !response.status === 200) {
      throw new Error("Failed to submit the data");
    }
    console.log("responseData", respData);
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
                  <Form.Group md="12" className="form__control">
                    <Form.Control
                      type="text"
                      name="name"
                      value={enteredValues.name}
                      onChange={(event) =>
                        handleInput("name", event.target.value)
                      }
                      placeholder="Name*"
                      className={nameIsInvalid && "input__error"}
                    />
                    {nameIsInvalid && (
                      <p className="error-text">Please enter a valid name.</p>
                    )}
                  </Form.Group>
                  <Form.Group md="12" className=" form__control">
                    <Form.Control
                      type="number"
                      name="phone"
                      value={enteredValues.phone}
                      onChange={(event) =>
                        handleInput("phone", event.target.value)
                      }
                      placeholder="Phone*"
                      className={phoneNumberIsInvalid && "input__error"}
                    />
                    {phoneNumberIsInvalid && (
                      <p className="error-text">
                        Please enter a valid 10-digit phone number.
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group className=" form__control">
                    <Form.Control
                      type="email"
                      placeholder="Email*"
                      name="email"
                      onBlur={()=>handleInputBlur('email')}
                      value={enteredValues.email}
                      onChange={(event) =>
                        handleInput("email", event.target.value)
                      }
                      className={emailIsValid && "input__error"}
                    />
                    {emailIsValid && (
                      <p className="error-text">
                        Please enter a valid email address.
                      </p>
                    )}
                  </Form.Group>
                  <Form.Group className="form__control" id="message">
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
                  <Button
                    className="px-3 px-md-4 joinUs__btn mt-4"
                    type="submit"
                    onClick={submitHandler}
                    disabled={buttonIsEnabled}
                  >
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
                    type="submit"
                    onClick={submitHandler}
                    disabled={buttonIsEnabled}
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
