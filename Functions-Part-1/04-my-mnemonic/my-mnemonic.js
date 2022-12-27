// YOUR CODE BELOW

function myMnemonic (firstWord, secondWord, thirdWord, fourthWord) {
    let mnemonic = '';

    if (firstWord !== undefined) mnemonic += firstWord[0]
    if (secondWord !== undefined) mnemonic += secondWord[0]
    if (thirdWord !== undefined) mnemonic += thirdWord[0]
    if (fourthWord !== undefined) mnemonic += fourthWord[0]

    return mnemonic
}

// Alternate solution that can account for any number of words
function myMnemonic2 (...words) {
    let mnemonic = ''

    for (let i = 0; i < words.length; i++) {
            const currentWord = words[i]
            const currentCharacter = currentWord[0]
            mnemonic += currentCharacter
    }
    return mnemonic
}