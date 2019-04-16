import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const [query, setQuery] = useState("")
    
//    props.getsources()

    return (<div>
        <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}></input>
        <button 
            type="button"
            onClick={() => props.search(query)}>Search</button>
    </div>)
}
Search.propTypes = {
    search: PropTypes.func.isRequired,
    getsources: PropTypes.func.isRequired,
}
export default Search