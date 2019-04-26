import React from "react";

const ClueCard = ({
  id,
  clue,
  category,
  value,
  airDate,
  answer,
  toggleActiveGame
}) => (
  <div className="clue-card">
    <p>{clue}</p>
    <button className="menu" onClick={() => toggleActiveGame(true)} />
  </div>
);

export default ClueCard;
