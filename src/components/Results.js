import React from 'react'
import {cloneDeep} from 'lodash'
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
                        let page = cloneDeep(props.page)
                        
                        page.currentposition = 0
                        page.source = v.source
                        
                        props.resetdetails()
                        props.setpage(page, v.ids)
                        props.details(v.source, v.ids.slice(0, 10))
                          .then(result => {
                            return result
                          })
                        
                    }}> Select </button>
                </li>
            ))}
        </ul>

        <button
          type="button"
          onClick={() => {
              props.resetdetails()
              props.setpage()
          }}> Reset details</button>  
        <hr/>
      </div>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
    details: PropTypes.func.isRequired,
    setpage: PropTypes.func.isRequired,
}

export default Results
