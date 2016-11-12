export class Manager extends Employee {
    constructor(callHandler) {
    	super(callHandler);
    	this.rank = Rank.Manager();
    }
}
