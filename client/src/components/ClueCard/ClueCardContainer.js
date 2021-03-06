import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ClueCard from "./ClueCard";
import {
  toggleActiveGame,
  toggleAnswerVisible,
  pageBack,
  pageForward
} from "../../redux/actionCreators";
import {
  isAnswerVisible,
  isLoading,
  getCurrentPage,
  getTotalPages,
  getClues,
  getClueIds
} from "../../redux/selectors";

const convertToString = num => {
  return num && num.toString();
};

const mapStateToProps = state => {
  return {
    answerVisible: isAnswerVisible(state),
    loading: isLoading(state),
    currentPage: getCurrentPage(state),
    totalPages: getTotalPages(state),
    clues: getClues(state),
    clueIds: getClueIds(state)
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
      clues,
      clueIds,
      toggleActiveGame,
      toggleAnswerVisible,
      pageBack,
      pageForward
    } = this.props;

    return loading ? (
      <p>Loading...</p>
    ) : (
      <ClueCard
        content={clues[clueIds[currentPage - 1]].clue}
        answer={clues[clueIds[currentPage - 1]].answer}
        category={clues[clueIds[currentPage - 1]].category}
        value={clues[clueIds[currentPage - 1]].value}
        airDate={clues[clueIds[currentPage - 1]].airDate}
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

ClueCardContainer.propTypes = {
  content: PropTypes.string,
  answer: PropTypes.string,
  category: PropTypes.string,
  value: PropTypes.string,
  airDate: PropTypes.string,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  answerVisible: PropTypes.bool,
  toggleActiveGame: PropTypes.func,
  toggleAnswerVisible: PropTypes.func,
  pageBack: PropTypes.func,
  pageForward: PropTypes.func
};
