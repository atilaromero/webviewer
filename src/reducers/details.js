import { 
    detail_request,
    detail_receive,
    detail_cancel,
    detail_conf,
} from '../actions'

const details = (state = [], action) => {
    switch (action.type) {
        case detail_conf.name:
            return [...state, action.payload]
        case detail_request.name:
            return state
        case detail_receive.name:
            return [...state, action.payload]
        case detail_cancel.name:
            return state
        default:
            return state
    }
}

export default details