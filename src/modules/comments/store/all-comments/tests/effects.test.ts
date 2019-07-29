import {addCommentEffect, getCommentsEffect} from '../effects';
import {CommentsTypes} from '../types';
import {CommentService} from "../../../../shared/services/CommentService";
import {comments} from "../../../../shared/fixtures/comments";

const dispatch = jest.fn();
const getState = jest.fn();
const comment = {id: 10, description: 'new text', post_id: 2};

describe('all comments effects', () => {
    describe('getCommentsEffect effect', () => {
        test('should call success actions after getCommentsEffect',() => {
            getCommentsEffect()(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: CommentsTypes.GET_COMMENTS});
            expect(dispatch).toBeCalledWith({type: CommentsTypes.GET_COMMENTS_SUCCESS, payload: {data: comments}});
        });

        test('should call failure actions after failure getCommentsEffect',() => {
            CommentService.getComments = jest.fn(() => {throw new Error('ERROR');});
            getCommentsEffect()(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: CommentsTypes.GET_COMMENTS});
            expect(dispatch).toBeCalledWith({type: CommentsTypes.GET_COMMENTS_FAILURE, payload: {message: "Error found. Please, try again."}});
        });
    });

    describe('addCommentEffect effect', () => {
        test('should call success actions after addCommentEffect',() => {
            addCommentEffect(comment)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: CommentsTypes.SAVE_COMMENTS});
            expect(dispatch).toBeCalledWith({type: CommentsTypes.SAVE_COMMENTS_SUCCESS, payload: {data: comment}});
        });

        test('should call failure actions after failure addCommentEffect',() => {
            CommentService.addComment = jest.fn(() => {throw new Error('ERROR');});
            addCommentEffect(comment)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: CommentsTypes.SAVE_COMMENTS});
            expect(dispatch).toBeCalledWith({type: CommentsTypes.SAVE_COMMENTS_FAILURE, payload: {message: "Error found. Please, try again."}});
        });
    });
});
