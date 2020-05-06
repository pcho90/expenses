export const addItem = (text, amount, id) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      id,
      text,
      amount
    }
  };
};

export const removeItem = id => {
  return {
    type: 'REMOVE_ITEM',
    id
  };
};

export const editItem = (text, amount, id) => {
  return {
    type: 'EDIT_ITEM',
    id,
    text,
    amount
  };
};
