
/* Employee is a super class for the Director, Manager, and Respondent classes. It is implemented as an
 * abstract class, since there should be no reason to instantiated an Employee type directly.
 */
export class Employee {
  constructor(handler) {
    this.currentCall = null;
    this.rank;

    this.callHandler = handler;
  }

	/* Start the conversation */
  receiveCall(call) {
    this.currentCall = call;

    setTimeout(() => this.callCompleted(), 3000);
  }

  /* the issue is resolved, finish the call */
  callCompleted() {
    if (this.currentCall !== null) {
      /* Disconnect the call. */
      this.currentCall.disconnect();

      /* Free the employee */
      this.currentCall = null;
    }

    /* Check if there is a call waiting in queue */
    this.assignNewCall();
  }

  /*
   * The issue has not been resolved. Escalate the call, and assign a new call
   * to the employee.
   */
  escalateAndReassign() {
    if (this.currentCall !== null) {
      /* esthis.calate call */
      this.currentCall.incrementRank();
      this.callHandler.dispatchCall(this.currentCall);

      /* free the employee */
      this.currentCall = null;
    }

    /* assign a new call */
    this.assignNewCall();
  }

  /* Assign a new call to an employee, if the employee is free. */
  assignNewCall() {
    if (!this.isFree()) {
      return false;
    }
    return this.callHandler.assignCall(this);
  }

  /* Returns whether or not the employee is free. */
  isFree() {
    return this.currentCall === null;
  }

  getRank() {
    return this.rank;
  }
}
