import React from 'react'

import PropTypes from 'prop-types'

function Results (props) {
    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Results
