import React from 'react'
import PropTypes from 'prop-types'

class Panel extends React.Component{

    constructor(props){
        super(props);
        //console.log('getting sources...');

        this.props.getsources()
    }

    render() {    

        console.log('Panel')
    
        if (this.props.data.length === 0)
            return (
                <div id="panel">
                <ul>
                <b>Sources:</b>
                    {this.props.sources.map((s,i) => (
                        <li key={i} id={s.id}>
                            {i+1} - {s.id}
                        </li>
                    ))}
        
                </ul>
                <hr/>
                </div>
            )
        else 
            return null

    }
    

}

Panel.propTypes = {
    getsources: PropTypes.func.isRequired,
}

export default Panel