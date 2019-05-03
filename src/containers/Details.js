import { connect } from 'react-redux'
import Details from '../components/Details'
import { setPage, resetDetails, getDetails } from '../actions';

const mapStateToProps = state => ({
      ready: state.ready,
      docs: state.details,
      page: state.pageconf,
      data: state.results, 
})

const mapDispatchToProps = dispatch => ({
    setpage: (page,data) => setPage(page, data)(dispatch),
    details: (source, page) => getDetails(source, page)(dispatch),
    resetdetails: () => resetDetails()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)