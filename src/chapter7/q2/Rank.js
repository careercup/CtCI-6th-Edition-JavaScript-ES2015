export class Rank {
	Responder (0),
	Manager (1),
	Director (2);
	
	private int value;
	
	private Rank(int v) {
		value = v;
	}
	
	public int getValue() {
		return value;
	}
}
export const Rank = {
    value: undefined,
	Responder : () => {
        this.value = 0; 
        return this.value;
    },
	Manager : () => {
        this.value = 1; 
        return this.value;
    },
	Director : () => {
        this.value = 2; 
        return this.value;
    },
	getValue() {
		return this.value;
	}
}
