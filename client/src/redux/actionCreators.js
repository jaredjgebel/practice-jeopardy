import * as c from "./constants";
import clues from "../data/clues";

export const pageBack = currentPage => ({
  type: c.PAGE_BACK,
  payload: {
    currentPage
  }
});

export const pageForward = (currentPage, totalPages) => ({
  type: c.PAGE_FORWARD,
  payload: {
    currentPage,
    totalPages
  }
});

export const toggleActiveGame = toggleState => ({
  type: c.TOGGLE_ACTIVE_GAME,
  payload: toggleState
});

export const toggleAnswerVisible = answerVisible => ({
  type: c.TOGGLE_ANSWER_VISIBLE,
  payload: {
    answerVisible
  }
});

export const getRandomCluesRequest = () => ({
  type: c.GET_RANDOM_CLUES_REQUEST
});

export const getRandomCluesSuccess = clues => ({
  type: c.GET_RANDOM_CLUES_SUCCESS,
  payload: {
    clues
  }
});

export const getRandomCluesError = error => ({
  type: c.GET_RANDOM_CLUES_ERROR,
  payload: {
    error
  }
});

export const getRandomClues = () => {
  return dispatch => {
    dispatch(getRandomCluesRequest());

    const randomClues = [];

    for (let i = 0; i < 100; i++) {
      randomClues.push(clues[Math.floor(Math.random() * clues.length)]);
    }

    randomClues.length === 100
      ? dispatch(getRandomCluesSuccess(randomClues))
      : dispatch(getRandomCluesError("Clue error"));
  };
};
