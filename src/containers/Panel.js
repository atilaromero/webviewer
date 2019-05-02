import { connect } from 'react-redux'
import Panel from '../components/Panel'
import { getSources } from '../actions'

const mapStateToProps = state => ({
    sources: state.sources,
    data: state.results,
})

const mapDispatchToProps = dispatch => ({
    getsources: () => getSources()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel)