import React from "react";
import PropTypes from "prop-types";
import StyledButton from "../styled/StyledButton";
import "./Clue.css";

const Clue = ({
  category,
  content,
  answer,
  answerVisible,
  toggleAnswerVisible
}) => {
  return (
    <div className="card">
      <header className="category">{category}</header>
      <div className="content-answer">
        {answerVisible ? (
          <p className="answer">{answer}</p>
        ) : (
          <p className="content">{content}</p>
        )}
      </div>
      <div className="button">
        <StyledButton
          onClick={() => {
            toggleAnswerVisible(answerVisible);
          }}
        >
          {answerVisible ? "BACK TO CLUE" : "REVEAL ANSWER"}
        </StyledButton>
      </div>
    </div>
  );
};

export default Clue;

Clue.propTypes = {
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answerVisible: PropTypes.bool.isRequired,
  toggleAnswerVisible: PropTypes.func.isRequired
};
