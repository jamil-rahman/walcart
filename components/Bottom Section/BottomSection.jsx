import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../Category/Category";
import electronics from "../../public/assets/electronics.png";
import food from "../../public/assets/food.png";
import profile_1 from "../../public/assets/profile_1.png";
import profile_2 from "../../public/assets/profile_2.png";
import popcorn from "../../public/assets/IMAGE.png";
import basket from "../../public/assets/basket.png";
import laptop from "../../public/assets/laptop.png";
import dress from "../../public/assets/dress.png";

function BottomSection() {
  return (
    <div style={{ paddingTop: "3rem", backgroundColor: "#F5F5F5" }}>
      <Container>
        <h3 style={{ fontWeight: "bold" }}>Popular Product Categories</h3>
        <div style={{ paddingTop: "30px" }}>
          <Row>
            <Col md={3}>
              <Category
                src={laptop}
                alt="laptop"
                title="Electronic Appliances"
              />
            </Col>

            <Col md={3}>
              <Category
                src={basket}
                alt="basket"
                title="Electronic Appliances"
              />
            </Col>

            <Col md={3}>
              <Category
                src={popcorn}
                alt="popcorn"
                title="Electronic Appliances"
              />
            </Col>

            <Col md={3}>
              <Category
                src={profile_1}
                alt="profile_1"
                title="Electronic Appliances"
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Category
                src={profile_2}
                alt="profile_2"
                title="Electronic Appliances"
              />
            </Col>

            <Col md={3}>
              <Category src={food} alt="food" title="Electronic Appliances" />
            </Col>

            <Col md={3}>
              <Category
                src={electronics}
                alt="electronics"
                title="Electronic Appliances"
              />
            </Col>

            <Col md={3}>
              <Category src={dress} alt="dress" title="Electronic Appliances" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default BottomSection;
