import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import swapiReducer from '../reducers/swapiReducer'; 

const rootReducer = combineReducers({
  swapi: swapiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
