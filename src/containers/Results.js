import { connect } from 'react-redux'
import Results from '../components/Results'
import { updateDetails, pageSetSource } from '../actions';

const mapStateToProps = state => ({
    data: state.results,
  })

const mapDispatchToProps = (dispatch) => ({
  pageSetSource: source => {
    dispatch(pageSetSource(source))
  },
  updateDetails: () => {
    dispatch(updateDetails())
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)