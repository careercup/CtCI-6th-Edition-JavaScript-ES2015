import { expect } from 'chai';
import { getDuplicates } from './q08';


describe('ch10-q08: find duplicates in int array', function () {
  const array = [1, 2, 3, 4, 1, 6, 3];

  it('Index of "ball"', function () {
    let result = getDuplicates(array, 'ball');
    expect(result).to.be.eql([1, 3]);
  });
});