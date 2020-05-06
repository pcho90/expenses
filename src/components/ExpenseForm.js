import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addItem } from '../actions';
import useInput from '../hooks/useInput';

const ExpenseForm = () => {
  const [text, handleText, resetText] = useInput('');
  const [amount, handleAmount, resetAmount] = useInput('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const text = e.target.formText.value;
    const amount = e.target.formAmount.value;

    dispatch(addItem(text, amount, uuid()));

    resetText();
    resetAmount();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Expenses</h3>
      <input
        className="form-control form-control-lg"
        style={{ marginBottom: '10px' }}
        onChange={handleText}
        value={text}
        name="formText"
      />
      <input
        className="form-control form-control-lg"
        style={{ marginBottom: '10px' }}
        onChange={handleAmount}
        value={amount}
        name="formAmount"
      />
      <button className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
