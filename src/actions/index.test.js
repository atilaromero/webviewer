import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import { result_set, fetchDocument, pageconf_set_source, searchDocument, pageSetSource, updateDetails} from '../actions'

import {docA1, docA116, docA196} from '../test/mock'

it('fetchDocument', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const expected = {
        details: {A: {1:
            {
                source: "A",
                id: 1,
                isFetching: false,
                details: docA1,
            },
        }},
        results: [{source:"A", ids:[1,2,3]}],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"",
        },
        sources: [],
    }
    store.dispatch(result_set({data: expected.results}))
    return store.dispatch(fetchDocument({source:"A", id: 1}))
        .then(() => {
            expect(store.getState()).toEqual(expected)
        })
})

it('init store', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const expected = {
        details: {},
        results: [],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"",
        },
        sources: [],
    }
    expect(store.getState()).toEqual(expected)
})

it('search', async () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    await store.dispatch(searchDocument("teste"))
    const expected = {
        details: {},
        results: [
            {
                ids: [116,196],
                source: "A",
            },
        ],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"",
        },
        sources: [],
    }
    expect(store.getState()).toEqual(expected)
})

it('set source', async () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    await store.dispatch(searchDocument("teste"))
    await store.dispatch(pageSetSource("A"))
    const expected = {
        details: {
            A: {
                116:{
                    source: "A",
                    id: 116,
                    details: docA116,
                    isFetching: false,
                },
                196:{
                    source: "A",
                    id: 196,
                    details: docA196,
                    isFetching: false,
                },
            },
        },
        results: [
            {
                ids: [116,196],
                source: "A",
            },
        ],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"A",
        },
        sources: [],
    }
    expect(store.getState()).toEqual(expected)
})

it('bogus updateDetails', async () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    await store.dispatch(searchDocument("teste"))
    await store.dispatch(pageSetSource("A"))
    await store.dispatch(updateDetails())
    const expected = {
        details: {
            A: {
                116:{
                    source: "A",
                    id: 116,
                    details: docA116,
                    isFetching: false,
                },
                196:{
                    source: "A",
                    id: 196,
                    details: docA196,
                    isFetching: false,
                },
            },
        },
        results: [
            {
                ids: [116,196],
                source: "A",
            },
        ],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"A",
        },
        sources: [],
    }
    expect(store.getState()).toEqual(expected)
})
