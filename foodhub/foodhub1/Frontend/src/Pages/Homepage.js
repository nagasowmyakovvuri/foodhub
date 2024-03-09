import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Card, Container, Nav , NavLink, Navbar} from 'react-bootstrap';
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/4.jpg";
import image4 from "../images/bulb.png";
// import { Carousel } from 'bootstrap';


function ImageSlider() {
  return (
    <div>
     
      <Navbar bg='dark' data-bs-theme='dark' fixed='top'>
        <Container>
        {/* <img src={image4} width={40} height={40}/> */}
          <Navbar.Brand >  Self Ordering Website</Navbar.Brand>
          <Nav>
            <Nav.Link href='/home' >Home</Nav.Link>
            <Nav.Link href='/about'> About</Nav.Link>
            <NavLink href='/contact'> Contact</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src={image3}
            width={"100%"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            width={'100%'}
            src={image3}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          width={'100%'}
          src={image3}
          alt='third slide' 
          />
        </Carousel.Item>
      </Carousel>
      <br/>
        <Button href='/choose'variant='success'>Click  To Start</Button>
      
    </div>
  );
}


export default ImageSlider;