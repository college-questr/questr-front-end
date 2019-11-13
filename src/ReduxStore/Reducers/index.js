import { combineReducers } from 'redux'

const initialState = {
  isFetching: false,
  error: ""
};

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  getReducer,
})
