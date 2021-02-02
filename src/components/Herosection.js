/*eslint-disable*/
import { Button } from "react-bootstrap";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/Hero_Image1.png";
import image2 from "../assets/Hero_Image2.png";
import image3 from "../assets/Hero_Image3.png";
// reactstrap components
import { GiHamburgerMenu } from "react-icons/gi";
class Herosection extends React.Component {
  state = {
    x: "0px",
    y: "0px",
  };

  handleMove = (e) => {
    const btn = document.getElementsByClassName("button")[0];

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;

    btn.setAttribute("style", "--x:" + x + "px; --y:" + y + "px;");
  };

  render() {
    return (
      <>
        <div style={{ position: "relative" }}>
          <div className="burger">
            <GiHamburgerMenu
              style={{ marginTop: "-15px", height: "30px", width: "auto" }}
            />
            <h2 style={{ display: "inline-block" }}> &nbsp;EXP | CON</h2>
          </div>
          <div className="hero-center">
            <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
            <p style={{ fontSize: "20px", letterSpacing: "3px" }}>
              Experience your favourite artists like never <br />
              before and from the comfort of your own home
            </p>
            <button onMouseMove={this.handleMove} className="button">
              TRY IT NOW
            </button>
          </div>
          <Carousel style={{ maxHeight: "100vh" }}>
            <Carousel.Item
              interval={1000}
              className="justify-content-md-center"
            >
              <img
                className="d-block w-100 carousel-img"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 carousel-img"
                src={image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img "
                src={image3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default Herosection;
