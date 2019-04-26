import React, { Component } from "react";
import { connect } from "react-redux";
import ClueCard from "./elements/ClueCard";
import { toggleActiveGame } from "../redux/actionCreators";
// import { getRandomClues } from "../data/fetch-data";

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveGame: toggleState => {
      dispatch(toggleActiveGame(toggleState));
    }
  };
};

class ClueCardContainer extends Component {
  render() {
    return (
      <ClueCard clue={"asdf"} toggleActiveGame={this.props.toggleActiveGame} />
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ClueCardContainer);

/*
Indexing for clues
   Back button
      Visible/ if index > 0
      
   Front button 
      Visible unless index = clues.length - 1
   state: { activeClue: 0 }

*/
