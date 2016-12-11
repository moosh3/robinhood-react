export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let nextTodoId = 0

export const VisibilityFilters = {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}

// Action creators
export const addTodo = (text) => {
  return { type: ADD_TODO, id: nextTodoId++, text }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id }
}
