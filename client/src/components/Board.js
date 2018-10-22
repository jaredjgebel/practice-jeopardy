import React from "react";

export const Board = ({ clue }) => {
  <div>
    <p>{clue.airdate}</p>
    <p>{clue.answer}</p>
    <p>{clue.category.title}</p>
    <p>{clue.question}</p>
    <p>{clue.qvalue}</p>
  </div>;
};
