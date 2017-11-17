// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}
module.exports = reverse;

// ////////////////SOLUTION 1
// const arr = str.split('');
// // split string to array
// arr.reverse();
// return arr.join('');
////////////////////////////////
///////////////REVISED SOLUTION 1
// return str
//   .split('')
//   .reverse()
//   .join('');
///////////////////////SOLUTION 2
// let reversed = '';
// //  same as: for (i = 0; i < str.length; i++)
// for (let character of str) {
//   reversed = character + reversed;
// }
// return reversed;
// }
///
