// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {

    // if startIdx was not passed into the function, return the original string
    if (startIdx === undefined) {
      return originalString;
    }
  
    // if endIdx was not passed into the function, give it a default value as the length of the string
    if (endIdx === undefined) {
      endIdx = originalString.length;
    }
  
    // will concatenate characters onto slicedString before returning it
    let slicedString = '';
  
    // use the startIdx and endIdx as the start and end of the loop
    for (let i = startIdx; i < endIdx; i++) {
  
      // store the current character in a variable (optional)
      let char = originalString[i];
  
      // concatenate the character onto slicedString
      slicedString += char;
    }
  
    // return slicedString after the for loop
    return slicedString;
  }