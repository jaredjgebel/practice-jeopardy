import React from "react";
import { Row } from "react-grid-system";
import { FlexCol } from "./FlexCol";
import StyledButton from "../styled/StyledButton";
import LeftArrow from "../styled/LeftArrow";
import RightArrow from "../styled/RightArrow";
import MenuIcon from "../styled/MenuIcon";
import StyledInfo from "../styled/Info";
import "./ClueCard.css";

const ClueCard = ({
  clue,
  category,
  value,
  airDate,
  answer,
  currentPage,
  totalPages,
  answerVisible,
  toggleActiveGame,
  toggleAnswerVisible,
  pageBack,
  pageForward
}) => {
  return (
    <Row className="clue-card">
      <FlexCol xs={12} direction="row" className="header">
        <MenuIcon
          className="menu"
          alt="menu"
          size="75px"
          onClick={() => toggleActiveGame(true)}
        />
        <StyledInfo size="75px" />
        <span>{value}</span>
        <span>{airDate}</span>
        <span>{category}</span>
        <span>{"Clue " + currentPage + " of " + totalPages}</span>
      </FlexCol>
      <FlexCol xs={12}>
        {answerVisible ? <p>{answer}</p> : <p>{clue}</p>}
        <StyledButton
          alt={answerVisible ? "Back to Clue" : "Reveal Answer"}
          className="answer"
          width="9em"
          onClick={() => toggleAnswerVisible(answerVisible)}
        >
          {answerVisible ? "Back to Clue" : "Reveal Answer"}
        </StyledButton>
      </FlexCol>
      <FlexCol xs={12}>
        <LeftArrow
          alt="Page Back"
          disabled={currentPage === "1"}
          size="75px"
          onClick={() => {
            pageBack(currentPage);

            if (answerVisible) {
              toggleAnswerVisible(answerVisible);
            }
          }}
        />
        <RightArrow
          alt="Page Forward"
          disabled={currentPage === totalPages}
          size="75px"
          onClick={() => {
            pageForward(currentPage, totalPages);

            if (answerVisible) {
              toggleAnswerVisible(answerVisible);
            }
          }}
        />
      </FlexCol>
    </Row>
  );
};

export default ClueCard;
