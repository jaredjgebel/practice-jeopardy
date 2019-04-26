import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import FrontPage from "../components/FrontPage";
import ClueCardContainer from "../components/ClueCardContainer";
import { toggleActiveGame } from "../redux/actionCreators";
import { isGameActive, isLoading } from "../redux/selectors";
import { getRandomClues } from "../data/fetch";

const mapStateToProps = state => {
  return {
    gameActive: isGameActive(state),
    loading: isLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleActiveGame: toggleState => {
      dispatch(toggleActiveGame(toggleState));
    }
  };
};

class App extends Component {
  componentDidMount() {
    // getRandomClues();
    const { gameActive, loading } = this.props;
    console.log(gameActive, loading);
  }

  render() {
    const { gameActive, toggleActiveGame } = this.props;

    return gameActive ? (
      <ClueCardContainer />
    ) : (
      <FrontPage gameActive={gameActive} toggleActiveGame={toggleActiveGame} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
