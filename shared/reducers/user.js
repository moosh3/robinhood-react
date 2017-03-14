import * from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: true,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;
