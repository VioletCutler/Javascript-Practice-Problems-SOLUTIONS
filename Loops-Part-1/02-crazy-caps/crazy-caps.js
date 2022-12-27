// YOUR CODE BELOW

function crazyCaps(originalString) {
    // create an empty string; we'll concatenate characters onto this string
    let crazyString = '';
  
    // loop through the original string
    for (let i = 0; i < originalString.length; i++) {
  
      // store the character in a variable (optional)
      let char = originalString[i];
  
      // if the index is even...
      if (i % 2 === 0) {
  
        // ...just concatenate the character onto crazyString
        crazyString += char;
      }
  
      // else, the index must be odd
      else {
  
        // uppercase the char
        char = char.toUpperCase();
  
        // concat the uppercased char onto crazyString
        crazyString += char;
      }
    }
  
    // return crazyString after the for loop is finished
    return crazyString;
  }