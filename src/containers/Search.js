import { connect } from 'react-redux'
import Search from '../components/Search'
import { searchDocument } from '../actions'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    search: query => searchDocument(query)(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)