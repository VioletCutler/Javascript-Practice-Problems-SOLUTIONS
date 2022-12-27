// YOUR CODE BELOW

function onlyOdds(num) {
    let sum = 0;
  
    // start the loop at num, end the loop at 1, decrementing by 1
    for (let i = num; i >= 1; i--) {
  
      // if i is an odd number...
      if (i % 2 === 1) {
  
        // ...add it to the sum
        sum += i;
      }
    }
  
    // return the sum after the for loop is finished
    return sum;
  }
  
  // alternate solution that uses a while loop and a helper function
  function onlyOdds2(num) {
    let sum = 0;
  
    // keep looping until num is 1
    while (num >= 1) {
  
      // pass the num into isOdd, which will return true if num is odd
      if (isOdd(num)) {
        sum += num;
      }
  
      // don't forget to decrement num or we'll have an infinite loop
      num--;
    }
  
    return sum;
  
    // our helper function takes a number a returns true if the number is odd
    function isOdd(num) {
      return num % 2 === 1;
    }
  }