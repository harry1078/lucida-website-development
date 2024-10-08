import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import uiUx from "../../../assets/png/UiUx.png";
import fullStack from "../../../assets/png/fullStack.png";
import ai from "../../../assets/png/Ai.png";
import bigData from "../../../assets/png/bigData.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { spotLightData } from "../../../dataset";
import Modals from "../../Modal/Modal";
import { getJobsList } from "../../../controllers/jobController";


const SpotLight = () => {
  const [modalShow, setModalShow] = useState(false);
  const [cardData, setCardData] = useState([])
  const [jobsListData, setJobsListData] = useState(null);

  const fetchJobDetailsHandler = async () => {
    const resp = await getJobsList({ status: "published" });
    setJobsListData(resp.filter((job) => !job.deleted));
  };

  useEffect(() => {
    if (jobsListData === null) {
      fetchJobDetailsHandler();
    }
  }, [jobsListData]);


  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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

  const onClickHandler = (data)=>{
    setModalShow(true)
    setCardData(data)
  }
  const closeModal = ()=>{
    setModalShow(false)
  }


  return (
    <Row className="mb-5">
      <h3 className="spotlight__heading mb-4">Spotlight</h3>
      <Slider {...settings}>
        {spotLightData.map((item) => (
          <Card key={item.id} className="spotlight__card p-0" onClick={()=>onClickHandler(item)}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title className="spotlight__title">{item.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    {
      <Modals
        show={modalShow}
        data = {cardData}
        onHide={() => closeModal() }
      />
    }
    </Row>
  );
};

export default SpotLight;
