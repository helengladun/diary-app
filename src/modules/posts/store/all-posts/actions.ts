import {PostsTypes} from './types';
import {action} from 'typesafe-actions';
import {IPost} from "../../../shared/models/IPost";

export const getPosts = () => action(PostsTypes.GET_POSTS);
export const getPostsSuccess = (data: IPost[]) => action(PostsTypes.GET_POSTS_SUCCESS, {data});
export const getPostsFailure = (message: string) => action(PostsTypes.GET_POSTS_FAILURE, {message});

export const savePost = () => action(PostsTypes.SAVE_POST);
export const savePostSuccess = (data: IPost) => action(PostsTypes.SAVE_POST_SUCCESS, {data});
export const savePostFailure = (message: string) => action(PostsTypes.SAVE_POST_FAILURE, {message});

export const deletePost = () => action(PostsTypes.DELETE_POST);
export const deletePostSuccess = (id: number) => action(PostsTypes.DELETE_POST_SUCCESS, {id});
export const deletePostFailure = (message: string) => action(PostsTypes.DELETE_POST_FAILURE, {message});

export const clearPosts = () => action(PostsTypes.CLEAR_POSTS);
