import { connect } from 'react-redux'
import Doc from '../components/Doc'
import { fetchDocument } from '../actions'

const mapStateToProps = function(state) {
    return {
      ready: state.ready,
      docs: state.details
    }
}

const mapDispatchToProps = dispatch => ({
    fetchdoc: ({source,id}) => fetchDocument({source,id})(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Doc)