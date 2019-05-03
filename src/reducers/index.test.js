import { createStore, applyMiddleware } from 'redux'
import rootReducer from './index'
import thunk from 'redux-thunk'

it('initial state', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const expected = {
        details: [], 
        results: [],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"",
        },
        sources: [],
        ready: false,
    }
    expect(store.getState()).toEqual(expected)
})