
import { connect } from 'react-redux'
import { selectDocsInPage } from '../selectors'
import { pageNext, pagePrev } from '../actions'
import { Details } from '../components/Details'

const mapStateToProps = state => ({
  page: state.pageconf,
  currentDocs: selectDocsInPage(state),
})

const mapDispatchToProps = (dispatch) => ({
    nextPage: () => dispatch(pageNext()),
    prevPage: () => dispatch(pagePrev())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)