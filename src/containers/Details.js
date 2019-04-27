import { connect } from 'react-redux'
import Details from '../components/Details'
import { setPage, resetDetails } from '../actions';

const mapStateToProps = function(state) {
    return {
      ready: state.ready,
      docs: state.details,
      page: state.pageconf,
    }
}

const mapDispatchToProps = dispatch => ({
    setpage: (page) => setPage(page)(dispatch),
    resetdetails: () => resetDetails()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)