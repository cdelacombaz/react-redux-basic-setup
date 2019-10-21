import { STORE_QUESTIONS } from '../constants';

const defaultState = []

const questionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_QUESTIONS:
      return [...action.payload]
    default:
      return state
  }
}

export default questionReducer;
