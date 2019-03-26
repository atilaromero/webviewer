export const result_set = payload => ({type:'result_set', payload})
export const detail_request = payload => ({type:'detail_request', payload})
export const detail_receive = payload => ({type:'detail_receive', payload})
export const detail_cancel = payload => ({type:'detail_cancel', payload})

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
