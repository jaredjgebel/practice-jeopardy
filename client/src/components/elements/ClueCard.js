import React from "react";

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
    <div className="clue-card">
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
      <button
        className="prev"
        disabled={currentPage === "1"}
        onClick={() => pageBack(currentPage)}
      >
        Previous Clue
      </button>
      <button
        className="next"
        disabled={currentPage === totalPages}
        onClick={() => pageForward(currentPage, totalPages)}
      >
        Next Clue
      </button>
    </div>
  );
};

export default ClueCard;
