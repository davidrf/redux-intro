let count = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return state + 1;
    case 'ADD_NUMBER':
      return state + action.number;
    default:
      return state;
  }
};

export default count;
