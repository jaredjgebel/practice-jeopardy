const apiUrl = `http://jservice.io/api`;

export const getRandomClues = () => {
  fetch(`${apiUrl}/random?count=100`, {
    method: "GET"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    })
    // .then(clues => {
    //   console.log("CLUES", clues);
    // })
    .catch(err => {
      console.log("Error: ", err);
    });
};
