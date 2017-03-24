import { expect } from 'chai';
import * as funcs from './ch1-q6';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q6: ' + key, function() {

    it('returns input where null/undefined', function() {
      expect(func(null)).to.be.null;
      expect(func(undefined)).to.be.undefined;
    });

    it('returns input where empty string', function() {
      expect(func('')).to.equal('');
    });

    [
      'a',
      'aa',
      'abc',
      'aabbcc',
      'ababababccab'
    ].forEach(arg => {

      it(`returns input string where compression doesn't use less space: '${arg}'`, function() {
        expect(func(arg)).to.eql(arg);
      });

    });

    [
      { arg: 'aaa', out: 'a3' },
      { arg: 'bbbbbb', out: 'b6' },
      { arg: 'abbbbbbc', out: 'a1b6c1' },
      { arg: 'aaabccc', out: 'a3b1c3' },
      { arg: 'hhellllllllooooo!', out: 'h2e1l8o5!1' },
      { arg: 'woorrrllllddddd', out: 'w1o2r3l4d5' }
    ].forEach(context => {

      it(`returns ${context.out} with string ${context.arg}`, function() {
        expect(func(context.arg)).to.eql(context.out);
      });

    });

  });
}
