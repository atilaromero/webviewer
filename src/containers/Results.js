import { connect } from 'react-redux'
import Results from '../components/Results'
import { updateDetails, pageSetSource } from '../actions';

const mapStateToProps = state => ({
    data: state.results,
  })

const mapDispatchToProps = (dispatch) => ({
  pageSetSource: source => {
    console.log(66666)
    dispatch(pageSetSource(source))
  },
  updateDetails: () => {
    console.log(77777)
    dispatch(updateDetails())
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)