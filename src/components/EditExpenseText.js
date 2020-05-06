import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem } from '../actions';

const EditExpenseText = ({ id }) => {
  const { text, amount } = useSelector(state =>
    state.items.find(item => item.id === id)
  );
  const [edit, setEdit] = useState(text);
  const dispatch = useDispatch();

  const handleEdit = e => {
    setEdit(e.target.value);
  };

  return (
    <input
      className="form-control form-control-lg"
      value={edit}
      onChange={handleEdit}
      onDoubleClick={() => dispatch(editItem(edit, amount, id))}
    />
  );
};

export default EditExpenseText;
