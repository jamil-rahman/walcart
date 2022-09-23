import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DropDownMenu from "../Drop Down Menu/DropDownMenu";

function BodySection() {
  return (
    <>
    <div style={{paddingTop: "3rem", backgroundColor: "#F5F5F5" }}>
      <Container>
        <Row>
          <Col sm={2}>
          <div >
            <DropDownMenu />
          </div>
          </Col>
          <Col sm={8}>
            <div className="text-success" >
            2 of 3 (wider)
            </div>
            </Col>
          <Col sm={2}>
          <div style={{border:"1px solid blue"}}>
          3 of 3
          </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default BodySection;
