export const sources_set = payload => ({type:'sources_set', payload})

export const result_set = payload => ({type:'result_set', payload})

export const detail_conf = payload => ({type:'detail_conf', payload})
export const detail_reset = payload => ({type:'detail_reset', payload})
export const detail_request = payload => ({type:'detail_request', payload})
export const detail_receive = payload => ({type:'detail_receive', payload})
export const detail_cancel = payload => ({type:'detail_cancel', payload})

export const ready_set = payload => ({type:'ready_set', payload})

export const pageconf_set = payload => ({type:'pageconf_set', payload})

export function getSources(){
    return function (dispatch) {
        return (async () => {
            console.log("getting the sources...");
            const response = await fetch("http://localhost:8080/sources");
            const json = await response.json();
            //console.log(json);
            return dispatch(sources_set(json));
        })()
    }
}

export function setPage(page = {'currentposition': 0, 'pagesize': 10, 'source':''}){
    return function (dispatch) {
        return (async () => {
            console.log("setting page...");

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

export function getDetails(source, page){
    return function(dispatch){
        return (async () => {
            console.log(page)
            const requests = page.map(async (id) => {
                const response = await fetch(`http://localhost:8080/sources/${source}/docs/${id}`)
                console.log(`http://localhost:8080/sources/${source}/docs/${id}`)
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

export function goReady(ready){
    return function (dispatch) {
        return ( () => {
            console.log('going ready...')
            //const ready = true
            return dispatch(ready_set(ready));
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
            dispatch(detail_request({source, id}))
            const response = await fetch(`http://localhost:8080/sources/${source}/${id}`)
            const json = await response.json()
            return dispatch(detail_receive({...json, source, id}))
        })()
        .catch(error => {
            return dispatch(detail_cancel({source, id, error}))
        })
    }
}
