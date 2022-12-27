// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {

    // check the validity of the targetNum input first
    if (targetNum < currentNum) {
      return 'targetNum must be larger than currentNum'
    }
  
    let numMinutes = 0;
  
    // if the currentNum is less than the target...
    while (currentNum < targetNum) {
  
      // ...double the number of bacteria
      currentNum *= 2;
  
      // add another 20 minutes
      numMinutes += 20;
    }
  
    // if we're out of the while loop, currentNum must be >= targetNum
    return numMinutes;
  }