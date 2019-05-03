import { connect } from 'react-redux'
import Details from '../components/Details'
import { setPage, getDetails } from '../actions'
import { selectCurrentDocs } from '../selectors'

const mapStateToProps = state => ({
      ready: state.ready,
      docs: state.details,
      page: state.pageconf,
      data: state.results, 
      currentDocs: selectCurrentDocs(state),
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)