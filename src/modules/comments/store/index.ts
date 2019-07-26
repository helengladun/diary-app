import {combineReducers} from 'redux';
import {ICommentsState, reducer as commentsReducer} from "./all-comments";

export interface CommentsState {
    allComments: ICommentsState,
}

export const reducer = combineReducers<CommentsState>({
    allComments: commentsReducer,
});
