import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

//CEATING A REDUX STORE
export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
}
