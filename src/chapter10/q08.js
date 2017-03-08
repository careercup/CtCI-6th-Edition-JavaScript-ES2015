/*10.5 Sparse Search: Given a sorted array of strings that is interspersed 
with empty strings, write a method to find the location of a given string.*/

export function getDuplicates(intArray) {
  const vector = {};
  const duplicates = [];
  for (var i = 0; i < intArray.length; i++) {
    var element = intArray[i];
    if (vector[element]) {
      if (-1 === duplicates.indexOf(element)) {
        duplicates.push(element);
      }
    }
    else {
      vector[element] = 1;
    }
  }

  return duplicates;
}