import { expect } from 'chai';
import * as funcs from './ch4-q01';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch4-q01: ' + key, function() {
    const graph = {
      'a': ['a', 'c', 'd'],
      'b': ['e'],
      'c': ['c', 'd', 'f'],
      'd': ['f', 'd'],
      'e': ['b', 'g'],
      'f': ['e'],
      'g': ['i'],
      'h': ['b', 'c'],
      'i': ['i', 'e']
    };
    const testCases = [
      { init: 'a', finish: 'b' },
      { init: 'a', finish: 'f' },
      { init: 'a', finish: 'a' },
      { init: 'h', finish: 'i' },
      { init: 'i', finish: 'i' }
    ];
    it('returns true if nodes are connected', function() {
      testCases.forEach((test) => {
        expect(func(graph, test.init, test.finish)).to.be.true;
      });
    });
    const testCases2 = [
      { init: 'i', finish: 'h' },
      { init: 'c', finish: 'a' },
      { init: 'a', finish: 'h' },
      { init: 'f', finish: 'd' },
      { init: 'g', finish: 'f' }
    ];
    it('returns false if nodes are not connected', function() {
      testCases2.forEach((test) => {
        expect(func(graph, test.init, test.finish)).to.be.false;
      });
    });
  });
}
