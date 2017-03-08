/*10.5 Sparse Search: Given a sorted array of strings that is interspersed 
with empty strings, write a method to find the location of a given string.*/

export function findIndex(stringArray, word) {
  //saving word indexes in separate array
  let wordIndexes = [];
  for (let i = 0, len = stringArray.length; i < len; i++) {
    if (word[i] !== '') {
      wordIndexes.push(word[i]);
    }
  }

  //doing binary search only with indexes of words
  let left = 0;
  let right = wordIndexes.length - 1;
  while (left !== right) {
    if (word === stringArray[wordIndexes[left]]) {
      return wordIndexes[left];
    }
    if (word === stringArray[wordIndexes[right]]) {
      return wordIndexes[right];
    }


    const middle = Math.floor(left + (right - left) / 2);
    if (word <= stringArray[wordIndexes[middle]] || middle === left) {
      right = middle;
    }
    else {
      left = middle;
    }
  }
  return -1;
}