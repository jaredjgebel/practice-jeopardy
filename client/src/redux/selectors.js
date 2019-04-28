export const isGameActive = state => {
  return state.ui && state.ui.gameActive;
};

export const isLoading = state => {
  return state.ui && state.ui.loading;
};

export const isAnswerVisible = state => {
  return state.clues && state.clues.answerVisible;
};

export const getCurrentPage = state => {
  return state.ui && state.ui.currentPage;
};

export const getTotalPages = state => {
  return state.ui && state.ui.totalPages;
};
