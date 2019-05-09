import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Visible } from "react-grid-system";

const Layout = ({ info, category, clue, leftArrow, rightArrow }) => (
  <Container
    fluid
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      paddingLeft: "0px",
      paddingRight: "0px"
    }}
  >
    <Row nogutter style={{ flex: "0 1 auto", height: "20vh" }}>
      <Visible md lg xl>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <MenuIcon
            className="menu"
            alt="menu"
            size="75px"
            onClick={() => toggleActiveGame(true)}
          />
        </Col>
      </Visible>
      <Col xs={12} md={6}>
        <p className="category">{category}</p>
      </Col>
    </Row>

    <Row nogutter style={{ flex: "1 1 auto" }}>
      <Col>{clue}</Col>
    </Row>

    <Row nogutter style={{ flex: "0 1 auto", height: "20vh" }}>
      <Col
        xs={3}
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%"
        }}
      >
        {leftArrow}
      </Col>
      <Visible xs sm>
        <Col
          xs={6}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
        >
          {info}
        </Col>
      </Visible>
      <Col
        xs={3}
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%"
        }}
      >
        {rightArrow}
      </Col>
    </Row>
  </Container>
);

export default Layout;
