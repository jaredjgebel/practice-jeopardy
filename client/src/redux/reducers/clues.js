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

    case c.GET_RANDOM_CLUES_SUCCESS:
      // console.log(action.payload.clues);
      const obj = {};

      action.payload.clues.forEach(clue => {
        obj[clue.id] = {
          clue: clue.question,
          category: clue.category.title,
          value: clue.value,
          airDate: clue.airdate,
          answer: clue.answer
        };
      });

      return {
        ...state,
        cluesById: obj,
        allIds: action.payload.clues.map(clue => clue.id)
      };

    default:
      return state;
  }
};

export default clues;
