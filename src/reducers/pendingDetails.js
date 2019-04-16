import { 
    detail_request,
    detail_receive,
    detail_cancel,
} from '../actions'

const detailedResults = (state = {}, action) => {
    const sourcestate = {}
    switch (action.type) {
        case detail_request.name:
            var { source, id } = action.payload
            console.log("");
            var data = source in state ? state[source] : []
            return {
                ...state,
                [source]:[...data, id], 
            }
        case detail_receive.name:
        case detail_cancel.name:
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