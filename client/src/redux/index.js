import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;