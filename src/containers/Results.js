import { connect } from 'react-redux'
import Results from '../components/Results'
import { getDetails, goReady, resetDetails } from '../actions';

const mapStateToProps = state => ({
    data: state.results,
    pageconf: state.pageconf,
  })

const mapDispatchToProps = (dispatch) => ({
  details: conf => getDetails(conf)(dispatch),
  goready: (ready) => goReady(ready)(dispatch),
  resetdetails: () => resetDetails()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)