import { createStore } from 'redux';
import Container from './modules/index';

const store = createStore(Container);
console.log(store.getState());

export default store;
