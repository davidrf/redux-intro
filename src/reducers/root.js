import count from './count';
import person from './person';
import { combineReducers } from 'redux';

// let root = (state = {}, action) => {
  // return {
    // count: count(state.count, action),
    // person: person(state.person, action)
  // };
// };

let root = combineReducers({
  count: count,
  person: person
});

export default root;
