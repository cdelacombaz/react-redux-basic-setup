import { combineReducers } from 'redux';

import questionReducer from './questionsReducer';
import scoreReducer from './scoreReducer';

const masterReducer = combineReducers({
  questionReducer,
  scoreReducer
})

export default masterReducer;
