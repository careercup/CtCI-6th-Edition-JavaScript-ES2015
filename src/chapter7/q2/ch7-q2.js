import {CallHandler} from './CallHandler';
import {Caller} from './Caller';

let callHandler = new CallHandler();

for(let i = 0; i < 50; i++){
  let caller = new Caller(i, ''+i);
  callHandler.dispatchCall(caller);
}
