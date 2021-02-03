/*eslint-disable*/

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/Hero_Image1.png";
import image2 from "../assets/Hero_Image2.png";
import image3 from "../assets/Hero_Image3.png";
import "../App.css"

class Herosection extends React.Component {

  //Handles hover on the CTA button
  handleMove = (e) => {
    const btn = document.getElementsByClassName("button")[0];

    var x = e.pageX-btn.offsetLeft;
    var y = e.pageY-btn.getBoundingClientRect().top;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };
  

  render() {
    return (
      <>
        <div style={{position:"relative"}}>
          <h1 className="hero-title">INTERACTIVE CONCERT EXPERIENCE</h1>
          <p className="hero-descrip">
           Experience your favourite artists like never before and from the comfort of your own home
          </p>
          <button className="hero-try-button">
            <p className="hero-try-button-text">
              TRY IT NOW
            </p>
          </button>
          <Carousel className="carouselHero" interval={10000}>
            <Carousel.Item
              className="justify-content-md-center"
            >
              <img
                className="d-block w-100 carousel-img"
                src={image1}
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100 carousel-img"
                src={image2}
              />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100 carousel-img "
                src={image3}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default Herosection;
