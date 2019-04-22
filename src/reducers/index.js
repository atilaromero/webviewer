import { combineReducers } from 'redux'
import results from './results'
import details from './details'
import sources from './sources'
import ready from './ready'

export default combineReducers({
    sources,
    results,
    details,
    ready,
})