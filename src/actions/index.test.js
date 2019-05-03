import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import fetch from 'node-fetch'

import { result_set, fetchDocument } from '../actions'


it('fetchDocument - no mock', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const expected = {
        details: [
            {
            "bookmarks": [],
            "id": 1,
            "luceneId": 382,
            "properties": {
                "X-Parsed-By": [
                "dpf.sp.gpinf.indexer.parsers.RawStringParser",
                ],
                "acesso": [
                "2018.08.02.21.07.55",
                ],
                "alteracao do registro": [
                "",
                ],
                "caminho": [
                "src/dpf",
                ],
                "carved": [
                "false",
                ],
                "categoria": [
                "Pastas",
                ],
                "contentType": [
                "application/octet-stream",
                ],
                "criacao": [
                "2018.08.02.21.41.02",
                ],
                "deletado": [
                "false",
                ],
                "duplicate": [
                "true",
                ],
                "evidenceUUID": [
                "bd5f5ea3-2a7a-4944-bf4c-0808d93b57bf",
                ],
                "export": [
                "../src/dpf",
                ],
                "hasChildren": [
                "false",
                ],
                "hash": [
                "D41D8CD98F00B204E9800998ECF8427E",
                ],
                "id": [
                "1",
                ],
                "isDir": [
                "true",
                ],
                "md5": [
                "D41D8CD98F00B204E9800998ECF8427E",
                ],
                "modificacao": [
                "2018.08.02.21.41.02",
                ],
                "nome": [
                "dpf",
                ],
                "parentId": [
                "0",
                ],
                "parentIds": [
                "0 ",
                ],
                "sha-256": [
                "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
                ],
                "subitem": [
                "false",
                ],
                "tamanho": [
                "4096",
                ],
                "tipo": [
                "",
                ],
            },
            "selected": false,
            "source": "A",
            },
        ],
        results: [{source:"A", ids:[1,2,3]}],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"",
        },
        sources: [],
        ready: false,
    }
    store.dispatch(result_set({data: expected.results}))
    global.fetch = jest.fn().mockImplementation(fetch)
    return store.dispatch(fetchDocument({source:"A", id: 1}))
        .then(() => {
            expect(store.getState()).toEqual(expected)
        })
})

it('fetchDocument', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const expected = {
        details: [{source:"A", id:1, data: 9999}], 
        results: [{source:"A", ids:[1,2,3]}],
        pageconf: {
            currentposition:0,
            pagesize: 10,
            source:"",
        },
        sources: [],
        ready: false,
    }
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => (expected.details[0]),
    }))
    store.dispatch(result_set({data: expected.results}))
    return store.dispatch(fetchDocument({source:"A", id: 1}))
        .then(() => {
            expect(store.getState()).toEqual(expected)
        })
})

