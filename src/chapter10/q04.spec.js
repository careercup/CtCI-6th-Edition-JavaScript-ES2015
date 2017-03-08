import { expect } from 'chai';
import { findIndex, Listy } from './q04';


describe('ch10-q04: find index in listy', function () {
  const listy = new Listy([2, 4, 5, 6, 19, 20, 50, 100]);
  const result = findIndex(listy, 80);
  it('Item between the existing items range but doesn\'t exist in listy', function () {
    expect(result).to.be.eql(-1);
  });

  const result1 = findIndex(listy, 120);
  it('Item bigger then any element in listy', function () {
    expect(result1).to.be.eql(-1);
  });

  const result2 = findIndex(listy, 50);
  it('Item 50 exists in listy', function () {
    expect(result2).to.be.eql(6);
  });

  const result3 = findIndex(listy, 19);
  it('Item 19 exists in listy', function () {
    expect(result3).to.be.eql(4);
  });
});