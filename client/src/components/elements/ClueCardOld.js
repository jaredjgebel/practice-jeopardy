import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-grid-system";
import { FlexCol } from "./FlexCol";
import ButtonContainer from "../ButtonContainer";

const ClueGrid = styled(Container)`
  height: 100vh;
  width: 100%;
  color: whitesmoke;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 26px;
  background-color: #020788;

  .heading {
    height: 20vh;
  }

  .clue {
    font-size: 40px;
    padding: 25px;
  }

  .main {
    height: 60vh;
  }
`;

const ClueCard = ({ id, clue, category, value, airDate, answer }) => (
  <ClueGrid fluid={true}>
    <Row className="heading" align="center">
      <FlexCol xs={3} align="center">
        <div className="value">{`$${value}`}</div>
      </FlexCol>
      <FlexCol xs={6} align="center">
        <div className="category">{category}</div>
      </FlexCol>
      <FlexCol xs={3} align="center">
        <div className="air-date">{airDate}</div>
      </FlexCol>
    </Row>

    <Row className="main" align="center">
      <FlexCol xs={2} align="start">
        <div className="previous">Previous</div>
      </FlexCol>
      <FlexCol xs={8} align="center">
        <div className="clue">{clue}</div>
      </FlexCol>
      <FlexCol xs={2} align="end">
        <div className="next">Next</div>
      </FlexCol>
    </Row>

    <Row>
      <FlexCol xs={12} align="center">
        <ButtonContainer answer={answer} />
      </FlexCol>
    </Row>
  </ClueGrid>
);

export default ClueCard;
