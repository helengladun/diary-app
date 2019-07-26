import {combineReducers} from 'redux';
import {IPostsState, reducer as postsReducer} from "./all-posts";
import {IPostCommentsState, reducer as postCommentsReducer} from "./comments";

export interface PostsState {
    allPosts: IPostsState,
    postComments: IPostCommentsState
}

export const reducer = combineReducers<PostsState>({
    allPosts: postsReducer,
    postComments: postCommentsReducer
});
