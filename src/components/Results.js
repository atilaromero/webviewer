import React from 'react'

import PropTypes from 'prop-types'

function Results (props) {
    const line = (props.data.length===0) ? '' : 'Search hits on each source:'

    return (
        <ul>
            {line}
            {props.data.map((v,i) => (
                <li key={i}>
                    {v.source} ({v.ids.length}) <button 
                                                    type="button"
                                                    onClick={() => alert('Details: ' + v.source)}>Details</button>
                </li>
            ))}
        </ul>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Results
