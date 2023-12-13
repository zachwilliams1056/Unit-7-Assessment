const sumsToZero = numbers => {

    const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

    return sum === 0
}
    const numsArray = [2, -1, 3, 5, -2];
    console.log(sumsToZero(numsArray));
// O(6)


const hasUniqueCharacters = (str) => {
    let seenCharacters = {};
  
    for (let char of str) {
      if (seenCharacters[char]) {
        return false;
      }
      seenCharacters[char] = true;
    }
  
    return true;
  };

const inputString = 'xylophone'
const result = hasUniqueCharacters(inputString)

if (result) {
    console.log(`The string "${inputString}" has all unique characters.`);
  } else {
    console.log(`The string "${inputString}" does not have all unique characters.`);
  };
// O(9)



function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseSentence = sentence.toLowerCase();

    for (const letter of alphabet) {
        if (!lowercaseSentence.includes(letter)) {
            return false;
        }
    }
        return true;
}

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(sentence));

//O(26)

const findLongestWord = (wordList) => {
    if (!wordList || wordList.length === 0) {
        return 0;
    }

    const longestWord = wordList.reduce((longest, currentWord) => (
        currentWord.length > longest.length ? currentWord : longest
    ), "");

    return longestWord;
};

const words = ["Xylophone", "Drums", "Guitar", "Bass", "Microphone"];
const answer = findLongestWord(words);
console.log("Longest word:", answer);

//O(10)




