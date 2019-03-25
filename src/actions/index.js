export const actions = {
    result_set: 'result_set',
    detail_request: 'detail_request',
    detail_receive: 'detail_receive',
    detail_fail: 'detail_fail',
}

export const setResults = results => ({
    type: actions.result_set,
    payload: results,
})

export default actions