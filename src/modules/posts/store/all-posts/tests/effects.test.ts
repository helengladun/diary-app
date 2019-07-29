import {getPostsEffect, deletePostEffect, addPostEffect} from '../effects';
import {PostsTypes} from '../types';
import {PostService} from "../../../../shared/services/PostService";
import {posts} from "../../../../shared/fixtures/posts";

const dispatch = jest.fn();
const getState = jest.fn();
const post = {id: 10, description: 'new post'};

describe('all posts effects', () => {
    describe('getPostsEffect effects', () => {
        test('should call success actions after getPostsEffect',() => {
            getPostsEffect()(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostsTypes.GET_POSTS});
            expect(dispatch).toBeCalledWith({type: PostsTypes.GET_POSTS_SUCCESS, payload: {data: posts}});
        });

        test('should call failure actions after failure getPostsEffect',() => {
            PostService.getPosts = jest.fn(() => {throw new Error('ERROR');});
            getPostsEffect()(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostsTypes.GET_POSTS});
            expect(dispatch).toBeCalledWith({type: PostsTypes.GET_POSTS_FAILURE, payload: {message: "Error found. Please, try again."}});
        });
    });

    describe('addPostEffect effect', () => {
        test('should call success actions after addPostEffect',() => {
            addPostEffect(post)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostsTypes.SAVE_POST});
            expect(dispatch).toBeCalledWith({type: PostsTypes.SAVE_POST_SUCCESS, payload: {data: post}});
        });

        test('should call failure actions after failure addPostEffect',() => {
            PostService.addPost = jest.fn(() => {throw new Error('ERROR');});
            addPostEffect(post)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostsTypes.SAVE_POST});
            expect(dispatch).toBeCalledWith({type: PostsTypes.SAVE_POST_FAILURE, payload: {message: "Error found. Please, try again."}});
        });
    });

    describe('deletePostEffect effect', () => {
        test('should call success actions after deletePostEffect',() => {
            deletePostEffect(10)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostsTypes.DELETE_POST});
            expect(dispatch).toBeCalledWith({type: PostsTypes.DELETE_POST_SUCCESS, payload: {id: 10}});
        });

        test('should call failure actions after failure deletePostEffect',() => {
            PostService.removePost = jest.fn(() => {throw new Error('ERROR');});
            deletePostEffect(10)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostsTypes.DELETE_POST});
            expect(dispatch).toBeCalledWith({type: PostsTypes.DELETE_POST_FAILURE, payload: {message: "Error found. Please, try again."}});
        });
    });
});
