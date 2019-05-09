import React from 'react';
import PropTypes from 'prop-types'
import Doc from './Doc'

export function Details({page, currentDocs, nextPage, prevPage}) {
  const first = currentDocs.length? page.currentposition + 1 : 0
  const last = currentDocs.length + page.currentposition
  return(
    <div>
    <h3>Source {page.source} - Results {first} to {last}</h3>

    <button
      type="button"
      onClick={prevPage}> Previous Page</button>

    <button
      type="button"
      onClick={nextPage}> Next Page </button>
    <hr/>

    {currentDocs.map((doc,i) => (
      <Doc doc={doc} key={i} />
    ))}
    </div>
  )
}
Details.prototype = PropTypes.exact({
    page: PropTypes.object.isRequired,
    currentDocs: PropTypes.array.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired,
})
