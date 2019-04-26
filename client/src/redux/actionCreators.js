import * as c from "./constants";

export const pageBack = currentPage => ({
  type: c.PAGE_FORWARD,
  payload: currentPage
});

export const pageFoward = currentPage => ({
  type: c.PAGE_FORWARD,
  payload: currentPage
});

export const toggleActiveGame = toggleState => ({
  type: c.TOGGLE_ACTIVE_GAME,
  payload: toggleState
});
