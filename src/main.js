// main.js
// import createStore from './store/store';
import { createStore } from 'redux';
import root from './reducers/root';
import { addOne, addNumber } from './actions/count';
import { setName } from './actions/person';

let store = createStore(root);
console.log('INITIAL STATE', store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

let addOneAction = addOne();
store.dispatch(addOneAction);

let setNameAction = setName('hilary');
store.dispatch(setNameAction);

let addNumberAction = addNumber(3);
store.dispatch(addNumberAction);

