import { combineReducers } from 'redux'
import results from './results'
import details from './details'
import sources from './sources'
import pageconf from './pageconf'

export default combineReducers({
    sources,
    results,
    details,
    pageconf,
})