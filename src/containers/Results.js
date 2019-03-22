import { connect } from 'react-redux'
import Results from '../components/Results'

const mapStateToProps = state => ({
    data: state.results
  })

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)