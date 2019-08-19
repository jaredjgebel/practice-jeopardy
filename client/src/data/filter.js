const fs = require("fs");

fs.readFile("./clues.json", (err, data) => {
  if (err) {
    console.log(err);
  }

  const clues = JSON.parse(data);
  // let count = 0;

  // clues.forEach((clue, i) => {
  //   if (clue.invalid_count) {
  //     count++;
  //     console.log(clue);
  //   }
  // });
  // console.log(count);

  const filteredClues = clues.filter(clue => {
    if (
      !clue.value ||
      clue.answer === "" ||
      clue.question === "" ||
      clue.invalid_count
    ) {
      return false;
    }
    return true;
  });

  // console.log(filteredClues.length);

  fs.writeFile(
    "./filteredClues.json",
    JSON.stringify(filteredClues),
    (err, data) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
