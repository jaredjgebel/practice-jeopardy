import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import FrontPage from "../components/FrontPage";
import ClueCardContainer from "../components/ClueCardContainer";
import { toggleActiveGame } from "../redux/actionCreators";
import { isGameActive, isLoading } from "../redux/selectors";
import { getRandomClues } from "../redux/actionCreators";
import Background from "./styled/Background";
import StyledContainer from "./styled/StyledContainer";

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

    const MainComponent = gameActive ? (
      <ClueCardContainer />
    ) : (
      <FrontPage
        toggleActiveGame={toggleActiveGame}
        getRandomClues={getRandomClues}
      />
    );

    return (
      <Background>
        <StyledContainer fluid={true}>{MainComponent}</StyledContainer>
      </Background>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
