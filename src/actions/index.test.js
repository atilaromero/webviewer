import {docA1, docA116, docA196} from '../test/mock'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import { 
    result_set,
    fetchDocument,
    searchDocument,
    pageSetSource,
    updateDetails,
    pageNext,
    pagePrev,
} from '../actions'

import { selectDocsInSource } from '../selectors';

test('fetchDocument', () => {
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

test('init store', () => {
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

test('search', async () => {
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

test('set source', async () => {
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

test('bogus updateDetails', async () => {
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


test('failed fetch', async () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    await store.dispatch(searchDocument("fail"))
    try{
        await store.dispatch(pageSetSource("A"))
        await store.dispatch(updateDetails())
        expect(failed).toEqual(true)
    } catch (e) {
        expect(String(e)).toEqual('TypeError: response.json is not a function')
        const state  = store.getState()
        expect(state.details.A[0]).toEqual({
            source: "A",
            id: 0,
            isFetching: false,
            details: undefined,
        })
    }
})

test('pagination', async () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    await store.dispatch(searchDocument("15docs"))
    await store.dispatch(pageSetSource("B"))
    await store.dispatch(pageNext())
    let state = store.getState()
    expect(state.pageconf.currentposition).toEqual(10)
    await store.dispatch(pageNext())
    state = store.getState()
    expect(state.pageconf.currentposition).toEqual(10)
    await store.dispatch(pagePrev())
    state = store.getState()
    expect(state.pageconf.currentposition).toEqual(0)
    await store.dispatch(pagePrev())
    state = store.getState()
    expect(state.pageconf.currentposition).toEqual(0)
})

test('change source', async () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    await store.dispatch(searchDocument("sources"))
    await store.dispatch(pageSetSource("B"))
    await store.dispatch(pageNext())
    let state = store.getState()
    expect(state.pageconf.currentposition).toEqual(10)
    await store.dispatch(pageNext())
    state = store.getState()
    expect(state.pageconf.currentposition).toEqual(10)
    await store.dispatch(pageSetSource("A"))
    state = store.getState()
    expect(state.pageconf.currentposition).toEqual(0)
    const results = selectDocsInSource(store.getState())
    expect(results.length).toEqual(3)
    expect(state.pageconf.currentposition).toEqual(0)
    expect(state.pageconf.pagesize).toEqual(10)
})