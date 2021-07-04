export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModelOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModelOpen: true,
      modalContent: 'please enter a value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModelOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    const remainingItem = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: remainingItem,
      isModelOpen: true,
      modalContent: 'item removed',
    };
  }

  throw new Error('no matiching action found');
};
