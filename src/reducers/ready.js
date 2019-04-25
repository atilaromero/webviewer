import { ready_set } from '../actions'

const ready = (state = false, action) => {
    switch (action.type){
        case ready_set.name:
            //console.log("Ready!")
            return action.payload
        default:
            return state

    }

}

export default ready;