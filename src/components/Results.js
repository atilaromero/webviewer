import React from 'react'
import PropTypes from 'prop-types'

function Results ({data, pageSetSource}) {
    const line = (data.length===0) ? '' : 'Search hits on each source:'

    return (
      <div >
        <ul>
            {line}
            {data.map((v,i) => (
                <li key={i}>
                    {v.source} ({v.ids.length})

                    <button type='button' onClick={ () => {
                        pageSetSource(v.source)
                    }}> Select </button>
                </li>
            ))}
        </ul>

        <hr/>
      </div>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
    pageSetSource: PropTypes.func.isRequired,
}

export default Results
