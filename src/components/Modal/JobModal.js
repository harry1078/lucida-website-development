import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropFileInput from "../drop-file-input/DropFileInput";
import LoadingComponent from "../Loader/LoadingComponent";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { applyJob } from "../../controllers/jobController";

function JobModal(props) {
  const navigate = useNavigate();
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
  });
  const [isResumeUploaded, setIsResumeUploaded] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    file: "",
  });
  const fileFormats = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
  ];
  let fileSize, isFileFormatValid;
  let nameReg = /^\S[A-Za-z\s]+$/;
  let phoneReg = new RegExp(/^[0-9]{10}$/g);
  let emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

  const handleInput = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };

  const clearInputData = () => {
    setEnteredValues({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setIsResumeUploaded(null);
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  const onFileChange = (files) => {
    setIsResumeUploaded(files);
  };

  const isFormValid = () => {
    let isValid = true;
    let formErrors = { ...errors };

    if (!nameReg.test(enteredValues.name)) {
      formErrors.name = "Please enter a valid name";
    } else {
      formErrors.name = "";
    }

    if (
      !phoneReg.test(enteredValues.phone) &&
      enteredValues.phone.length !== 10
    ) {
      formErrors.phone = "Please enter a valid 10-digit phone number.";
    } else {
      formErrors.phone = "";
    }

    if (
      enteredValues.email.trim().length >= 0 &&
      !emailRegex.test(enteredValues.email)
    ) {
      formErrors.email = "Please enter valid email address.";
    } else {
      formErrors.email = "";
    }

    if (isResumeUploaded === null) {
      formErrors.file = "Please upload resume";
    } else if (!isFileFormatValid) {
      formErrors.file = "Please upload valid file";
    } else if (fileSize > 2) {
      formErrors.file = "Maximum file size is 2MB";
    } else {
      formErrors.file = "";
    }

    setErrors(formErrors);

    Object.keys(formErrors).forEach((key) => {
      if (formErrors[key] !== "" && isValid) {
        isValid = false;
      }
    });

    return isValid;
  };

  const jobSubmitHandler = async (event) => {
    event.preventDefault();
    if (isResumeUploaded != null) {
      isFileFormatValid = fileFormats.includes(isResumeUploaded.type);
      fileSize = (isResumeUploaded.size / (1024 * 1024)).toFixed(2);
    }
    if (isFormValid()) {
      setIsLoading(true);
      const fd = new FormData();
      fd.append("name", enteredValues.name);
      fd.append("phone", enteredValues.phone);
      fd.append("email", enteredValues.email);
      fd.append("resume", isResumeUploaded);
      try {
        const response = await applyJob(fd);

        if (response.status === 200 || response.ok) {
          setIsLoading(false);
          Swal.fire({
            title: "Submitted Successfully!",
            icon: "success",
            allowOutsideClick: false,
            confirmButtonText: "OK",
          });
          clearInputData();
          navigate("/");
        } else {
          setIsLoading(false);
          if (response?.data?.error?.length > 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${response.data.error}`,
              allowOutsideClick: false,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Something went wrong! please try again later.`,
              allowOutsideClick: false,
            });
          }
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };
  return (
    <Modal
      {...props}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="job__modal"
    >
      <LoadingComponent loading={isLoading} />
      <Modal.Body className="">
        <Form
          className="job__form"
          id="application__form"
          onSubmit={jobSubmitHandler}
        >
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="name"
              value={enteredValues.name}
              onChange={(event) => handleInput("name", event.target.value)}
              placeholder="Name*"
              className={errors.name && "input__error"}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="number"
              name="phone"
              value={enteredValues.phone}
              onChange={(event) => handleInput("phone", event.target.value)}
              placeholder="Phone*"
              className={errors.phone && "input__error"}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="email"
              placeholder="Email*"
              name="email"
              onBlur={() => handleInputBlur("email")}
              value={enteredValues.email}
              onChange={(event) => handleInput("email", event.target.value)}
              className={errors.email && "input__error"}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </Form.Group>
          <Form.Group className="mb-4">
            <DropFileInput onFileChange={(files) => onFileChange(files)} />
            {errors.file && <p className="error-text">{errors.file}</p>}
          </Form.Group>
          <div className="btn__box">
            <Button className="submit_btn" type="submit">
              Submit
            </Button>
            <Button className="close_btn" onClick={props.onHide}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default JobModal;
