// App.js
import React from 'react';
import GroceryForm from './GroceryForm';
import GroceryList from './GroceryList';

let groceries = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
];

const App = props => {
  let handleFormSubmit = event => {
    event.preventDefault();
    alert('Form was submitted');
  };

  let handleButtonClick = event => alert('Button was clicked');

  return (
    <div>
      <h1>Grocery List React</h1>
      <GroceryForm handleFormSubmit={handleFormSubmit} />
      <GroceryList groceries={groceries} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;

