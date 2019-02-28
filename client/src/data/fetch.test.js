import { getRandomClues } from "./fetch";

describe("API request", () => {
  test("it should retrieve a batch of 100 random clues", async () => {
    expect.assertions(1);
    const clues = await getRandomClues();

    expect(clues.length === 100).toBeTruthy();
  });
});
