import * as c from "../constants";

const defaultState = {
  loading: false,
  gameActive: false,
  currentPage: null,
  totalPages: null,
  error: null,
  view: null
};

const ui = (state = defaultState, action) => {
  switch (action.type) {
    case c.PAGE_BACK: {
      const currentPageStr = action.payload.currentPage;
      const currentPage = parseInt(currentPageStr);

      if (currentPage === 1) {
        return state;
      }

      return {
        ...state,
        currentPage: currentPage - 1
      };
    }

    case c.PAGE_FORWARD: {
      const currentPageStr = action.payload.currentPage;
      const currentPage = parseInt(currentPageStr);

      const totalPagesStr = action.payload.totalPages;
      const totalPages = parseInt(totalPagesStr);

      if (currentPage >= totalPages) {
        return state;
      }

      return {
        ...state,
        currentPage: currentPage + 1
      };
    }

    case c.TOGGLE_ACTIVE_GAME:
      return { ...state, gameActive: !action.payload };

    case c.GET_RANDOM_CLUES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case c.GET_RANDOM_CLUES_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 1,
        totalPages: action.payload.clues.length
      };

    case c.GET_RANDOM_CLUES_ERROR:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default ui;
