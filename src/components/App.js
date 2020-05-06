import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const App = () => {
  return (
    <div className="container">
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default App;
