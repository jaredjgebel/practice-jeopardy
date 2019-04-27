import React from "react";

const ClueCard = ({
  id,
  clue,
  category,
  value,
  airDate,
  answer,
  answerVisible,
  toggleActiveGame,
  toggleAnswerVisible
}) => (
  <div className="clue-card">
    {answerVisible ? <p>{answer}</p> : <p>{clue}</p>}
    <p>{id}</p>
    <p>{category}</p>
    <p>{value}</p>
    <p>{airDate}</p>
    <button
      className="answer"
      onClick={() => toggleAnswerVisible(answerVisible)}
    >
      Reveal Answer
    </button>
    <button className="menu" onClick={() => toggleActiveGame(true)}>
      Menu
    </button>
  </div>
);

export default ClueCard;
