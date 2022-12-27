/* eslint-disable no-unused-vars */

const forEach = (arr, func) => {
    for (const elem of arr) func(elem);
  };
  
  // alternative solution with extra callback arguments:
  {
    const forEach = (arr, func) => {
      for (let i = 0; i < arr.length; i++) func(arr[i], i, arr);
    };
  }
  
  const doubler = (n) => n * 2;
  
  const map = (arr, func) => {
    const output = [];
    arr.forEach((elem) => output.push(func(elem)));
    return output;
  };
  
  // alternative solution with extra callback arguments:
  {
    const map = (arr, func) => {
      const output = [];
      arr.forEach((elem, i) => output.push(func(elem, i, arr)));
      return output;
    };
  }
  
  const filter = (arr, func) => {
    const output = [];
    arr.forEach((elem) => {
      if (func(elem)) output.push(elem);
    });
    return output;
  };
  
  // alternative solution with extra callback arguments:
  {
    const filter = (arr, func) => {
      const output = [];
      arr.forEach((elem, i) => {
        if (func(elem, i, arr)) output.push(elem);
      });
      return output;
    };
  }
  
  const includes = (obj, val) => {
    for (const key in obj) if (obj[key] === val) return true;
    return false;
  };
  
  // alternative solution with reduce:
  {
    const includes = (obj, val) =>
      Object.values(obj).reduce((acc, v) => acc || v === val, false);
  }
  
  const countWords = (acc, sentence) => acc + sentence.split(' ').length;
  
  const reduce = (arr, startVal, reducer) => {
    let accumulator = startVal;
    arr.forEach((elem) => (accumulator = reducer(accumulator, elem)));
    return accumulator;
  };
  
  // alternative solution with extra callback arguments:
  {
    const reduce = (arr, startVal, reducer) => {
      let accumulator = startVal;
      arr.forEach(
        (elem, i) => (accumulator = reducer(accumulator, elem, i, arr))
      );
      return accumulator;
    };
  }
  
  const sum = (arr) => reduce(arr, 0, (acc, num) => acc + num);
  
  // alternative solution using built-in reduce:
  {
    const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);
  }
  
  const every = (arr, predicate) =>
    reduce(arr, true, (acc, elem) => acc && predicate(elem));
  
  // alternative solution:
  {
    const every = (arr, predicate) =>
      reduce(arr, true, (acc, elem) => {
        if (!predicate(elem)) return false;
        return acc;
      });
  }
  
  const some = (arr, predicate) =>
    reduce(arr, false, (acc, elem) => acc || predicate(elem));
  
  // alternative solution:
  {
    const some = (arr, predicate) =>
      reduce(arr, false, (acc, elem) => {
        if (predicate(elem)) return true;
        return acc;
      });
  }