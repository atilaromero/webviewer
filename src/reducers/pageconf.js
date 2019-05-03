import {
    pageconf_set_pos,
    pageconf_set_size,
    pageconf_set_source,
} from '../actions'

const pageconf = (state = {
    'currentposition':0,
    'pagesize':10,
    'source':''
    }, action) => {
    switch (action.type){
        case pageconf_set_pos.name:
            return {...state, currentposition: action.payload}
        case pageconf_set_size.name:
            return {...state, pagesize: action.payload}
        case pageconf_set_source.name:
            return {...state, source: action.payload}
        default:
            return state

    }

}

export default pageconf;