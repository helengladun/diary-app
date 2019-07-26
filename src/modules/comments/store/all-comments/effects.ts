import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getComments, getCommentsFailure, getCommentsSuccess, saveComments, saveCommentsSuccess, saveCommentsFailure } from './actions';
import {IApplicationState} from "../../../store/rootReducer";
import {CommentService} from "../../../shared/services/CommentService";
import {IComment} from "../../../shared/models/IComment";
import {getPostCommentsEffect} from "../../../posts/store/comments/effects";

export const getCommentsEffect = () => (dispatch: ThunkDispatch<IApplicationState, void, Action>, getState: Function) => {
    dispatch(getComments());

    try {
        const res = CommentService.getComments();
        dispatch(getCommentsSuccess(res));
    } catch (e) {
        const message = 'Error found. Please, try again.';
        dispatch(getCommentsFailure(message));
    }
};

export const addCommentEffect = (comment: IComment) => (dispatch: ThunkDispatch<IApplicationState, void, Action>, getState: Function) => {
    dispatch(saveComments());

    try {
        const res = CommentService.addComment(comment);
        dispatch(saveCommentsSuccess(res));
        dispatch(getCommentsEffect());
        dispatch(getPostCommentsEffect(comment.post_id));
    } catch (e) {
        const message = 'Error found. Please, try again.';
        dispatch(saveCommentsFailure(message));
    }
};