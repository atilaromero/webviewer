export const sources_set = payload => ({type:'sources_set', payload})

export const result_set = payload => ({type:'result_set', payload})

export const detail_reset = payload => ({type:'detail_reset', payload})
export const detail_receive = payload => ({type:'detail_receive', payload})

export const ready_set = payload => ({type:'ready_set', payload})

export const pageconf_set = payload => ({type:'pageconf_set', payload})

export function getSources(){
    return function (dispatch) {
        return (async () => {
            const response = await fetch("http://localhost:8080/sources");
            const json = await response.json();
            return dispatch(sources_set(json));
        })()
    }
}

export function setPage(page = {'currentposition': 0, 'pagesize': 10, 'source':''}){
    return function (dispatch) {
        return (async () => {
            return dispatch(pageconf_set(page));
        })()
    }
}

export function resetDetails(){
    return function (dispatch) {
        return (async () => {
            console.log("resetting details...");

            return dispatch(detail_reset([]));
        })()
    }
}

export function getDetails(source, ids){
    return function(dispatch){
        return (async () => {
            console.log(ids)
            const requests = ids.map(async (id) => {
                const response = await fetch(`http://localhost:8080/sources/${source}/docs/${id}`)
                const result = await response.json()
                const doc = {
                    'details':result,
                    'text':'',
                    'content':'',
                }
                return dispatch(detail_receive(doc))
            })
            return Promise.all(requests)
                    .then( results => {
                        dispatch(ready_set(true))
                        return results
                    })
        })()
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
            const response = await fetch(`http://localhost:8080/sources/${source}/docs/${id}`)
            const json = await response.json()
            return dispatch(detail_receive({...json, source, id}))
        })()
        .catch(error => {
            // return dispatch(detail_cancel({source, id, error}))
        })
    }
}
