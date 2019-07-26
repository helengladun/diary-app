import {CommentsTypes} from './types';
import {action} from 'typesafe-actions';
import {IComment} from "../../../shared/models/IComment";

export const getComments = () => action(CommentsTypes.GET_COMMENTS);
export const getCommentsSuccess = (data: IComment[]) => action(CommentsTypes.GET_COMMENTS_SUCCESS, {data});
export const getCommentsFailure = (message: string) => action(CommentsTypes.GET_COMMENTS_FAILURE, {message});
export const clearComments = () => action(CommentsTypes.CLEAR_COMMENTS);

export const saveComments = () => action(CommentsTypes.SAVE_COMMENTS);
export const saveCommentsSuccess = (data: IComment) => action(CommentsTypes.SAVE_COMMENTS_SUCCESS, {data});
export const saveCommentsFailure = (message: string) => action(CommentsTypes.SAVE_COMMENTS_FAILURE, {message});

