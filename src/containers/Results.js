import { connect } from 'react-redux'
import Results from '../components/Results'
import { getDetails, goReady, resetDetails, setPage } from '../actions';

const mapStateToProps = state => ({
    data: state.results,
    page: state.pageconf,
  })

const mapDispatchToProps = (dispatch) => ({
  details: conf => getDetails(conf)(dispatch),
  goready: (ready) => goReady(ready)(dispatch),
  setpage: (page) => setPage(page)(dispatch),
  resetdetails: () => resetDetails()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)