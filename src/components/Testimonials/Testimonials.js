import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import avatar1 from "../../assets/png/avatar1.png";
import avatar2 from "../../assets/png/avatar2.png";
import avatar3 from "../../assets/png/avatar3.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  { img: avatar1, title: "Lorem, ipsum", subTitle: "Lorem, ipsum dolor." },
  { img: avatar2, title: "Lorem, ipsum", subTitle: "Lorem, ipsum dolor." },
  { img: avatar3, title: "Lorem, ipsum", subTitle: "Lorem, ipsum dolor." },
  { img: avatar1, title: "Lorem, ipsum", subTitle: "Lorem, ipsum dolor." },
  { img: avatar2, title: "Lorem, ipsum", subTitle: "Lorem, ipsum dolor." },
  { img: avatar3, title: "Lorem, ipsum", subTitle: "Lorem, ipsum dolor." },
];

const Testimonials = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
    <div className="testimonials__section">
      <Row className="text-center mb-4">
        <Col className="col-12">
          <h3 className="testimonial__heading">Testimonial</h3>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="col-12 text-center testimonial__desc mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut omnis
          tempora corporis mollitia minima nesciunt quae molestiae dignissimos
          cupiditate? Velit eos quia cumque explicabo quam mollitia, officiis
          minus consectetur asperiores magni sequi cupiditate maxime facilis
          quibusdam adipisci sapiente ea nulla blanditiis iste officia. Quasi
          odio et labore hic ad est.
        </Col>

        <Slider {...settings}>
          {testimonialData.map((item) => (
            <Card key={item} className="testimonial__card">
              <Card.Body className="text-start">
                <Card.Title className="mb-3">
                  {" "}
                  <FaQuoteLeft className="quote" />{" "}
                </Card.Title>
                <Card.Text className="testimonial__content">
                  <div>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>

                  <ul className="p-0 mb-4">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStarHalfAlt />
                    </li>
                  </ul>

                  <div className="avatar">
                    <img src={item.img} alt="" />
                    <div className="ms-4">
                      <p className="avatar__title">{item.title}</p>
                      <p className="avatar__subtitle">{item.subTitle}</p>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </Row>
    </div>
  );
};

export default Testimonials;
