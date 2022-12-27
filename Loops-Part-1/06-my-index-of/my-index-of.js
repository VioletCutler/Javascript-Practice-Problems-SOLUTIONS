// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {

    // if user didn't pass in startIdx, define it by default as 0
    if (startIdx === undefined) {
      startIdx = 0;
    }
  
    /*
      This for loop is tricky to set up!
      Here's the approach: given a source 'Loopy Luna' and a searchValue 'Luna',
      we're going to loop through the source, looking at every substring that's the
      same length as the searchValue:
      Loop
      oopy
      opy
      py L
      ... and so on
      Then we compare each of these substrings to the searchValue. If they match,
      we've found what we're looking for!
      'Luna' is the last substring of length 4 that we could get from the source.
      It doesn't make sense to check any more substrings after Luna, since they would
      would be of length less than 4 (which means they definitely won't match the
      searchValue). That's why our stop condition in the for loop stops the iteration
      before we get to the end of the source string.
    */
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
  
      // get a substring from the source, starting at i, with the same length as the search value
      let substring = source.slice(i, i + searchValue.length);
  
      // if the substring matches the search value...
      if (substring === searchValue) {
  
        // ...return the current index
        return i;
      }
    }
  
    // if we get past the end of the for loop, we never found a match and can return -1
    return -1;
  }
  
  // alternate solution that uses ES6 default parameters to handle startIdx
  function myIndexOf2(source, searchValue, startIdx=0) {
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
      let substring = source.slice(i, i + searchValue.length);
  
      if (substring === searchValue) {
        return i;
      }
    }
  
    return -1;
  }