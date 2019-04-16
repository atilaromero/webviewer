import React from 'react'
import PropTypes from 'prop-types'

function Panel(props) {
    
//    props.getsources()
    console.log('Panel')

    return (<div id="panel">
            <ul>
            <b>Sources:</b>
                {props.sources.map((s,i) => (
                    <li key={i} id={s.id}>
                        {i+1} - {s.id}
                    </li>
                ))}
    
            </ul>
        </div>
    )

}

Panel.propTypes = {
    getsources: PropTypes.func.isRequired,
}

export default Panel