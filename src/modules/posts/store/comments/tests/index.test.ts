import {reducer as postCommentsReducer} from '../index';
import {PostCommentsTypes} from "../types";
import {posts} from "../../../../shared/fixtures/posts";
import {comments} from "../../../../shared/fixtures/comments";

describe('post comments reducer tests', () => {
    test('should set default state', () => {
        const state = postCommentsReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({"entity": [], "message": "", "pending": false});
    });

    test('should set pending to true', () => {
        const action = {type: PostCommentsTypes.GET_POST_COMMENTS,};
        const state = postCommentsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: '', pending: true});
    });

    test('should get post comments ', () => {
        const action = {type: PostCommentsTypes.GET_POST_COMMENTS_SUCCESS, payload: {data: comments}};
        const state = postCommentsReducer(undefined, action);
        expect(state).toEqual({entity: comments, message: '', pending: false});
    });

    test('should set failure message ', () => {
        const errMsg = 'Failed';
        const action = {type: PostCommentsTypes.GET_POST_COMMENTS_FAILURE, payload: {message: errMsg}};
        const state = postCommentsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: errMsg, pending: false});
    });

    test('should clear entity', () => {
        const action = {type: PostCommentsTypes.CLEAR_POST_COMMENTS};
        const state = postCommentsReducer({entity: comments, message: '', pending: false}, action);
        expect(state).toEqual({entity: [], message: '', pending: false});
    });
});

