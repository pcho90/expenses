import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const items = useSelector(state => state.items);

  return (
    <div>
      <h3>Expense List</h3>
      <div className="container">
        {items.map(item => (
          <ExpenseItem
            key={item.id}
            text={item.text}
            amount={item.amount}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
