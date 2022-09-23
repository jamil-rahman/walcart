import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../Carousel/CarouselSlider";
import DropDownMenu from "../Drop Down Menu/DropDownMenu";
import FeaturedProduct from "../Featured Product/FeaturedProduct";

function BodySection() {
  return (
    <>
    <div style={{paddingTop: "3rem", backgroundColor: "#F5F5F5" }}>
      <Container>
        <Row>
          <Col sm={3}>
            <DropDownMenu />
          </Col>
          <Col sm={6}>
          <Carousel />
            </Col>
          <Col sm={3}>
            <FeaturedProduct />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default BodySection;
