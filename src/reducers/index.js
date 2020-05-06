const initialState = {
  items: [
    { id: 1, text: 'MacBook Pro', amount: '$200' },
    { id: 2, text: 'Bootcamp', amount: '$20,000' },
    { id: 3, text: 'Udemy', amount: '$200' }
  ],
  filter: 'ALL'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id
            ? {
                id: action.id,
                text: action.text,
                amount: action.amount
              }
            : item
        )
      };
    default:
      return state;
  }
};

export default reducer;
