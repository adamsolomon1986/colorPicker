import { Alert } from 'react-native';
import {
    combineReducers,
    createStore,
  } from 'redux';
  
  // actions.js
   const initState = {color:'#d12121', opacity:1}

  export const changeColor = color => ({
    type: 'CHANGE_COLOR',
    payload: color,
  });
  
  export const changeOpacity = opacity => ({
    type: 'CHANGE_OPACITY',
    payload: opacity,
  });
  
  // reducers.js
  export const colorOpacityReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return {...state, color: action.payload}
      case 'CHANGE_OPACITY':
        return {...state, opacity: action.payload}
      default:
        return state;
    }
  };
  
  // store.js
  export function configureStore(initialState = initState) {
    const store = createStore(colorOpacityReducer, initialState);
    return store;
  };
  
  export const store = configureStore();