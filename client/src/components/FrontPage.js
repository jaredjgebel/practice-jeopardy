import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-grid-system";
import { FlexCol } from "./styled/FlexCol";
import StyledButton from "./styled/StyledButton";

const FrontPage = ({ toggleActiveGame, getRandomClues }) => {
  return (
    <>
      <Row style={{ height: "35%", minHeight: "200px" }} className="front-page">
        <FlexCol justifyContent="center" alignItems="flex-end">
          <h1 style={{ fontSize: "4rem", marginBottom: "0px" }}>
            Practice JEOPARDY!
          </h1>
        </FlexCol>
      </Row>
      <Row>
        <FlexCol
          xs={12}
          alignItems="center"
          justifyContent="center"
          style={{
            height: "40%",
            minHeight: "200px",
            padding: "0px 50px",
            textAlign: "center",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <p>
            Flash card-style questions and answers from Jeopardy questions
            throughout the ages
          </p>
        </FlexCol>
      </Row>
      <Row>
        <FlexCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
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

FrontPage.propTypes = {
  toggleActiveGame: PropTypes.func.isRequired,
  getRandomClues: PropTypes.func.isRequired,
};
