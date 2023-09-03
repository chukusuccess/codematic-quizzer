/**
 * Accepts a number param and creates an array of length = number param; and items = numbers in ascending order; using the new Array constructor method.
 *
 * @param {number} count - Number value greater than 0
 * @returns number list array e.g [1, 2, 3, 4, 5]
 */
export const getNumberList = (count) => {
  const list = new Array(count);
  const numberList = [];
  for (let i = 1; i <= list.length; i += 1) {
    numberList.push(i);
  }
  return numberList;
};
///////////////////////////////////////////////////////////////////
/**
 * Backward loop to iterate through an array from the end to the beginning and swap each element with a randomly chosen element that comes before it.
 * @param {array} array - any non-empty array[]
 * @returns a shuffled version of your array. e.g [1,2,3,4,5] => [4,1,5,2,3]
 */
export const shuffleArray = (array) => {
  // Create a copy of the original array to avoid modifying it directly.
  const shuffledArray = [...array]; // (TO-DO): Refactor to array.with()

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements (array re-assignment)
  }

  return shuffledArray;
};
///////////////////////////////////////////////////////////////////
/** Adds a value or an array of values to an array
 *
 * @param {value|array} item - a value or an array of values
 * @param {array} array - an array
 * @returns [...array, ...item]
 */
export const pushToArray = (item, array) => {
  if (Array.isArray(item)) {
    return [...array, ...item];
  } else if (item) {
    return [...array, item];
  } else {
    console.error("Provide a valid value or array of values.");
    return array;
  }
};
