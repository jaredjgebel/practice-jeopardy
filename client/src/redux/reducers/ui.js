import * as c from "../constants";

const defaultState = {
  loading: false,
  gameActive: false,
  currentPage: 1,
  error: null,
  view: null
};

const ui = (state = defaultState, action) => {
  switch (action.type) {
    //   if currentPage is 0, React will not allow the PAGE_BACK action to be dispatched
    case c.PAGE_BACK:
      return Object.assign(
        {},
        {
          ...state,
          currentPage: action.payload.currentPage - 1
        }
      );
    case c.PAGE_FORWARD:
      return Object.assign(
        {},
        {
          ...state,
          currentPage: action.payload.currentPage + 1
        }
      );
    case c.TOGGLE_ACTIVE_GAME:
      return Object.assign({}, { ...state, gameActive: !action.payload });
    default:
      return state;
  }
};

export default ui;
