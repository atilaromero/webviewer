import { 
    detail_request,
    detail_receive,
    detail_cancel,
} from '../actions'

const details = (state = {}, {type, payload}) => {
    switch (type) {
        case detail_request.name: {
            const { source, id } = payload
            const ids = source in state ? state[source] : {}
            const iddata = id in ids ? ids[id] : {}
            return {
                ...state,
                [source]:{
                    ...ids,
                    [id]: {
                        ...iddata,
                        isFetching: true,
                    },
                },
            }
        }
        case detail_receive.name: {
            const {source, id, data} = payload
            const ids = source in state ? state[source] : {}
            const iddata = id in ids ? ids[id] : {}
            return {
                ...state,
                [source]:{
                    ...ids,
                    [id]: {
                        ...iddata,
                        isFetching: false,
                        details: data,
                    },
                },
            }
        }
        case detail_cancel.name: {
            const {source, id} = payload
            const ids = source in state ? state[source] : {}
            const iddata = id in ids ? ids[id] : {}
            return {
                ...state,
                [source]:{
                    ...ids,
                    [id]: {
                        ...iddata,
                        isFetching: false,
                    },
                },
            }
        }
        default:
            return state
    }
}

export default details