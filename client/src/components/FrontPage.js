import React from "react";

const FrontPage = ({ gameActive, toggleActiveGame }) => {
  return (
    <div className="front-page">
      <h2>This is...</h2>
      <h1>Practice JEOPARDY!</h1>
      <p>
        Flash card style questions and answers from Jeopardy questions
        throughout the ages
      </p>
      <button
        className="start-button"
        onClick={() => toggleActiveGame(gameActive)}
      >
        START
      </button>
    </div>
  );
};

export default FrontPage;
