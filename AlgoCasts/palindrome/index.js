// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

/////////////most straightforward solution
// const reversed = str
//   .split('')
//   .reverse()
//   .join('');
//
// return str === reversed;
///////////////////////////////////////////
/////////////second solution using every - causes multiple uncecessary iterations over the array
// return str.split('').every((char, i) => {
//   return char === str[str.length - i - 1];
// });
/////////////////////////////////////////////
