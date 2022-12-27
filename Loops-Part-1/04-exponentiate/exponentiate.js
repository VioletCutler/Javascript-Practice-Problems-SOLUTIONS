// YOUR CODE BELOW
function exponentiate(base, power) {
    // start result at 1. if power is zero, result will not be changed
    let result = 1;
  
    for (let i = 0; i < power; i++) {
      // multiply the result by the base for 'power' number of times
      result *= base;
    }
  
    return result;
  }
  
  // alternate solution with a while loop
  function exponentiate(base, power) {
    if (power === 0) {
      return 1;
    }
  
    let result = base;
  
    while (power > 1) {
      result *= base;
      power--;
    }
  
    return result;
  }