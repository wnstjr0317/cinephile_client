import { createStore, applyMiddleware } from 'redux';
import Container from './modules/index';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Container, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));
console.log(store.getState());

export default store;
