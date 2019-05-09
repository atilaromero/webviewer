import { connect } from 'react-redux'
import Results from '../components/Results'
import { pageSetSource } from '../actions';

const mapStateToProps = state => ({
    data: state.results,
  })

const mapDispatchToProps = (dispatch) => ({
  pageSetSource: source => dispatch(pageSetSource(source)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)