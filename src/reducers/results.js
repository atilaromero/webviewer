import { result_set } from '../actions'

const results = (state = [], action) => {
    switch (action.type) {
        case result_set.name:
            return action.payload.data
        default:
            return state
    }
}

export default results