import { result_set } from '../actions'

const results = (state = [], action) => {
    switch (action.type) {
        case result_set.name:
            console.log("results: " + JSON.stringify(action.payload.data))
            return action.payload.data
        default:
            return state
    }
}

export default results