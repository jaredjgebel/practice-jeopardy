import React from "react";
import StyledButton from "../styled/StyledButton";

const Clue = ({
  category,
  content,
  answer,
  answerVisible,
  toggleAnswerVisible
}) => {
  return (
    <>
      <span className="category">{category}</span>
      {answerVisible ? (
        <p className="answer">{answer}</p>
      ) : (
        <p className="clue">{content}</p>
      )}
      <div className="button">
        <StyledButton
          onClick={() => {
            toggleAnswerVisible(answerVisible);
          }}
        >
          {answerVisible ? "BACK TO CLUE" : "REVEAL ANSWER"}
        </StyledButton>
      </div>
    </>
  );
};

export default Clue;
