import * as c from "../constants";

const defaultState = {
  loading: false,
  gameActive: false,
  currentPage: 1,
  error: null
};

const ui = (state = defaultState, action) => {
  switch (action.type) {
    //   if currentPage is 0, React will not allow the PAGE_BACK action to be dispatched
    case c.PAGE_BACK:
      return Object.assign(
        {},
        {
          ...state,
          currentPage: state.currentPage - 1
        }
      );
    case c.PAGE_FORWARD:
      return Object.assign(
        {},
        {
          ...state,
          currentPage: state.currentPage + 1
        }
      );
    default:
      return state;
  }
};

export default ui;
