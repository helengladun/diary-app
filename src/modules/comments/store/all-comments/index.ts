import {AnyAction, Reducer} from 'redux';
import {CommentsTypes} from './types';
import {merge} from 'ramda';
import {IComment} from "../../../shared/models/IComment";

export interface ICommentsState {
    entity: IComment[],
    pending: boolean,
    message: string,
}

const initialState: ICommentsState = {
    pending: false,
    entity: [],
    message: ''
};

export const reducer: Reducer<ICommentsState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case CommentsTypes.GET_COMMENTS:
            return merge(state, {
                pending: true
            });
        case CommentsTypes.GET_COMMENTS_SUCCESS:
            return merge(state, {
                pending: false,
                entity: action.payload.data
            });
        case CommentsTypes.GET_COMMENTS_FAILURE:
            return merge(state, {
                pending: false,
                message: action.payload.message
            });
        case CommentsTypes.SAVE_COMMENTS:
            return merge(state, {
                pending: true,
            });
        case CommentsTypes.SAVE_COMMENTS_SUCCESS:
            return merge(state, {
                pending: false,
                entity: [...state.entity, action.payload.data]
            });
        case CommentsTypes.SAVE_COMMENTS_FAILURE:
            return merge(state, {
                pending: false,
                message: action.payload.message
            });
        case CommentsTypes.CLEAR_COMMENTS:
            return merge(state, {
                pending: false,
                entity: []
            });
        default:
            return state;
    }
};