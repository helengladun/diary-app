import {action} from "typesafe-actions";
import {PostCommentsTypes} from "./types";
import {IComment} from "../../../shared/models/IComment";

export const getPostComments = () => action(PostCommentsTypes.GET_POST_COMMENTS);
export const getPostCommentsSuccess = (data: IComment[]) => action(PostCommentsTypes.GET_POST_COMMENTS_SUCCESS, {data});
export const getPostCommentsFailure = (message: string) => action(PostCommentsTypes.GET_POST_COMMENTS_FAILURE, { message });

export const clearPostComments = () => action(PostCommentsTypes.CLEAR_POST_COMMENTS);
