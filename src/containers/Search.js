import { connect } from 'react-redux'
import Search from '../components/Search'
import { result_set } from '../actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    search: async query => {
        const response = await fetch(`http://localhost:8080/search?q=${query}`)
        const json = await response.json()
        dispatch(result_set(json))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)