/* eslint-disable no-unused-vars */


const repeat = (str, num) => {
    let output = '';
    for (let i = 0; i < num; i++) output += str;
    return output;
  };
  
  // alternative solution:
  {
    const repeat = (str, num) => {
      let output = '';
      while (num--) output += str;
      return output;
    };
  }
  
  const loopSum = (arr) => {
    let total = 0;
    for (const num of arr) total += num;
    return total;
  };
  
//   // alternative solution:
  {
    const loopSum = (arr) => {
      let total = 0;
      for (let i = 0; i < arr.length; i++) total += arr[i];
      return total;
    };
  }
  
  const join = (arr, delim = '') => {
    let output = '';
    for (const str of arr) output += str + delim;
    return output.slice(0, output.length - delim.length);
  };
  
//   // alternative solution:
  {
    const join = (arr, delim = '') => {
      let output = '';
      for (let i = 0; i < arr.length; i++)
        if (i) output += delim + arr[i];
        else output += arr[i];
      return output;
    };
  }
  
  const gridGenerator = (size) => {
    let board = '';
    for (let lineIdx = 0; lineIdx < size; lineIdx++) {
      for (let charIdx = 0; charIdx < size; charIdx++)
        if ((lineIdx + charIdx) % 2 === 0) board += '#';
        else board += ' ';
      board += '\n';
    }
    return board;
  };
  
  const paramify = (obj) => {
    const params = [];
    for (let prop in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(prop)) params.push(`${prop}=${obj[prop]}`);
    }
    return params.sort().join('&');
  };
  
//   // alternative solution:
  {
    const paramify = (obj) => {
      const params = [];
      for (let prop in obj)
        if (Object.hasOwn(obj, prop)) params.push(`${prop}=${obj[prop]}`);
      return params.sort().join('&');
    };
  }
  
  const paramifyObjectKeys = (obj) => {
    const params = [];
    for (const prop of Object.keys(obj)) params.push(`${prop}=${obj[prop]}`);
    return params.sort().join('&');
  };
  
//   // alternative solution:
  {
    // FSA Note: In an upcoming section, we will dive deeper into [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), for now do your best in reading the documentation and reaching out with questions if you don't know how Array.prototype.map is operating.
    const paramifyObjectKeys = (obj) =>
      Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .sort()
        .join('&');
  }
  
  // unoptimized bubble sort:
  const sort = (arr) => {
    for (const _ of arr)
      for (let i = 0; i < arr.length; i++)
        if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    return arr;
  };
  // alternative solutions:
  {
    // optimized bubble sort
    const sort = (arr) => {
      let isSorted = true;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++)
          if (arr[j] > arr[j + 1]) {
            // this is swapping by array destructuring assignment: we are assigning to two locations on one line (arr[j] and arr[j + 1]), and their new values will be, in order, arr[j + 1] and arr[j]. it's equivalent to these three lines:
            // let temp = arr[j];
            // arr[j] = arr[j + 1];
            // arr[j + 1] = temp;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            isSorted = false;
          }
        if (isSorted) break;
      }
      return arr;
    };
  }
  {
    // unoptimized selection sort
    const sort = (arr) => {
      for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)
          if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
      return arr;
    };
  }
  {
    // optimized selection sort
    const sort = (arr) => {
      for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++)
          if (arr[j] < arr[minIdx]) minIdx = j;
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }
      return arr;
    };
  }
  {
    // insertion sort
    const sort = (arr) => {
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && current < arr[j]) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
      }
      return arr;
    };
  }
