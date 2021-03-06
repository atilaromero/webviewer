import { 
    detail_request,
    detail_receive,
    detail_cancel,
    preview_receive,
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
                        source,
                        id,
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
                        source,
                        id,
                        isFetching: false,
                        details: data,
                    },
                },
            }
        }
        case preview_receive.name: {
            const {source, id, text} = payload
            const ids = source in state ? state[source] : {}
            const iddata = id in ids ? ids[id] : {}
            return {
                ...state,
                [source]:{
                    ...ids,
                    [id]: {
                        ...iddata,
                        source,
                        id,
                        preview: text,
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
                        source,
                        id,
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