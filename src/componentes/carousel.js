import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import './carousel.css';
import './carouselLocal.css'



class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img className = "w-image" src="https://preview.ibb.co/mN7Hzn/1.jpg" />
          </div>
          <div>
            <img className = "w-image" src="https://preview.ibb.co/jT67X7/2.jpg" />
          </div>
          <div>
            <img className = "w-image" src="https://preview.ibb.co/nKA1s7/3.jpg" />
          </div>
          <div>
            <img className = "w-image" src="https://preview.ibb.co/gF4i5S/4.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo;
