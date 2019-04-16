import { connect } from 'react-redux'
import Init from '../components/Init'
import { getSources } from '../actions'

const mapStateToProps = state => ({
//    sources: state.sources
})

const mapDispatchToProps = dispatch => ({
    getsources: () => getSources()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Init)