import {combineReducers} from 'redux';
import { authReducer } from './authReducer';
import { categoryPostsReducer, postReducer, selectedPostReducer } from './postReducer';
import { messageReducer } from './messageReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
    allPosts: postReducer,
    auth: authReducer,
    // message: messageReducer,
    selectedPost: selectedPostReducer,
    categoryPosts: categoryPostsReducer,
    allUsers: userReducer
})

export default reducers;