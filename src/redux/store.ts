import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { ListReducer } from './List/ListReducer'

const reducers = combineReducers({
    list: ListReducer,
})

export type TState = ReturnType<typeof reducers>;

const middleware = [thunk]

const Store = createStore(
    reducers,
    //  initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)
export type AppDispatch = typeof Store.dispatch;

declare const Window: any

Window.store = Store
// this for   testing  rather  acative  the  devTools  to  injection  it in windows global
export default Store
