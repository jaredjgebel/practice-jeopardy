import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import FrontPage from "../components/FrontPage";
import ClueCardContainer from "../components/ClueCardContainer";
import { toggleActiveGame } from "../redux/actionCreators";
import { isGameActive, isLoading } from "../redux/selectors";
import { getRandomClues } from "../redux/actionCreators";

const mapStateToProps = state => {
  return {
    gameActive: isGameActive(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveGame: toggleState => {
      dispatch(toggleActiveGame(toggleState));
    },
    getRandomClues: () => {
      dispatch(getRandomClues());
    }
  };
};

class App extends Component {
  render() {
    const { gameActive, toggleActiveGame, getRandomClues } = this.props;

    return gameActive ? (
      <ClueCardContainer />
    ) : (
      <FrontPage
        toggleActiveGame={toggleActiveGame}
        getRandomClues={getRandomClues}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
