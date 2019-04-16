import React from 'react'
import PropTypes from 'prop-types'

function Init(props) {
    
    console.log('Init')
    props.getsources()

    return (<div>
        </div>
    )

}

Init.propTypes = {
    getsources: PropTypes.func.isRequired,
}

export default Init