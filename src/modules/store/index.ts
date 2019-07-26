import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import {createRootReducer, IApplicationState} from "./rootReducer";

export function configureStore(): Store<IApplicationState> {
    return createStore(
        createRootReducer(),
        {},
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
    );
}