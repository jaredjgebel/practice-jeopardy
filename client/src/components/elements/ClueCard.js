import React from "react";
import { Row } from "react-grid-system";
import FlexCol from "./FlexCol";
import LeftArrow from "../styled/LeftArrow";

const ClueCard = ({
  id,
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
    <div className="clue-card" fluid={true}>
      {answerVisible ? <p>{answer}</p> : <p>{clue}</p>}
      <p>{id}</p>
      <p>{category}</p>
      <p>{value}</p>
      <p>{airDate}</p>
      <p>{"Clue " + currentPage + " of " + totalPages}</p>
      <button
        className="answer"
        onClick={() => toggleAnswerVisible(answerVisible)}
      >
        {answerVisible ? "Back to Clue" : "Reveal Answer"}
      </button>
      <button className="menu" onClick={() => toggleActiveGame(true)}>
        Menu
      </button>
      <button className="prev">Previous Clue</button>
      <LeftArrow
        disabled={currentPage === "1"}
        onClick={() => {
          pageBack(currentPage);

          if (answerVisible) {
            toggleAnswerVisible(answerVisible);
          }
        }}
      />
      <button
        className="next"
        disabled={currentPage === totalPages}
        onClick={() => {
          pageForward(currentPage, totalPages);

          if (answerVisible) {
            toggleAnswerVisible(answerVisible);
          }
        }}
      >
        Next Clue
      </button>
    </div>
  );
};

export default ClueCard;
