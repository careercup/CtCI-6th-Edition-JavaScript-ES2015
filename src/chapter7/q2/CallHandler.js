import {Call} from './Call';
import {Caller} from './Caller';

import {Respondent} from './Respondent';
import {Manager} from './Manager';
import {Director} from './Director';

/* CallHandler represents the body of the program,
 * and all calls are funneled first through it. 
 */

/* We have 3 levels of employees: respondents, managers, directors. */
const LEVELS = 3; 

/* Initialize with 10 respondents, 4 managers, and 2 directors. */
const NUM_RESPONDENTS = 10;

export class CallHandler {	
  constructor() {
    /* List of employees, by level.
     * employeeLevels[0] = respondents
     * employeeLevels[1] = managers
     * employeeLevels[2] = directors
     */
    this.employeeLevels = [];

    this.callQueues = []; 
    /* queues for each call�s rank */
    for(let i = 0; i < LEVELS; i++){
      this.callQueues.push([]); 
    }

    // Create respondents.
    let respondents = [];
    for (let k = 0; k < NUM_RESPONDENTS - 1; k++) {
      respondents.push(new Respondent(this));
    }
    this.employeeLevels.push(respondents);

    // Create managers.
    let managers = [];
    managers.push(new Manager(this));
    this.employeeLevels.push(managers);

    // Create directors.
    let directors = [];
    directors.push(new Director(this));
    this.employeeLevels.push(directors);
  }

  /* Gets the first available employee who can handle this call. */
  getHandlerForCall(call) {
    for (let level = call.getRank(); level < LEVELS - 1; level++) {
      let employeeLevel = this.employeeLevels[level];
      for (let emp of employeeLevel) {
        if (emp.isFree()) {
          return emp;
        }
      }
    }
    return null;
  }

  /* Routes the call to an available employee, or saves in a queue if no employee available. */
  dispatchCall(callParam) {
    let call = callParam;

    if(callParam instanceof Caller){
      call = new Call(callParam);
    }

    /* Try to route the call to an employee with minimal rank. */
    let emp = this.getHandlerForCall(call);
    if (emp !== null) {
      emp.receiveCall(call);
      call.setHandler(emp);
    } else {
      /* Place the call into corresponding call queue according to its rank. */
      call.reply('Please wait for free employee to reply');
      this.callQueues[call.getRank()].push(call);
    }
  }

  /* An employee got free. Look for a waiting call that he/she can serve. Return true
   * if we were able to assign a call, false otherwise. */
  assignCall(emp) {
    /* Check the queues, starting from the highest rank this employee can serve. */
    for (let rank = emp.getRank(); rank >= 0; rank--) {
      let que = this.callQueues[rank];
        
      /* Remove the first call, if any */
      if (que.length) {
        let call = que.shift(); 
        if (call !== null) {
          emp.receiveCall(call);
          return true;
        }
      }
    }

    return false;
  }
}
