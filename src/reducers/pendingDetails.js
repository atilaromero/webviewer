import { actions } from '../actions'

const detailedResults = (state = {}, action) => {
    const sourcestate = {}
    switch (action.type) {
        case actions.detail_request:
            sourcestate[action.payload.source] = new Set(state[action.payload.source])
            sourcestate[action.payload.source].add(action.payload.id)
            return {
                ...state,
                ...sourcestate, 
            }
        case actions.detail_receive:
        case actions.detail_fail:
            sourcestate[action.payload.source] = new Set(state[action.payload.source])
            sourcestate[action.payload.source].delete(action.payload.id)
            return {
                ...state,
                ...sourcestate, 
            }
        default:
            return state
    }
}

export default detailedResults