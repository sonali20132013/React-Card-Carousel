import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "./style.css";
import AirplayIcon from '@material-ui/icons/Airplay';
const settings = {
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  infinite: true,
  className: 'slick-slider-fade',
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
  ]
};
function Slide() {
    return (
        <div className="container">
          <div className="slider_body">
          <div className="title">
              <p>What are you
                <br />
                <span>here to do?</span>
              </p>
          </div>
        <Slider {...settings}>
          <div className="card_slider">
            <div className="cards">
              <AirplayIcon />
              <h3>Get a device</h3>
              <a>Start here ></a>
            </div>
          </div>
          <div>
          <div className="cards">
              <AirplayIcon />
              <h3>Add a phone lines</h3>
              <a>Start here ></a>
            </div>
          </div>
          <div>
          <div className="cards">
              <AirplayIcon />
              <h3>Upgrade</h3>
              <a>Start here ></a>
            </div>
          </div>
          <div>
          <div className="cards">
              <AirplayIcon />
              <h3>Home internet</h3>
              <a>Start here ></a>
            </div>
          </div>
          <div>
          <div className="cards">
              <AirplayIcon />
              <h3>Mobile internet</h3>
              <a>Start here ></a>
            </div>
          </div>
          <div>
          <div className="cards">
              <AirplayIcon />
              <h3>Get a connection</h3>
              <a>Start here ></a>
            </div>
          </div>
        </Slider>
        </div>
        </div>
    );
}
export default Slide;