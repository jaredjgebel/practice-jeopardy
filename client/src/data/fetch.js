const apiUrl = `http://jservice.io/api`;

export const fetchRandomClues = () => {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}/random?count=100`, {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        resolve(response.json());
      })
      .catch(err => {
        reject("Error: ", err);
      });
  });
};
