
import { selectDocsInPage, selectDocsInSource } from '../selectors'

export const sources_set = payload => ({type:'sources_set', payload})

export const result_set = payload => ({type:'result_set', payload})

export const detail_request = ({source, id}) => ({type:'detail_request', payload: {source, id}})
export const detail_receive = ({source, id, data}) => ({type:'detail_receive', payload:{source, id, data}})
export const detail_cancel = ({source, id}) => ({type:'detail_cancel', payload:{source, id}})

export const pageconf_set_pos = payload => ({type:'pageconf_set_pos', payload})
export const pageconf_set_size = payload => ({type:'pageconf_set_size', payload})
export const pageconf_set_source = payload => ({type:'pageconf_set_source', payload})

export const pageNext = () => async (dispatch, getState) => {
    const state = getState()
    const results = selectDocsInSource(state)
    const {currentposition, pagesize} = state.pageconf
    const limit = results.length
    let nextPos = Math.min(limit, currentposition + pagesize)
    nextPos = nextPos - nextPos%pagesize
    await dispatch(pageSetPos(nextPos))
}

export const pagePrev = () => async (dispatch, getState) => {
    const state = getState()
    const {currentposition, pagesize} = state.pageconf
    let nextPos = Math.max(0, currentposition - pagesize)
    nextPos = nextPos - nextPos%pagesize
    await dispatch(pageSetPos(nextPos))
}

export const pageSetPos = pos => async (dispatch) => {
    dispatch(pageconf_set_pos(pos))
    await dispatch(updateDetails())
}

export const pageSetSize = size => async (dispatch) => {
    dispatch(pageconf_set_size(size))
    await dispatch(updateDetails())
}

export const pageSetSource = (source) => async (dispatch) => {
    dispatch(pageconf_set_source(source))
    await dispatch(updateDetails())
}

export const getSources = () => async (dispatch) => {
    const response = await fetch("http://localhost:8080/sources");
    const json = await response.json();
    return dispatch(sources_set(json));
}

export const updateDetails = () => (dispatch, getState) => {
    const state = getState()
    const docs = selectDocsInPage(state)
    const requests = docs.map(async (doc) => {
        const {source, id} = doc
        return dispatch(fetchDocument({source, id}))
    })
    return Promise.all(requests)
}

export const searchDocument = (query) => async (dispatch) => {
    const response = await fetch(`http://localhost:8080/search?q=${query}`)
    const json = await response.json()
    return dispatch(result_set(json))
}

export const fetchDocument = ({source, id}) => async (dispatch) => {
    try {
        await dispatch(detail_request({source, id}))
        const response = await fetch(`http://localhost:8080/sources/${source}/docs/${id}`)
        const json = await response.json()
        return dispatch(detail_receive({source, id, data: json}))
    } catch(error) {
        await dispatch(detail_cancel({source, id, error}))
        throw error
    }
}
