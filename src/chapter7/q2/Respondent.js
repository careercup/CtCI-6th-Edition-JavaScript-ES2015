export class Respondent extends Employee {
    constructor(callHandler) {
    	super(callHandler);
    	this.rank = Rank.Responder();
    }
}
