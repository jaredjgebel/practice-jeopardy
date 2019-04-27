import React, { Component } from "react";
import { connect } from "react-redux";
import ClueCard from "./elements/ClueCard";
import { toggleActiveGame, toggleAnswerVisible } from "../redux/actionCreators";
import { isAnswerVisible } from "../redux/selectors";
// import { getRandomClues } from "../data/fetch-data";

const mapStateToProps = state => {
  return {
    answerVisible: isAnswerVisible(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveGame: toggleState => {
      dispatch(toggleActiveGame(toggleState));
    },
    toggleAnswerVisible: answerVisible => {
      dispatch(toggleAnswerVisible(answerVisible));
    }
  };
};

class ClueCardContainer extends Component {
  render() {
    return (
      <ClueCard
        clue={"This is a clue"}
        answer={"This is the answer"}
        answerVisible={this.props.answerVisible}
        toggleActiveGame={this.props.toggleActiveGame}
        toggleAnswerVisible={this.props.toggleAnswerVisible}
      />
    );
  }
}

export default connect(
  mapStateToProps,
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
