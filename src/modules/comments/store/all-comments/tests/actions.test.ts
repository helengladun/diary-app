import {getComments, getCommentsSuccess, getCommentsFailure, clearComments, saveCommentsFailure, saveCommentsSuccess, saveComments} from "../actions";
import {comments} from "../../../../shared/fixtures/comments";
import {CommentsTypes} from "../types";

describe('All comments actions', () => {

    test('should setup getComments action object', () => {
        const action = getComments();
        expect(action).toEqual({type: CommentsTypes.GET_COMMENTS});
    });

    test('should setup getCommentsSuccess action object', () => {
        const action = getCommentsSuccess(comments);
        expect(action).toEqual(expect.objectContaining({type: CommentsTypes.GET_COMMENTS_SUCCESS, payload: {data: comments}}));
    });

    test('should setup getCommentsFailure action object', () => {
        const errMsg = 'Failed';
        const action = getCommentsFailure(errMsg);
        expect(action).toEqual(expect.objectContaining({type: CommentsTypes.GET_COMMENTS_FAILURE, payload: {message: errMsg}}));
    });

    test('should setup clearComments action object', () => {
        const action = clearComments();
        expect(action).toEqual(expect.objectContaining({type: CommentsTypes.CLEAR_COMMENTS}));
    });

    test('should setup saveComments action object', () => {
        const action = saveComments();
        expect(action).toEqual({type: CommentsTypes.SAVE_COMMENTS});
    });

    test('should setup saveCommentsSuccess action object', () => {
        const comment = {
            id: 10,
            description: 'new comment',
            post_id: 5
        };

        const action = saveCommentsSuccess(comment);
        expect(action.type).toEqual(CommentsTypes.SAVE_COMMENTS_SUCCESS);
        expect(action.payload).toEqual({data: comment});
    });

    test('should setup saveCommentsFailure action object', () => {
        const errMsg = 'Failed';
        const action = saveCommentsFailure(errMsg);
        expect(action).toEqual(expect.objectContaining({type: CommentsTypes.SAVE_COMMENTS_FAILURE, payload: {message: errMsg}}));
    });
});
