import { AnyAction, Reducer } from 'redux';
import { PostsTypes } from './types';
import {merge} from 'ramda';
import {IPost} from "../../../shared/models/IPost";

export interface IPostsState {
    entity: IPost[],
    pending: boolean,
    message: string,
}

const initialState: IPostsState = {
    pending: false,
    entity: [],
    message: ''
};

export const reducer: Reducer<IPostsState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case PostsTypes.GET_POSTS:
            return merge(state, {
                pending: true
            });
        case PostsTypes.GET_POSTS_SUCCESS:
            return merge(state, {
                pending: false,
                entity: action.payload.data
            });
        case PostsTypes.GET_POSTS_FAILURE:
            return merge(state, {
                pending: false,
                message: action.payload.message
            });
        case PostsTypes.SAVE_POST:
            return merge(state, {
                pending: true
            });
        case PostsTypes.SAVE_POST_SUCCESS:
            return merge(state, {
                pending: false,
                entity: [...state.entity, action.payload.data]
            });
        case PostsTypes.SAVE_POST_FAILURE:
            return merge(state, {
                pending: false,
                message: action.payload.message
            });
        case PostsTypes.DELETE_POST:
            return merge(state, {
                pending: true
            });
        case PostsTypes.DELETE_POST_SUCCESS:
            return merge(state, {
                pending: false,
                entity: state.entity.filter((item: IPost) => item.id !== action.payload.id),
            });
        case PostsTypes.DELETE_POST_FAILURE:
            return merge(state, {
                pending: false,
                message: action.payload.message
            });
        case PostsTypes.CLEAR_POSTS:
            return merge(state, {
                pending: false,
                entity: []
            });
        default:
            return state;
    }
};