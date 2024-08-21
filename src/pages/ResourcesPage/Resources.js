import React from 'react'
import Header from '../../components/Navbar/Navbar'
import { Card, Col, Container, Row } from 'react-bootstrap'
import article1 from '../../assets/png/article1.png'
import article2 from '../../assets/png/article2.png'
import article3 from '../../assets/png/article3.png'
import article4 from '../../assets/png/article4.png'
import './Resources.css'
import Footer from '../../components/Footer/Footer'

const Resources = () => {
  return (
    <>
      <Header />
      <Container className="container-lg resources__container" fluid>
        <div className="article__row">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="article__header">Articles</h2>
            </Col>
          </Row>

          <Row className='gy-5'>
            <Col className="col-12 col-sm-6 col-md-3">
              <Card className='article__card h-100'>
                <Card.Img variant="top" src={article1} className='article__img' />
                <Card.Body className='article__desc'>
                  <Card.Title className='article__title px-4'>
                  Exploratory Data Analysis(EDA) using chatGPT
                    <div className="d-flex justify-content-center my-3">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                  Exploratory Data Analysis (EDA) is a critical step in the data analysis process..
                  </Card.Text>
                  <div className="read_more text-center" id='readMore_text'>Read More</div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-md-3">
              <Card className='article__card h-100'>
                <Card.Img variant="top" src={article2} className='article__img' />
                <Card.Body className='article__desc'>
                  <Card.Title className='article__title px-4'>
                  Generative AI in healthcare industries
                    <div className="d-flex justify-content-center my-3">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                  Generative AI is playing an increasingly important role in healthcare, revolution...
                  </Card.Text>
                  <div className="read_more text-center" id='readMore_text'>Read More</div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-md-3">
              <Card className='article__card h-100'>
                <Card.Img variant="top" src={article3} className='article__img' />
                <Card.Body className='article__desc'>
                  <Card.Title className='article__title px-4'>
                  How BI & AI are shaping the future of Business
                    <div className="d-flex justify-content-center my-3">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                  In the rapidly evolving landscape of business technology, two acronym...
                  </Card.Text>
                  <div className="read_more text-center" id='readMore_text'>Read More</div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-12 col-sm-6 col-md-3">
              <Card className='article__card h-100'>
                <Card.Img variant="top" src={article4} className='article__img' />
                <Card.Body className='article__desc'>
                  <Card.Title className='article__title px-4'>
                  Exploring the Realm of Large Language Models
                    <div className="d-flex justify-content-center my-3">
                      <div className="horizontal_line"></div>
                    </div>
                  </Card.Title>
                  <Card.Text>
                  Large Language Models (LLMs) stand at the forefront of artificial...
                  </Card.Text>
                  <div className="read_more text-center" id='readMore_text'>Read More</div>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </div>
      </Container>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Resources