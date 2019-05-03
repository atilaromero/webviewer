import { connect } from 'react-redux'
import Results from '../components/Results'
import { getDetails, resetDetails, setPage } from '../actions';

const mapStateToProps = state => ({
    data: state.results,
    page: state.pageconf,
  })

const mapDispatchToProps = (dispatch) => ({
  details: (source, page) => getDetails(source, page)(dispatch),
  setpage: (page, data) => setPage(page, data)(dispatch),
  resetdetails: () => resetDetails()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)