import * as c from "../constants";

const defaultState = {
  answerVisible: false,
  cluesById: {},
  allIds: []
};

const clues = (state = defaultState, action) => {
  switch (action.type) {
    case c.TOGGLE_ANSWER_VISIBLE:
      return {
        ...state,
        answerVisible: !action.payload.answerVisible
      };
    default:
      return state;
  }
};

export default clues;
