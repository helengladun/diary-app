import { combineReducers } from 'redux';
import {CommentsState, reducer as commentsReducer} from "../comments/store";
import {PostsState, reducer as postsReducer} from "../posts/store";

export interface IApplicationState {
    posts: PostsState,
    comments: CommentsState
}

export const createRootReducer = () => combineReducers<IApplicationState>({
    posts: postsReducer,
    comments: commentsReducer
});