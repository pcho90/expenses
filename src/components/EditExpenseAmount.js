import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem } from '../actions';
import useEdit from '../hooks/useEdit';

const EditExpenseAmount = ({ id }) => {
  const { text, amount } = useSelector(state =>
    state.items.find(item => item.id === id)
  );
  const [edit, handleChange] = useEdit(amount);
  const dispatch = useDispatch();

  return (
    <input
      className="form-control form-control-lg"
      value={edit}
      onChange={handleChange}
      onDoubleClick={() => dispatch(editItem(text, edit, id))}
    />
  );
};

export default EditExpenseAmount;
