import React from 'react'

import PropTypes from 'prop-types'

function Results (props) {
    return (
        <ul>
            {props.data.map((v,i) => (
                <li key={i}>
                    {v.source}
                    <ul>
                        {v.ids.map((v,i) => (
                            <li key={i}>{v}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Results
