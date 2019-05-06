import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import local_fetch from 'node-fetch'

import { result_set, fetchDocument, pageconf_set_source} from '../actions'

async function mock_fetch(url) {
    switch (url) {
        case 'http://localhost:8080/sources/A/docs/1':
            return {
                ok: true,
                json: () => (docA1),
            }
        default:
            return {
                ok: false,
                json: () => ({}),
            }
    }
}

async function check_mock_fetch(url) {
    // console.log({url})
    const res = await local_fetch(url)
    const mres = await mock_fetch(url)
    expect(res.ok)
    expect(mres.ok)
    const json = await res.json()
    const mjson = await mres.json()
    expect(json).toEqual(mjson)
    return {
        ok: mres.ok,
        json: mres.json,
    }
}

global.fetch = jest.fn().mockImplementation(check_mock_fetch)
// global.fetch = jest.fn().mockImplementation(mock_fetch)

const docA1 = {
    "bookmarks": [],
    "id": 1,
    "luceneId": 382,
    "properties": {
        "X-Parsed-By": ["dpf.sp.gpinf.indexer.parsers.RawStringParser",],
        "acesso": ["2018.08.02.21.07.55",],
        "alteracao do registro": ["",],
        "caminho": ["src/dpf",],
        "carved": ["false",],
        "categoria": ["Pastas",],
        "contentType": ["application/octet-stream",],
        "criacao": ["2018.08.02.21.41.02",],
        "deletado": ["false",],
        "duplicate": ["true",],
        "evidenceUUID": ["bd5f5ea3-2a7a-4944-bf4c-0808d93b57bf",],
        "export": ["../src/dpf",],
        "hasChildren": ["false",],
        "hash": ["D41D8CD98F00B204E9800998ECF8427E",],
        "id": ["1",],
        "isDir": ["true",],
        "md5": ["D41D8CD98F00B204E9800998ECF8427E",],
        "modificacao": ["2018.08.02.21.41.02",],
        "nome": ["dpf",],
        "parentId": ["0",],
        "parentIds": ["0 ",],
        "sha-256": ["E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",],
        "subitem": ["false",],
        "tamanho": ["4096",],
        "tipo": ["",],
    },
    "selected": false,
    "source": "A",
}

it('fetchDocument', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    const expected = {
        details: {A: {1:
            {
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

