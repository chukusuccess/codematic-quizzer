import {
  getNumberList,
  shuffleArray,
  pushToArray,
} from "../utilities/arrays.utils";

// TO-DO: use this util for numbering questions and answers
describe("Array Utils", () => {
  it("can create numberr list from a number", () => {
    const result1 = getNumberList(4);
    const result2 = getNumberList(5);

    expect(result1).toEqual([1, 2, 3, 4]);
    expect(result2).toEqual([1, 2, 3, 4, 5]);
  });
});

// TO-DO: use this util to shuffle questions and answers
describe("Array Utils", () => {
  it("can shuffle categories array", () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [1, 2, 3, 4, 5];

    const result1 = shuffleArray(input1);
    const result2 = shuffleArray(input2);

    expect(result1).toHaveLength(input1.length);
    expect(result2).toHaveLength(input2.length);

    expect(result1).not.toEqual(input1);
    expect(result2).not.toEqual(input2);

    input1.forEach((element) => {
      expect(result1).toContain(element);
    });
    input2.forEach((element) => {
      expect(result2).toContain(element);
    });
  });
});

// TO-DO: use this util for automatically adding correct answers to answers array during loop
describe("Array Utils", () => {
  it("can add correct answer to answers array", () => {
    const result1 = pushToArray("correct answer", [
      "answer1",
      "answer2",
      "answer3",
    ]);

    expect(result1).toEqual([
      "answer1",
      "answer2",
      "answer3",
      "correct answer",
    ]);
  });
});
