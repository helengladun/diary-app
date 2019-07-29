import {savePostSuccess, savePostFailure, savePost,
    deletePostFailure, deletePostSuccess, deletePost,
    getPostsFailure, getPosts, getPostsSuccess, clearPosts} from "../actions";
import {posts} from "../../../../shared/fixtures/posts";
import {PostsTypes} from "../types";

describe('All posts actions', () => {

    test('should setup getPosts action object', () => {
        const action = getPosts();
        expect(action).toEqual({type: PostsTypes.GET_POSTS});
    });

    test('should setup getPostsSuccess action object', () => {
        const action = getPostsSuccess(posts);
        expect(action).toEqual(expect.objectContaining({type: PostsTypes.GET_POSTS_SUCCESS, payload: {data: posts}}));
    });

    test('should setup getPostsFailure action object', () => {
        const errMsg = 'Failed';
        const action = getPostsFailure(errMsg);
        expect(action).toEqual(expect.objectContaining({type: PostsTypes.GET_POSTS_FAILURE, payload: {message: errMsg}}));
    });

    test('should setup clearPosts action object', () => {
        const action = clearPosts();
        expect(action).toEqual(expect.objectContaining({type: PostsTypes.CLEAR_POSTS}));
    });

    test('should setup savePost action object', () => {
        const action = savePost();
        expect(action).toEqual({type: PostsTypes.SAVE_POST});
    });

    test('should setup savePostSuccess action object', () => {
        const post = {
            id: 10,
            description: 'new post'
        };

        const action = savePostSuccess(post);
        expect(action).toEqual(expect.objectContaining({type: PostsTypes.SAVE_POST_SUCCESS, payload: {data: post}}));
    });

    test('should setup savePostsFailure action object', () => {
        const errMsg = 'Failed';
        const action = savePostFailure(errMsg);
        expect(action).toEqual(expect.objectContaining({type: PostsTypes.SAVE_POST_FAILURE, payload: {message: errMsg}}));
    });

    test('should setup deletePost action object', () => {
        const action = deletePost();
        expect(action).toEqual({type: PostsTypes.DELETE_POST});
    });

    test('should setup deletePostSuccess action object', () => {
        const action = deletePostSuccess(1);
        expect(action.type).toEqual(PostsTypes.DELETE_POST_SUCCESS);
        expect(action.payload).toEqual({id: 1});
    });

    test('should setup deletePostsFailure action object', () => {
        const errMsg = 'Failed';
        const action = deletePostFailure(errMsg);
        expect(action).toEqual(expect.objectContaining({type: PostsTypes.DELETE_POST_FAILURE, payload: {message: errMsg}}));
    });
});
