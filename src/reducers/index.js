import { combineReducers } from 'redux'
import results from './results'
import details from './details'
import sources from './sources'

export default combineReducers({
    sources,
    results,
    details,
})