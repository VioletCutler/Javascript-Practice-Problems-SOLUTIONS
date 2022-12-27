/* eslint-disable no-unused-vars */

function concatString() {
    return Array.from(arguments).join('');
  }
  
  // equivalent solution without `Array.from` or spread operator:
  {
    const concatString = function () {
      let finalString = '';
      for (let i = 0; i < arguments.length; i++) {
        finalString += arguments[i];
      }
      return finalString;
    };
  }
  // equivalent solution with spread operator:
  {
    const concatString = (...strs) => strs.join('');
  }
  
  const yourFunctionRunner = (...funcs) => {
    let output = '';
    for (const func of funcs) output += func();
    return output;
  };
  
  // alternative solutions:
  {
    const yourFunctionRunner = function () {
      let output = '';
      for (const func of arguments) output += func();
      return output;
    };
  }
  {
    const yourFunctionRunner = (...funcs) => funcs.map((func) => func()).join('');
  }
  {
    const yourFunctionRunner = (...funcs) =>
      funcs.reduce((str, f) => str + f(), '');
  }
  
  const makeAdder = (num1) => (num2) => num1 + num2;
  
  // alternative solution:
  {
    const makeAdder = (num1) => {
      return (num2) => {
        return num1 + num2;
      };
    };
  }
  
  const once = (func) => {
    let notCalled = true;
    return () => {
      if (notCalled) {
        notCalled = false;
        return func();
      }
      return 'the function has already been called...';
    };
  };
  
  // alternative solution:
  {
    const once = (func) => {
      let calls = 0;
      return () => (calls++ ? 'the function has already been called...' : func());
    };
  }
  
  const createObjectWithClosures = function () {
    let total = 0;
    return {
      oneIncrementer() {
        total++;
      },
      tensIncrementer() {
        total += 10;
      },
      getValue() {
        return total;
      },
      setValue(val) {
        total = val;
      },
    };
  };
  
  // alternative solution:
  {
    const createObjectWithClosures = () => {
      let total = 0;
      return {
        oneIncrementer: () => total++,
        tensIncrementer: () => (total += 10),
        getValue: () => total,
        setValue: (val) => (total = val),
      };
    };
  }
  
  const dontSpillTheBeans = (secret) => ({
    getSecret() {
      return secret;
    },
    setSecret(v) {
      secret = v;
    },
  });
  
  // alternative solution:
  {
    const dontSpillTheBeans = (secret) => ({
      getSecret: () => secret,
      setSecret: (v) => (secret = v),
    });
  }