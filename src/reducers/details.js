import { actions } from '../actions'

const detailedResults = (state = [], action) => {
    switch (action.type) {
        case actions.detail_request:
            return state
        case actions.detail_receive:
            return [...state, action.payload]
        case actions.detail_fail:
            return state
        default:
            return state
    }
}

export default detailedResults