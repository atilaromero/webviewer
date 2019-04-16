export const sources_set = payload => ({type:'sources_set', payload})

export const result_set = payload => ({type:'result_set', payload})

export const detail_request = payload => ({type:'detail_request', payload})
export const detail_receive = payload => ({type:'detail_receive', payload})
export const detail_cancel = payload => ({type:'detail_cancel', payload})


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
