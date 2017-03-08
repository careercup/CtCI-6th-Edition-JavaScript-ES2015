//10.2 Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to each other.

export function groupAnagrams(A) {
  let buckets = [];
  for (let i = 0, len = A.length; i < len; i++) {
    const elementSorted = sortLetters(A[i]);
    const bucket = buckets.find((element) => {
      return elementSorted === element.sortedWord;
    });
    if (bucket) {
      bucket.elements.push(A[i]);
    }
    else {
      buckets.push({ sortedWord: elementSorted, elements: [A[i]] });
    }
  }

  let result = [];
  for (let i = 0, len = buckets.length; i < len; i++) {
    result = result.concat(buckets[i].elements);
  }

  return result;
}

function sortLetters(word) {
  return word.toLowerCase().split('').sort().join('');
}