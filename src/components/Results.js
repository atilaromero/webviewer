import React from 'react'
import Doc from '../containers/Doc'

import PropTypes from 'prop-types'

function Results (props) {
    const line = (props.data.length===0) ? '' : 'Search hits on each source:'

    return (
      <div>
        <ul>
            {line}
            {props.data.map((v,i) => (
                <li key={i}>
                    {v.source} ({v.ids.length})
                    <button 
                        type="button"
                        onClick={() => {
                            if(v.ids.length===0){
                                alert('No search hits in this data source')
                            } else {
                                fetch(`http://localhost:8080/sources/${v.source}/docs/${v.ids[0]}`)
                                    .then(result => result.json())
                                    .then(result => {
                                        console.log(`sources/${v.source}/docs/${v.ids[0]}: `)
                                        const doc = {
                                        'details':result,
                                        'text':'',
                                        'content':'',
                                        }
                                        props.details(doc)
                                        props.goready()
                                        console.log(doc)
                                    })
                            }
                    }}>Details</button>
                </li>
            ))}
        </ul>
        <Doc/>
      </div>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
    details: PropTypes.func.isRequired,
    goready: PropTypes.func.isRequired,
}

export default Results
