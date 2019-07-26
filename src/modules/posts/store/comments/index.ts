import { AnyAction, Reducer } from 'redux';
import { PostCommentsTypes } from './types';
import {merge} from 'ramda';
import {IComment} from "../../../shared/models/IComment";

export interface IPostCommentsState {
    entity: IComment[],
    pending: boolean,
    message: string,
}

const initialState: IPostCommentsState = {
    pending: false,
    entity: [],
    message: ''
};

export const reducer: Reducer<IPostCommentsState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case PostCommentsTypes.GET_POST_COMMENTS:
            return merge(state, {
                pending: true
            });
        case PostCommentsTypes.GET_POST_COMMENTS_SUCCESS:
            return merge(state, {
                pending: false,
                entity: action.payload.data
            });
        case PostCommentsTypes.GET_POST_COMMENTS_FAILURE:
            return merge(state, {
                pending: false,
                message: action.payload.message
            });
        case PostCommentsTypes.CLEAR_POST_COMMENTS:
            return merge(state, {
                pending: false,
                entity: []
            });
        default:
            return state;
    }
};