import { STORE_SCORE } from '../constants';

const defaultState = []

const scoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_SCORE:
      return [...state, action.payload]
    default:
      return state
  };
};

export default scoreReducer;
