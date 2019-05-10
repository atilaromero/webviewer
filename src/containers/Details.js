
import { connect } from 'react-redux'
import { selectDocsInPage } from '../selectors'
import { pageNext, pagePrev, preview } from '../actions'
import { Details } from '../components/Details'

const mapStateToProps = state => ({
  page: state.pageconf,
  currentDocs: selectDocsInPage(state),
})

const mapDispatchToProps = (dispatch) => ({
    nextPage: () => dispatch(pageNext()),
    prevPage: () => dispatch(pagePrev()),
    getPreview: (source, id) => dispatch(preview(source,id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)