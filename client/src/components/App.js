import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./App.css";
import FrontPage from "../components/FrontPage";
import ClueCardContainer from "../components/ClueCard/ClueCardContainer";
import { toggleActiveGame } from "../redux/actionCreators";
import { isGameActive } from "../redux/selectors";
import { fetchClues } from "../redux/actionCreators";
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
    fetchClues: () => {
      dispatch(fetchClues());
    }
  };
};

class App extends Component {
  render() {
    const { gameActive, toggleActiveGame, fetchClues } = this.props;

    const MainComponent = gameActive ? (
      <ClueCardContainer />
    ) : (
      <FrontPage
        toggleActiveGame={toggleActiveGame}
        getRandomClues={fetchClues}
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

App.propTypes = {
  gameActive: PropTypes.bool.isRequired,
  toggleActiveGame: PropTypes.func.isRequired,
  fetchClues: PropTypes.func.isRequired
};
