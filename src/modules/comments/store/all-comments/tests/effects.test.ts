import {addCommentEffect, getCommentsEffect} from '../effects';
import {CommentsTypes} from '../types';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {comments} from "../../../../shared/fixtures/comments";
import {CommentService} from "../../../../shared/services/CommentService";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('all comments effects', () => {
    describe('getCommentsEffect effects', () => {
        const store = mockStore({});
        const getCommentsEffectMock = jest.fn(getCommentsEffect);

        beforeEach(() => {
            store.clearActions();
        });

        test('should call success actions after getCommentsEffect',() => {
            const expectedActions = [
                {type: CommentsTypes.GET_COMMENTS},
                {type: CommentsTypes.GET_COMMENTS_SUCCESS, payload: {data: comments}}
            ];

            store.dispatch(getCommentsEffectMock());
            expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
        });

        test('should call failure actions after failure getCommentsEffect',() => {

            const expectedActions = [
                {type: CommentsTypes.GET_COMMENTS},
                {type: CommentsTypes.GET_COMMENTS_FAILURE, payload: {message: 'Failed'}}
            ];

            store.dispatch(getCommentsEffectMock());
            expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
        });
    });

    describe('addCommentEffect effects', () => {

        const store = mockStore({});
        const addCommentEffectMock = jest.fn(addCommentEffect);

        beforeEach(() => {
            store.clearActions();
        });

        test('should call success actions after addCommentEffect',() => {
            const expectedActions = [
                {type: CommentsTypes.SAVE_COMMENTS},
                {type: CommentsTypes.SAVE_COMMENTS_SUCCESS, payload: {data: comments[0]}}
            ];

            store.dispatch(addCommentEffectMock(expectedActions));
            expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
        });

        test('should call failure actions after failure addCommentEffect',() => {

            jest.mock('../../../../shared/services/CommentService', () => () => ({
                addComment: () => undefined,
                getComments: () => {},
                removeComment: () => {}
            }));

            const expectedActions = [
                {type: CommentsTypes.SAVE_COMMENTS},
                {type: CommentsTypes.SAVE_COMMENTS_FAILURE, payload: {message: 'Failed'}}
            ];

            store.dispatch(addCommentEffectMock());
            expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
        });
    });
});
