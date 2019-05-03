import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FlexCol } from "./elements/FlexCol";
import styled from "styled-components";

const template = `
  "a a a" 3fr
  "b b b" 3fr
  "c c c" 1fr
`;

const StyledContainer = styled(Container)`
  height: 100vh;
  background: linear-gradient(180deg, #050b9d 25.52%, #040639 100%), #020788;
  color: whitesmoke;
  font-size: 26px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FrontPage = ({ toggleActiveGame, getRandomClues }) => {
  return (
    <StyledContainer fluid={true} className="front-page">
      <Row style={{ height: "35%", minHeight: "200px" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <h1 style={{ fontSize: "4rem", marginBottom: "0px" }}>
            Practice JEOPARDY!
          </h1>
        </Col>
      </Row>
      <Row>
        <FlexCol
          style={{
            height: "40%",
            minHeight: "200px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p>
            Flash card-style questions and answers from Jeopardy questions
            throughout the ages
          </p>
        </FlexCol>
      </Row>
      <Row>
        <FlexCol style={{ justifyContent: "center", alignItems: "center" }}>
          <button
            className="start-button"
            onClick={() => {
              toggleActiveGame(false);
              getRandomClues();
            }}
          >
            START
          </button>
        </FlexCol>
      </Row>
    </StyledContainer>
  );
};

export default FrontPage;
