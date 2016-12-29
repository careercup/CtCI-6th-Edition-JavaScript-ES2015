'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str The given string
 * @return {string}     The compressed string or the original string
 */
export function compressString(str) {
  if (!str) {
    return str;
  }

  let compressed = '';
  let countConsecutive = 0;
  for (let i = 0; i < str.length; ++i) {
    ++countConsecutive;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      // JS does not have a StringBuilder/StringBuffer style class for creating strings
      // string concatenation has been heavily optimised in JS implementations and
      // is faster than creating a string via an array then using a .join('') at the end
      compressed += str[i] + countConsecutive;
      countConsecutive = 0;
    }
  }

  return compressed.length < str.length ? compressed : str;
}

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * It runs a first pass through the string to determine the compression length.
 * If the compression length is not smaller than current length, we can just
 * return the given string without ever creating the compressed version.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str The given string
 * @return {string}     The compressed string or the original string
 */
export function compressStringOnlyIfNecessary(str) {
  if (!str) {
    return str;
  }

  const compressedLength = getCompressionLength(str);
  return compressedLength < str.length ?
    compressStringOnlyIfNecessaryHelper(str) :
    str;
}

function getCompressionLength(str) {
  let compressedLength = 0,
    countConsecutive = 0;
  for (let i = 0; i < str.length; ++i) {
    ++countConsecutive;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressedLength += 1 + String(countConsecutive).length;
      countConsecutive = 0;
    }
  }
  return compressedLength;
}

function compressStringOnlyIfNecessaryHelper(str) {
  let compressed = '';
  for (let i = 0; i < str.length; ++i) {
    let char = str[i],
      start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end
    compressed += char + (i - start + 1);
  }
  return compressed;
}
