import {getPostCommentsEffect} from '../effects';
import {PostCommentsTypes} from '../types';
import {PostService} from "../../../../shared/services/PostService";
import {comments} from "../../../../shared/fixtures/comments";

const dispatch = jest.fn();
const getState = jest.fn();
const filteredComments = comments.filter(item => item.post_id === 1);

describe('post comments effects', () => {
    describe('getPostCommentsEffect effects', () => {
        test('should call success actions after getPostCommentsEffect',() => {
            getPostCommentsEffect(1)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostCommentsTypes.GET_POST_COMMENTS});
            expect(dispatch).toBeCalledWith({type: PostCommentsTypes.GET_POST_COMMENTS_SUCCESS, payload: {data: filteredComments}});
        });

        test('should call failure actions after failure getPostCommentsEffect',() => {
            PostService.getComments = jest.fn(() => {throw new Error('ERROR');});
            getPostCommentsEffect(1)(dispatch, getState);

            expect(dispatch).toBeCalledWith({type: PostCommentsTypes.GET_POST_COMMENTS});
            expect(dispatch).toBeCalledWith({type: PostCommentsTypes.GET_POST_COMMENTS_FAILURE, payload: {message: "Error found. Please, try again."}});
        });
    });
});
