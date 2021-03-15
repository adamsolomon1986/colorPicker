import { CHANGE_COLOR, CHANGE_OPACITY } from "../actions/actionTypes";

 export const mainReducer = (state = initState, action) => {
    switch (action.type) {
      case CHANGE_COLOR:
        return {...state, color: action.payload}
      case CHANGE_OPACITY:
        return {...state, opacity: action.payload}
      default:
        return state;
    }
  };
