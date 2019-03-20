import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    async function fetch() {
        const result = await props.fetch(query)
        setData(result)
    }

    return (<div>
        <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}></input>
        <button 
            type="button"
            onClick={() => fetch()}>Search</button>
        <div>
            {JSON.stringify(data)}
        </div>
    </div>)
}
Search.propTypes = {
    fetch: PropTypes.func.isRequired,
}
export default Search