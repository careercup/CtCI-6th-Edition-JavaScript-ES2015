'use strict';

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      let lchar = char.toLowerCase();
      if (chars.has(lchar)) {
        chars.delete(lchar);
      }
      else {
        chars.add(lchar);
      }
    }
  }

  return chars.size <= 1;
}

/**
 * Use a integer which as 32 bits as a series of flags. Convert each coming 
 * letter (English Alphabet) to lowercase and map it to an integer between 0 and 26,
 * see it as the position of bit and toggle this bit. After iteration, check if 
 * flags has at most one bit that is set to 1.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */

export function isPalindromePermutationsBit(str) {
  if (!str) {
    return false;
  }

  let flags = 0;

  for (let char of str) {
    if (char !== ' ') {
      flags ^= (1 << (char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)));
    }
  }

  return (((flags - 1) & flags) === 0); // ex: flags should be 32 bits, 
                                        // abuse 4 bits for brief explanation here.
                                        // flags: 0110,  0110 - 0001 = 0101, 0101 & 0110 = 0100
                                        // flags: 0100,  0100 - 0001 = 0011, 0011 & 0100 = 0000
                                        // flags: 0000,  0 - 1 = -1,         1111 (two's complement) & 0000 = 0000 
}


