import React from 'react';
import Doc from '../components/Doc'

function Details(props) {
  return(
    <div>
    <h3>Source {props.page.source} - Results {props.page.currentposition + 1} to {props.page.currentposition + props.page.pagesize}</h3>

    <button
      type="button"
      onClick={ () => {

        let pos = props.page.currentposition
        let size = props.page.pagesize
        let source = props.page.source

        let nextpos = 0
        if(pos > size)
          nextpos = pos - size              

        let page = {
            'currentposition': nextpos,
            'pagesize': size,
            'source': source,
        }
        let sourceresults = props.data.find(item => item.source === props.page.source)
        console.log(sourceresults)
        
        props.setpage(page,sourceresults)
        props.resetdetails()
        props.details(source,sourceresults.ids.slice(page.currentposition, page.currentposition + page.pagesize))

      }}> Previous Page</button>

    <button
      type="button"
      onClick={ () => {

        let sourceresults = props.data.find(item => item.source === props.page.source)
        console.log({sourceresults})

        let pos = props.page.currentposition
        let size = props.page.pagesize
        let source = props.page.source

        let nextpos = pos + size
        if( nextpos > sourceresults.ids.length)
          nextpos = pos

        let page = {
            'currentposition': nextpos,
            'pagesize': size,
            'source': source,
        }

        props.setpage(page,sourceresults)
        props.resetdetails()
        props.details(source,sourceresults.ids.slice(page.currentposition, page.currentposition + page.pagesize))
      }}> Next Page </button>
    <hr/>

    {props.docs.map((doc,i) => (
      <Doc doc={doc} key={i} />
    ))}
    </div>
  )
}

export default Details;
