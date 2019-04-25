import React from 'react'

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
                                let requests = v.ids.map((id,i) => {
                                    
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

                                /*fetch(`http://localhost:8080/sources/${v.source}/docs/${v.ids[0]}`)
                                    .then(result => result.json())
                                    .then(result => {
                                        //console.log(`sources/${v.source}/docs/${v.ids[0]}: `)
                                        const doc = {
                                        'details':result,
                                        'text':'',
                                        'content':'',
                                        }
                                        return doc
                                        //props.details(doc)
                                        //props.goready()
                                        //console.log(doc)
                                    })*/
                            }
                    }}>Details</button>
                </li>
            ))}
        </ul>
        <button
          type="button"
          onClick={() => {
              props.resetdetails()
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
}

export default Results
