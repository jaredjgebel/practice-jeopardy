import React from "react";
import { Row, Col } from "react-grid-system";
import { FlexCol } from "./elements/FlexCol";
import StyledButton from "./styled/StyledButton";

const FrontPage = ({ toggleActiveGame, getRandomClues }) => {
  return (
    <>
      <Row style={{ height: "35%", minHeight: "200px" }} className="front-page">
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "center"
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
            alignItems: "center",
            padding: "0px 50px",
            textAlign: "center"
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
          <StyledButton
            alt="start"
            className="start-button"
            width="7rem"
            onClick={() => {
              toggleActiveGame(false);
              getRandomClues();
            }}
          >
            START
          </StyledButton>
          <p>100 clues from a random date</p>
        </FlexCol>
      </Row>
    </>
  );
};

export default FrontPage;
