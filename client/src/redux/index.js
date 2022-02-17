import {createStore} from 'redux';
import reducer from './reducers/index';
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, {}, ReactReduxDevTools);

export default store;