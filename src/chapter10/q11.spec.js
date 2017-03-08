import { expect } from 'chai';
import { sort } from './q11';

describe('ch10-q11: sort array to peeks and valleys. ', function () {
  const array = [5, 3, 1, 2, 3];

  it('Should return correctly sorted array with only peaks and valleys.', function () {
    let result = sort(array);
    let isCorrectSort = result.every((value, index, arr) => {
      return isValleyOrPeek(arr, index);
    });
    expect(isCorrectSort).to.be.eq(true, JSON.stringify(result));
  });
});

function isValleyOrPeek(array, index) {
  
  if (index === 0 || index === array.length - 1) {
    return true;
  }
  if (array[index - 1] <= array[index] && array[index + 1] <= array[index]
    || array[index - 1] >= array[index] && array[index + 1] >= array[index]) {
    return true;
  }
  return false;
}