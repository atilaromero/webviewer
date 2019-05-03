import React from 'react';
import Doc from '../components/Doc'

function Details(props) {
  return(
    <div>
    <h3>Source {props.page.source} - Results {props.page.currentposition + 1} to {props.page.currentposition + props.page.pagesize}</h3>

    <button
      type="button"
      onClick={null}> Previous Page</button>

    <button
      type="button"
      onClick={null}> Next Page </button>
    <hr/>

    {props.currentDocs.map((doc,i) => (
      <Doc doc={doc} key={i} />
    ))}
    </div>
  )
}

export default Details;
