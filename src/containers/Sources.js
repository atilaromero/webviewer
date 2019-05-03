import { connect } from 'react-redux'
import Sources from '../components/Sources'

const mapStateToProps = state => ({
    sources: state.sources,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sources)