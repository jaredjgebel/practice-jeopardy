export const fetchClues = () => {
  fetch(`/clues`, {
    method: "GET"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
