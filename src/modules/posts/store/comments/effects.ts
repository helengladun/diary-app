import {ThunkDispatch} from "redux-thunk";
import {IApplicationState} from "../../../store/rootReducer";
import {Action} from "redux";
import {getPostComments, getPostCommentsFailure, getPostCommentsSuccess } from "./actions";
import {PostService} from "../../../shared/services/PostService";

export const getPostCommentsEffect = (post_id: number) => (dispatch: ThunkDispatch<IApplicationState, void, Action>, getState: Function) => {
    dispatch(getPostComments());

    try {
        const res = PostService.getComments(post_id);
        dispatch(getPostCommentsSuccess(res));
    } catch (e) {
        const message = 'Error found. Please, try again.';
        dispatch(getPostCommentsFailure(message));
    }
};