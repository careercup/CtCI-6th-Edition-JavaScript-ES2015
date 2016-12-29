'use strict';

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }

  let chars = new Map();

  for (const ch of str1) {
    chars.set(ch, chars.get(ch) + 1 || 1); // increment or set to 1
  }

  for (const ch of str2) {
    if (!chars.has(ch)) return false; // shortcircuit if a char doesn't exist in both strings
    const nextCount = chars.get(ch) - 1;
    if (nextCount === 0) {
      chars.delete(ch);
    } else {
      chars.set(ch, nextCount);
    }
  }

  return chars.size === 0;
}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationSorted(str1, str2) {
  if (str1.length === 0 || str1.length !== str2.length) {
    return false;
  }
  // sort string using quicksort
  const sorted1 = sortString(str1);
  const sorted2 = sortString(str2);

  return sorted1.every((v, i) => v === sorted2[i]);
}

// for the purposes of the question, ignore array creation and assume O(1) space sort as with arrays
function sortString(str) {
  return Array.from(str).sort();
}
