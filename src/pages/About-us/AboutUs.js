import React from 'react'
import Header from '../../components/Navbar/Navbar'
import { Button, Col, Nav, Row, Tab, Tabs } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div>AboutUs</div>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12}>
          <h2>How to Chose solutions</h2>
          <Nav variant="underline" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        {/* <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col> */}
      </Row>

      <Row>
      <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
      </Row>
    </Tab.Container>

    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col md={8}> <h2>How to Chose solutions</h2> </Col>
      <Col md={4}>
      <Nav variant="tabs" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="first">Offerings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Services</Nav.Link>
            </Nav.Item>
          </Nav>
      </Col>
    </Row>
    <Row>
      <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
      </Row>
    </Tab.Container>
    </>
  )
}

export default AboutUs