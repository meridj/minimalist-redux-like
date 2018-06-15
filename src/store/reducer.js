/**
 * Actions
 */
import { ADD_NO_VOTE, ADD_YES_VOTE, RESET_VOTE } from '../actions/types';

const initialState = { oui: 0, non: 0 };

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NO_VOTE:
      return { ...state, non: action.payload };
    case ADD_YES_VOTE:
      return { ...state, oui: action.payload };
    case RESET_VOTE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
