import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { postReducer } from './postReducer';
import { messageReducer } from './messageReducer';

const reducers = combineReducers({
    allPosts: postReducer,
    auth: authReducer,
    message: messageReducer
})

export default reducers;