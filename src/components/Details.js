import React from 'react';
import Doc from '../containers/Doc'

class Details extends React.Component{
  
  //constructor(props){
  //  super(props);
  //}

  //shouldComponentUpdate(){
  //    return this.props.ready;
  //}

  fetching = false

  getdata() {
    let v = this.props.data.find(item => item.source === this.props.page.source)
    console.log(v)

    this.fetching = true

    if(v.ids.length===0){
        alert('No search hits in this data source')
        this.fetching = false
        return null
    } else {
        this.props.resetdetails()
        let pos = this.props.page.currentposition
        let size = this.props.page.pagesize
        const page = v.ids.slice(pos, pos + size)

        if(v.ids.length > pos + size)
          pos = pos + size
        else
          pos = -1

        console.log(page)
 
        this.props.details(v.source, page)

        //console.log(typeof(requests))
        //console.log(requests[0])

        // Promise.all(requests)
        //   .then(responses => {
        //     //console.log('responses')
        //     //console.log(responses)
        //     for(let response of responses){
        //         //console.log(response)
        //         const doc = {
        //             'details':response,
        //             'text':'',
        //             'content':'',
        //         }
        //         this.props.details(doc)
        //     }
        //     console.log(`requests done: ${responses.length} results`)
        //     return responses
        //   })
        //   .then( responses => {
        //       this.fetching = false
        //       console.log(this.fetching)
        //       this.props.goready(true)
        //       return responses
        //   })
        // return requests
    }

}

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldComponentUpdate?')
  //   return (!this.fetching)
  // }

  render(){
    console.log('rendering Details...')

//    if (this.props.page.source === '') {
//      return(null);
//    } else {
      
      //if(this.props.ready===false)
        // this.getdata()

//      if(this.props.ready===true)
//      return(
//        <div>
//        <h3>Source {this.props.page.source} - Results {this.props.page.currentposition + 1} to {this.props.page.currentposition + this.props.page.pagesize}</h3>
//       </div>
//      )
     
    if (this.props.page.source === '') {
      return(null);
    } else {
      
      if(this.props.ready===true)
      return(
        <div>
        <h3>Source {this.props.page.source} - Results {this.props.page.currentposition + 1} to {this.props.page.currentposition + this.props.page.pagesize}</h3>
  
        <button
          type="button"
          onClick={ () => {

            let pos = this.props.page.currentposition
            let size = this.props.page.pagesize
            let source = this.props.page.source

            let nextpos = 0
            if(pos > size)
              nextpos = pos - size              

            let page = {
                'currentposition': nextpos,
                'pagesize': size,
                'source': source,
            }
            let sourceresults = this.props.data.find(item => item.source === this.props.page.source)
            console.log(sourceresults)

            this.props.setpage(page,sourceresults)
            this.props.resetdetails()
            this.props.details(source,sourceresults.ids.slice(page.currentposition, page.currentposition + page.pagesize))

          }}> Previous Page</button>

        <button
          type="button"
          onClick={ () => {

            let sourceresults = this.props.data.find(item => item.source === this.props.page.source)
            console.log(sourceresults)

            let pos = this.props.page.currentposition
            let size = this.props.page.pagesize
            let source = this.props.page.source

            let nextpos = pos + size
            if( nextpos > sourceresults.ids.length)
              nextpos = pos

            let page = {
                'currentposition': nextpos,
                'pagesize': size,
                'source': source,
            }

            this.props.setpage(page,sourceresults)
            this.props.resetdetails()
            this.props.details(source,sourceresults.ids.slice(page.currentposition, page.currentposition + page.pagesize))
          }}> Next Page </button>
        <hr/>

        {this.props.docs.map((e,i) => (
          <div key={i}>            
            <Doc order={i} key={i} />
          </div>
        ))}
        <button
          type="button"
          onClick={ () => {

          }}> Previous Page</button>

        <button
          type="button"
          onClick={ () => {

          }}> Next Page </button>
          
        </div>
      )
      else{
        //console.log('null')
        return null       
      }
    }
  }
}

export default Details;

/*
import React from 'react'

import PropTypes from 'prop-types'

function Results (props) {
    return (
        <ul>
            {props.data.map((v,i) => (
                <li key={i}>
                    {v.source}
                    <ul>
                        {v.ids.map((vi,i) => (
                            <li key={i}><a href={"http://localhost:8080/sources/" + v.source + "/docs/" + vi + "/text"}>{vi}</a></li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

Results.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Results

*/