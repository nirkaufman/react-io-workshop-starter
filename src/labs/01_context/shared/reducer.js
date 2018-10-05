import {ADD_ITEM, REMOVE_ITEM} from './actions';

const initialState = {
  items: []
};

export function listReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_ITEM:
      return {...state, items: [...state.items, action.payload]};

    case REMOVE_ITEM:
      const index = state.items.indexOf(action.payload);
      const items = state.items.slice(0, index).concat(state.items.slice(index + 1));

      return {...state, items};

    default:
      return state
  }
}
