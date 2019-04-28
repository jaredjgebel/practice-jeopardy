import React, { Component } from "react";
import { connect } from "react-redux";
import ClueCard from "./elements/ClueCard";
import {
  toggleActiveGame,
  toggleAnswerVisible,
  pageBack,
  pageForward
} from "../redux/actionCreators";
import {
  isAnswerVisible,
  isLoading,
  getCurrentPage,
  getTotalPages
} from "../redux/selectors";

const convertToString = num => {
  return num && num.toString();
};

const mapStateToProps = state => {
  return {
    answerVisible: isAnswerVisible(state),
    loading: isLoading(state),
    currentPage: getCurrentPage(state),
    totalPages: getTotalPages(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveGame: toggleState => {
      dispatch(toggleActiveGame(toggleState));
    },
    toggleAnswerVisible: answerVisible => {
      dispatch(toggleAnswerVisible(answerVisible));
    },
    pageBack: currentPage => {
      dispatch(pageBack(currentPage));
    },
    pageForward: (currentPage, totalPages) => {
      dispatch(pageForward(currentPage, totalPages));
    }
  };
};

class ClueCardContainer extends Component {
  render() {
    const {
      loading,
      answerVisible,
      currentPage,
      totalPages,
      toggleActiveGame,
      toggleAnswerVisible,
      pageBack,
      pageForward
    } = this.props;

    return loading ? (
      <p>Loading...</p>
    ) : (
      <ClueCard
        clue={"This is a clue"}
        answer={"This is the answer"}
        index={currentPage}
        totalClues={totalPages}
        currentPage={convertToString(currentPage)}
        totalPages={convertToString(totalPages)}
        answerVisible={answerVisible}
        toggleActiveGame={toggleActiveGame}
        toggleAnswerVisible={toggleAnswerVisible}
        pageBack={pageBack}
        pageForward={pageForward}
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
