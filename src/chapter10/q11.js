/*10.11 Peaks and Valleys: In an array of integers, a "peak" is an element which 
is greater than or equal to the adjacent integers and a "valley" is an element which 
is less than or equal to the adjacent inte- gers. For example, in the array 
{5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {S, 2} are valleys. Given an array of 
integers, sort the array into an alternating sequence of peaks and valleys.
EXAMPLE
Input:  {5, 3, 1, 2, 3}
Output: {5, 1, 3, 2, 3}.*/

export function sort(intArray) {
  intArray.sort();

  let ind = 0;
  while (ind < Math.floor(intArray.length / 2)) {
    swap(intArray, ind, intArray.length - ind - 1);
    ind += 2;
  }

  return intArray;
}

function swap(array, a, b) {
  const buffer = array[a];
  array[a] = array[b];
  array[b] = buffer;
}