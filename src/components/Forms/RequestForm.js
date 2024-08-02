import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function RequestForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-none'>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom01">
          <Form.Control
          size="lg"
            required
            type="text"
            placeholder="Name*"
          />
        </Form.Group>
        <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustom02">
          <Form.Control
          size="lg"
            required
            type="number"
            placeholder="Phone*"
          />
        </Form.Group>
        <Form.Group as={Col} md="12" className='mb-3' controlId="validationCustomEmail">
            <Form.Control
            size="lg"
              type="email"
              placeholder="Email*"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Email.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
            <Col className="mx-auto button__group">
              <Button className="demo_btn px-3 px-md-4" size="lg" type="button">
                Submit
              </Button>
              <Button
                className="contact_btn px-3 px-md-4 "
                size="lg"
                type="button"
              >
                Cancel
              </Button>
            </Col>
          </Row>
    </Form>
  );
}

export default RequestForm;