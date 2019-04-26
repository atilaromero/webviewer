import React from 'react';
import Doc from '../containers/Doc'

class Details extends React.Component{
  
  //constructor(props){
  //  super(props);
  //}

  //shouldComponentUpdate(){
  //    return this.props.ready;
  //}

  render(){
    if (this.props.ready === false) {
      return(null);
    } else {
      return(
        <div>

        <button
          type="button"
          onClick={ () => {

          }}> Previous Page</button>

        <button
          type="button"
          onClick={ () => {

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