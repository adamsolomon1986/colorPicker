import {
    combineReducers,
    createStore,
  } from 'redux';
  
  // actions.js
  export const changeColor = color => ({
    type: 'CHANGE_COLOR',
    color,
  });
  
  export const changeOpacity = opacity => ({
    type: 'CHANGE_OPACITY',
    opacity,
  });
  
  // reducers.js
  export const colorOpacityReducer = (state = {}, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return action.color;
      case 'CHANGE_COLOR':
        return action.opacity;
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({
    colorOpacityReducer,
  });
  
  // store.js
  export function configureStore(initialState = {color:'#f8a2d4', opacity:1}) {
    const store = createStore(reducers, initialState);
    return store;
  };
  
  export const store = configureStore();