import {Employee} from './Employee';
import {Rank} from './Rank';

export class Respondent extends Employee {
    constructor(callHandler) {
      super(callHandler);
      this.rank = Rank.Responder;
    }
}
