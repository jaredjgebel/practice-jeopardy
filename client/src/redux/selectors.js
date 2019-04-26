export const isGameActive = state => {
  return state.ui && state.ui.gameActive;
};

export const isLoading = state => {
  return state.ui && state.ui.loading;
};
