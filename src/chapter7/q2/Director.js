export class Director extends Employee {
    constructor(callHandler) {
    	super(callHandler);
    	this.rank = Rank.Director();
    }
}
