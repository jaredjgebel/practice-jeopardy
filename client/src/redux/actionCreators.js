import * as c from "./constants";

export const pageBack = currentPage => ({
  type: c.PAGE_FORWARD,
  currentPage
});

export const pageFoward = currentPage => ({
  type: c.PAGE_FORWARD,
  currentPage
});
