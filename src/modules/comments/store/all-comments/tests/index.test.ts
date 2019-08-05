import {reducer as allCommentsReducer} from '../index';
import {CommentsTypes} from "../types";
import {comments} from "../../../../shared/fixtures/comments";

describe('all comments reducer tests', () => {
    test('should set default state', () => {
        const state = allCommentsReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({"entity": [], "message": "", "pending": false});
    });

    test('should set pending to true', () => {
        const action = {type: CommentsTypes.GET_COMMENTS};
        const state = allCommentsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: '', pending: true});
    });

    test('should get comments ', () => {
        const action = {type: CommentsTypes.GET_COMMENTS_SUCCESS, payload: {data: comments}};
        const state = allCommentsReducer(undefined, action);
        expect(state).toEqual({entity: comments, message: '', pending: false});
    });

    test('should set failure message ', () => {
        const errMsg = 'Failed';
        const action = {type: CommentsTypes.GET_COMMENTS_FAILURE, payload: {message: errMsg}};
        const state = allCommentsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: errMsg, pending: false});
    });

    test('should clear entity', () => {
        const action = {type: CommentsTypes.CLEAR_COMMENTS};
        const state = allCommentsReducer({entity: comments, message: '', pending: false}, action);
        expect(state).toEqual({entity: [], message: '', pending: false});
    });

    test('should save comment', () => {
        const action = {type: CommentsTypes.SAVE_COMMENTS};
        const state = allCommentsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: '', pending: true});
    });

    test('should save comment success', () => {
        const comment = {
            id: 10,
            description: "Cum habena peregrinatione, omnes parses anhelare flavum, placidus brabeutaes.",
            post_id: 20,
        };

        const action = {type: CommentsTypes.SAVE_COMMENTS_SUCCESS, payload: {data: comment}};
        const state = allCommentsReducer({entity: comments, message: '', pending: false}, action);
        expect(state).toEqual({entity: comments.concat(comment), message: '', pending: false});
    });

    test('should save comment failure', () => {
        const errMsg = 'Failed';
        const action = {type: CommentsTypes.SAVE_COMMENTS_FAILURE, payload: {message: errMsg}};
        const state = allCommentsReducer(undefined, action);
        expect(state).toEqual({entity: [], message: errMsg, pending: false});
    });
});

