import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import { result_set, fetchDocument } from '../actions'

it('', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const x1 = {source:"A", id:1, data: 9999}
    const x2 = [{source:"A", ids:[1,2,3]}]
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => (x1),
    }))
    store.dispatch(result_set({data: x2}))
    return store.dispatch(fetchDocument({source:"A", id: 1}))
        .then(() => {
            expect(store.getState()).toEqual({details: [x1], results:x2})
        })
})