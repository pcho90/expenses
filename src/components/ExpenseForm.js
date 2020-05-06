import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addItem } from '../actions';

const ExpenseForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const onTextChange = e => {
    setText(e.target.value);
  };

  const onAmountChange = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const text = e.target.formText.value;
    const amount = e.target.formAmount.value;

    dispatch(addItem(text, amount, uuid()));

    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Expenses</h3>
      <input
        className="form-control form-control-lg"
        style={{ marginBottom: '10px' }}
        onChange={onTextChange}
        value={text}
        name="formText"
      />
      <input
        className="form-control form-control-lg"
        style={{ marginBottom: '10px' }}
        onChange={onAmountChange}
        value={amount}
        name="formAmount"
      />
      <button className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
