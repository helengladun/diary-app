import {reducer as allPostsReducer} from '../index';
import {PostsTypes} from "../types";
import {posts} from "../../../../shared/fixtures/posts";

describe('all posts reducer tests', () => {
    const errMsg = 'Failed';

    test('should set default state', () => {
        const state = allPostsReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({"entity": [], "message": "", "pending": false});
    });

    test('should set pending to true', () => {
        const action = {type: PostsTypes.GET_POSTS,};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: '', pending: true});
    });

    test('should get posts ', () => {
        const action = {type: PostsTypes.GET_POSTS_SUCCESS, payload: {data: posts}};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: posts, message: '', pending: false});
    });

    test('should set failure message ', () => {
        const action = {type: PostsTypes.GET_POSTS_FAILURE, payload: {message: errMsg}};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: errMsg, pending: false});
    });

    test('should clear entity', () => {
        const action = {type: PostsTypes.CLEAR_POSTS};
        const state = allPostsReducer({entity: posts, message: '', pending: false}, action);
        expect(state).toEqual({entity: [], message: '', pending: false});
    });

    test('should save post', () => {
        const action = {type: PostsTypes.SAVE_POST};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: '', pending: true});
    });

    test('should save post success', () => {
        const post = {
            id: 10,
            description: "New post.",
        };

        const action = {type: PostsTypes.SAVE_POST_SUCCESS, payload: {data: post}};
        const state = allPostsReducer({entity: posts, message: '', pending: false}, action);
        expect(state).toEqual({entity: posts.concat(post), message: '', pending: false});
    });

    test('should save post failure', () => {
        const action = {type: PostsTypes.SAVE_POST_FAILURE, payload: {message: errMsg}};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: errMsg, pending: false});
    });

    test('should delete post', () => {
        const action = {type: PostsTypes.DELETE_POST};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: '', pending: true});
    });

    test('should delete post success', () => {
        const action = {type: PostsTypes.DELETE_POST_SUCCESS, payload: {id: 1}};
        const state = allPostsReducer({entity: posts, message: '', pending: false}, action);

        expect(state.entity).toEqual(posts.filter(post => post.id !== 1));
        expect(state.pending).toBeFalsy();
    });

    test('should save post failure', () => {
        const action = {type: PostsTypes.DELETE_POST_FAILURE, payload: {message: errMsg}};
        const state = allPostsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: errMsg, pending: false});
    });
});

