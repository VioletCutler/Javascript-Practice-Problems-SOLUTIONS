// YOUR CODE BELOW
function mostVowels(sentence) {
    let currentWord = '';
    let currentVowelCount = 0;
  
    let maxWord = '';
    let maxVowelCount = 0;
  
    // loop through the entire sentence, character by character
    for (let i = 0; i < sentence.length; i++) {
  
      // save the current character in a variable (optional)
      let char = sentence[i];
  
      // if the current character isn't a space and we're not at the end of the sentence...
      if (char !== ' ' && i !== sentence.length - 1) {
  
        // ...then we're in the middle of a word. concat the char onto the currentWord
        currentWord += char;
  
        // if the char is a vowel...
        if (isVowel(char)) {
  
          // ...increment the count of vowels for the current word
          currentVowelCount += 1;
        }
      }
  
      // else, char is a space, or we're at the end of the sentence. either way we just finished a word.
      else {
  
        // if the vowel count for the just-finished word is greater than the max previously found...
        if (currentVowelCount > maxVowelCount) {
  
          // ...reassign maxVowelCount to the new max
          maxVowelCount = currentVowelCount;
  
          // reassign maxVowel to the new word with the most vowels
          maxWord = currentWord;
        }
  
        // reset the currentWord and currentVowelCount values for the next word
        currentWord = '';
        currentVowelCount = 0;
      }
    }
  
    // return the maxWord after the for loop is finished
    return maxWord;
  
    // isVowel is a helper function that takes a char and returns true if the char is a vowel
    function isVowel(char) {
      let vowels = 'aeiouAEIOU';
  
      if (vowels.indexOf(char) >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  }