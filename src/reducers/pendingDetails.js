import { actions } from '../actions'

const detailedResults = (state = {}, action) => {
    const sourcestate = {}
    switch (action.type) {
        case actions.detail_request:
            var { source, id } = action.payload
            var data = source in state ? state[source] : []
            return {
                ...state,
                [source]:[...data, id], 
            }
        case actions.detail_receive:
        case actions.detail_fail:
            var { source, id } = action.payload
            var data = source in state ? state[source] : []
            return {
                ...state,
                [source]:data.filter(x=>x!=id), 
            }
        default:
            return state
    }
}

export default detailedResults