import { connect } from 'react-redux'
import Details from '../components/Details'
import { setPage, resetDetails, goReady } from '../actions';

const mapStateToProps = function(state) {
    return {
      ready: state.ready,
      docs: state.details,
      page: state.pageconf,
      data: state.results, 
    }
}

const mapDispatchToProps = dispatch => ({
    setpage: (page) => setPage(page)(dispatch),
    resetdetails: () => resetDetails()(dispatch),
    goready: (ready) => goReady(ready)(dispatch),  
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)