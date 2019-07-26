import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
    deletePost, deletePostFailure, deletePostSuccess,
    getPosts,
    getPostsFailure,
    getPostsSuccess, savePost, savePostSuccess,
    savePostFailure
} from './actions';
import {IApplicationState} from "../../../store/rootReducer";
import {PostService} from "../../../shared/services/PostService";
import {IPost} from "../../../shared/models/IPost";

export const getPostsEffect = () => (dispatch: ThunkDispatch<IApplicationState, void, Action>, getState: Function) => {
    dispatch(getPosts());

    try {
        const res = PostService.getPosts();
        dispatch(getPostsSuccess(res));
    } catch (e) {
        const message = 'Error found. Please, try again.';
        dispatch(getPostsFailure(message));
    }
};

export const addPostEffect = (post: IPost) => (dispatch: ThunkDispatch<IApplicationState, void, Action>, getState: Function) => {
    dispatch(savePost());

    try {
        const res = PostService.addPost(post);
        dispatch(savePostSuccess(res));
    } catch (e) {
        const message = 'Error found. Please, try again.';
        dispatch(savePostFailure(message));
    }
};

export const deletePostEffect = (id: number) => (dispatch: ThunkDispatch<IApplicationState, void, Action>, getState: Function) => {
    dispatch(deletePost());

    try {
        const res = PostService.removePost(id);
        dispatch(deletePostSuccess(res));
    } catch (e) {
        const message = 'Error found. Please, try again.';
        dispatch(deletePostFailure(message));
    }
};