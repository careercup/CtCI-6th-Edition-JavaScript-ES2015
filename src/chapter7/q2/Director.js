import {Employee} from './Employee';
import {Rank} from './Rank';

export class Director extends Employee {
  constructor(callHandler) {
    super(callHandler);
    this.rank = Rank.Director;
  }
}
