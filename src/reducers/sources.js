import { sources_set } from '../actions'

const sources = (state = [], action) => {
    switch (action.type){
        case sources_set.name:
            console.log("sources: " + JSON.stringify(action.payload.data))
            return action.payload.data
        default:
            return state

    }

}

export default sources;