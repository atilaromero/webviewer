import { pageconf_set } from '../actions'

const pageconf = (state = {
    'currentposition':0,
    'pagesize':10,
    'source':''
    }, action) => {
    switch (action.type){
        case pageconf_set.name:
            return action.payload
        default:
            return state

    }

}

export default pageconf;