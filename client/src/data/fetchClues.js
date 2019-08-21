const port = 8080;
const host = "localhost";
const apiUrl = `http://${host}:${port}`;

export const fetchClues = () => {
  fetch(`${apiUrl}/clues`, {
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
