let addOne = () => {
  return {
    type: 'ADD_ONE'
  };
};

let addNumber = number => {
  return {
    type: 'ADD_NUMBER',
    number: number
  };
};

export {
  addOne,
  addNumber
};
