import {CallHandler} from './CallHandler';
import {Caller} from './Caller';

let callHandler = new CallHandler();

let caller = new Caller(1, 'alex');
callHandler.dispatchCall(caller);
