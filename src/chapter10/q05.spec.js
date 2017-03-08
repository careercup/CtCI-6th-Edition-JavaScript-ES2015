import { expect } from 'chai';
import { findIndex } from './q05';


describe('ch10-q05: find index of item in string array with empty strings', function () {
  const array = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];

  it('Index of "ball"', function () {
    let result = findIndex(array, 'ball');
    expect(result).to.be.eq(4);
  });

  it('Index of "at"', function () {
    let result = findIndex(array, 'at');
    expect(result).to.be.eq(0);
  });

  it('Index of "car"', function () {
    let result = findIndex(array, 'car');
    expect(result).to.be.eq(7);
  });

  it('Index of "dad"', function () {
    let result = findIndex(array, 'dad');
    expect(result).to.be.eq(10);
  });

  it('Index of item that doen\'t exist in array', function () {
    let result = findIndex(array, 'trololo');
    expect(result).to.be.eq(-1);
  });
});