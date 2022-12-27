/* eslint-disable no-unused-vars */

const mapReduce = (arr, iteratorFunc) =>
  arr.reduce((accum, val) => {
    accum.push(iteratorFunc(val));
    return accum;
  }, []);

const everyReduce = (arr, callbackFunc) => {
  if (!arr.length) return true;
  const newArray = arr.reduce((accum, val) => {
    if (callbackFunc(val)) {
      accum.push(true)
      return accum;
    } else {
      accum.push(false)
      return accum;
    }
  }, []);
  if (newArray.includes(false)) return false;
  return true;
};
