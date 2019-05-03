
import { selectCurrentDocs } from '../selectors'

export const sources_set = payload => ({type:'sources_set', payload})

export const result_set = payload => ({type:'result_set', payload})

export const detail_request = ({source, id}) => ({type:'detail_request', payload: {source, id}})
export const detail_receive = ({source, id, data}) => ({type:'detail_receive', payload:{source, id, data}})
export const detail_cancel = ({source, id}) => ({type:'detail_cancel', payload:{source, id}})

export const pageconf_set_pos = payload => ({type:'pageconf_set_pos', payload})
export const pageconf_set_size = payload => ({type:'pageconf_set_size', payload})
export const pageconf_set_source = payload => ({type:'pageconf_set_source', payload})

export const pageSetPos = pos => dispatch => (async() => {
    dispatch(pageconf_set_pos(pos))
    dispatch(updateDetails())
})

export const pageSetSize = size => dispatch => (async() => {
    dispatch(pageconf_set_size(size))
    dispatch(updateDetails())
})

export const pageSetSource = (source) => (dispatch) => {
    dispatch(pageconf_set_source(source))
    dispatch(updateDetails())
}

export function getSources(){
    return function (dispatch) {
        return (async () => {
            const response = await fetch("http://localhost:8080/sources");
            const json = await response.json();
            return dispatch(sources_set(json));
        })()
    }
}

export function updateDetails(){
    console.log(88888)
    return function(dispatch, getState){
        const state = getState()
        const docs = selectCurrentDocs(state)
        const requests = docs.map(async (doc) => {
            console.log({docs})
            const {source, id} = doc
            return dispatch(fetchDocument({source, id}))
        })
        return Promise.all(requests)
    }
}

export function searchDocument (query) {
    return function (dispatch) {
        return (async () => {
            const response = await fetch(`http://localhost:8080/search?q=${query}`)
            const json = await response.json()
            return dispatch(result_set(json))
        })()
    }
}

export function fetchDocument ({source, id}) {
    return function (dispatch) {
        return (async () => {
            console.log({source,id})
            await dispatch(detail_request({source, id}))
            const response = await fetch(`http://localhost:8080/sources/${source}/docs/${id}`)
            const json = await response.json()
            return dispatch(detail_receive({source, id, data: json}))
        })()
        .catch(error => {
            return dispatch(detail_cancel({source, id, error}))
        })
    }
}
