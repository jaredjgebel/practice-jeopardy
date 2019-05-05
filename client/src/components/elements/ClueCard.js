import React from "react";
import { Row, Visible, Hidden } from "react-grid-system";
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
      <Visible md lg xl>
        <FlexCol md={6} direction="row">
          <MenuIcon
            className="menu"
            alt="menu"
            size="75px"
            onClick={() => toggleActiveGame(true)}
          />
          <StyledInfo>
            <p>{`$${value}`}</p>
            <p>{`Aired ${new Date(Date.parse(airDate))}`.slice(0, -42)}</p>
            <p>{"Clue " + currentPage + " of " + totalPages}</p>
          </StyledInfo>
        </FlexCol>
      </Visible>

      <FlexCol xs={12} md={6} direction="row">
        <span>{category}</span>
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
