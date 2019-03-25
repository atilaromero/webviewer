import { actions } from '../actions'

const results = (state = [], action) => {
    console.log({state,action})
    switch (action.type) {
        case actions.result_set:
            return action.payload.data
        default:
            return state
    }
}

export default results