import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { categoryPostsReducer, postReducer, selectedPostReducer } from './postReducer';
import { messageReducer } from './messageReducer';

const reducers = combineReducers({
    allPosts: postReducer,
    auth: authReducer,
    // message: messageReducer,
    selectedPost: selectedPostReducer,
    categoryPosts: categoryPostsReducer,
})

export default reducers;