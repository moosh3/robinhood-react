import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default const todoApp = combineReducers({
  visibilityFilter,
  todos
})
