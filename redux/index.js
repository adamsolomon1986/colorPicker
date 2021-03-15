import {createStore} from 'redux';
import { mainReducer } from './reducers/reducers';
  
  const initState = {color:'#d12121', opacity:1}

  export function configureStore(initialState = initState) {
    const store = createStore(mainReducer, initialState);
    return store;
  };
  
  export const store = configureStore();