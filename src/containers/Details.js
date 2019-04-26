import { connect } from 'react-redux'
import Details from '../components/Details'

const mapStateToProps = function(state) {
    return {
      ready: state.ready,
      docs: state.details,
    }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)