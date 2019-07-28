import {getPostComments, getPostCommentsSuccess, getPostCommentsFailure, clearPostComments} from "../actions";
import {posts} from "../../../../shared/fixtures/posts";
import {PostCommentsTypes} from "../types";
import {comments} from "../../../../shared/fixtures/comments";

describe('Post comments actions', () => {

    test('should setup getPostComments action object', () => {
        const action = getPostComments();
        expect(action).toEqual({type: PostCommentsTypes.GET_POST_COMMENTS});
    });

    test('should setup getPostCommentsSuccess action object', () => {
        const action = getPostCommentsSuccess(comments);
        expect(action).toEqual(expect.objectContaining({type: PostCommentsTypes.GET_POST_COMMENTS_SUCCESS, payload: {data: comments}}));
    });

    test('should setup getPostCommentsFailure action object', () => {
        const errMsg = 'Failed';
        const action = getPostCommentsFailure(errMsg);
        expect(action).toEqual(expect.objectContaining({type: PostCommentsTypes.GET_POST_COMMENTS_FAILURE, payload: {message: errMsg}}));
    });

    test('should setup clearPostComments action object', () => {
        const action = clearPostComments();
        expect(action).toEqual(expect.objectContaining({type: PostCommentsTypes.CLEAR_POST_COMMENTS}));
    });
});
