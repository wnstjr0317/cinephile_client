import { createStore } from 'redux';
import Container from './modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Container, composeWithDevTools());
console.log(store.getState());

export default store;
