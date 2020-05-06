import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../actions';
import EditExpenseText from './EditExpenseText';
import EditExpenseAmount from './EditExpenseAmount';

const ExpenseItem = ({ text, amount, id }) => {
  const [edit, setEdit] = useState(false);
  const [amountEdit, setAmountEdit] = useState(false);
  const dispatch = useDispatch();

  const editText = () => {
    setEdit(!edit);
  };

  const editAmount = () => {
    setAmountEdit(!amountEdit);
  };

  return (
    <div className="row d-flex">
      <div className="col-8" onDoubleClick={editText}>
        {edit ? <EditExpenseText id={id} /> : text}
      </div>
      <div
        className="col d-flex justify-content-end"
        onDoubleClick={editAmount}
      >
        {amountEdit ? <EditExpenseAmount id={id} /> : amount}
      </div>
      <div
        className="col d-flex justify-content-end"
        onClick={() => dispatch(removeItem(id))}
      >
        Delete
      </div>
    </div>
  );
};

export default ExpenseItem;
