import React from 'react'
import PropTypes from 'prop-types'

function Results (props) {
    const line = (props.data.length===0) ? '' : 'Search hits on each source:'

    return (
      <div >
        <ul>
            {line}
            {props.data.map((v,i) => (
                <li key={i}>
                    {v.source} ({v.ids.length})

                    <button type='button' onClick={ () => {
                        console.log(1234123)
                        props.pageSetSource(v.source)
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
