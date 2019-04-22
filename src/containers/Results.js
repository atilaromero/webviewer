import { connect } from 'react-redux'
import Results from '../components/Results'
import { getDetails, goReady } from '../actions';

const mapStateToProps = state => ({
    data: state.results
  })

const mapDispatchToProps = (dispatch) => ({
  details: conf => getDetails(conf)(dispatch),
  goready: () => goReady()(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)