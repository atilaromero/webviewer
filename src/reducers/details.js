import { 
    detail_receive,
    detail_reset,
} from '../actions'

const details = (state = [], action) => {
    switch (action.type) {
        case detail_reset.name:
            return []
        case detail_receive.name:
            return [...state, action.payload]
        default:
            return state
    }
}

export default details