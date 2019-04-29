import React from 'react'
import {cloneDeep} from 'lodash'
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

                    <button type='button' onClick={ () => {
                        let page = cloneDeep(props.page)
                        
                        page.currentposition = 0
                        page.source = v.source
                        
                        props.setpage(page)
                        props.resetdetails()
                    }}> Select </button>
                </li>
            ))}
        </ul>

        <button
          type="button"
          onClick={() => {
              props.resetdetails()
              props.setpage()
              props.goready(false)
          }}> Reset details</button>  
        <hr/>
      </div>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
    details: PropTypes.func.isRequired,
    goready: PropTypes.func.isRequired,
    setpage: PropTypes.func.isRequired,
}

export default Results

/*
                    <button 
                        type="button"
                        onClick={() => {
                            if(v.ids.length===0){
                                alert('No search hits in this data source')
                            } else {
                                props.resetdetails()
                                let pos = props.page.currentposition
                                let size = props.page.pagesize
                                const page = v.ids.slice(pos, pos + size)

                                if(v.ids.length > pos + size)
                                  pos = pos + size
                                else
                                  pos = -1

                                console.log(page)

                                let requests = page.map((id,i) => {
                                    
                                    return fetch(`http://localhost:8080/sources/${v.source}/docs/${id}`)
                                      .then(response => {
                                          console.log(`http://localhost:8080/sources/${v.source}/docs/${id}`)
                                          //console.log(response.json())
                                          return response.json()                                          
                                      })
                                      .then(result => {
                                        const doc = {
                                            'details':result,
                                            'text':'',
                                            'content':'',
                                        }
                                        //props.details(doc)
                                        return doc
                                      })
                                })

                                //console.log(typeof(requests))
                                //console.log(requests[0])

                                Promise.all(requests)
                                  .then(responses => {
                                    //console.log('responses')
                                    //console.log(responses)
                                    for(let response of responses){
                                        //console.log(response)
                                        const doc = {
                                            'details':response,
                                            'text':'',
                                            'content':'',
                                        }
                                        props.details(doc)
                                    }
                                    console.log(`requests done: ${responses.length} results`)
                                    return responses
                                  })
                                  .then( responses => {
                                      props.goready(true)
                                      return responses
                                  })
                            }
                    }}>Details</button> */
