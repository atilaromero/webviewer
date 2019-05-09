import React from 'react'
import PropTypes from 'prop-types'

function Panel({sources}){    
    return (
        <div id="panel">
        <ul>
        <b>Sources:</b>
            {sources.map((s,i) => (
                <li key={i} id={s.id}>
                    {i+1} - {s.id}
                </li>
            ))}

        </ul>
        <hr/>
        </div>
    )
}

Panel.propTypes = {
    sources: PropTypes.array.isRequired,
}

export default Panel