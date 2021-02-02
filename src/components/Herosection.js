/*eslint-disable*/
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/Hero_Image1.png'
import image2 from '../assets/Hero_Image2.png'
import image3 from '../assets/Hero_Image3.png'
// reactstrap components

class Herosection extends React.Component {
  render() {
    return (
      <>
        <header>
            Ahhh
        </header>
        
        <Carousel>
            <Carousel.Item interval={1000} className="justify-content-md-center">
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                />
                <Carousel.Caption >
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Herosection;
