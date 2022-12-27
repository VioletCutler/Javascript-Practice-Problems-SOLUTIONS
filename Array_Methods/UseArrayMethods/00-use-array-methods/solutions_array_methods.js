/* eslint-disable no-unused-vars */

function useMapToUpperCase(str) {
  const wordArray = str.split(" ");
  return wordArray.map((word) => word.toUpperCase());
}

function useFilter(arr) {
  return arr.filter((word) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "@") {
        return true;
      }
    }
    return false;
  });
}

function sumWithReduce(arr, startingValue = 0) {
  return arr.reduce((accum, val) => {
    return accum + val;
  }, startingValue);
}

function filterEvensDoubleAndSum(arr) {
  const filteredNums = arr.filter((num) => num % 2 === 0);
  const doubledNums = filteredNums.map((num) => num * 2);
  const totaledNums = doubledNums.reduce((accum, val) => accum + val, 0);
  return totaledNums;
}
