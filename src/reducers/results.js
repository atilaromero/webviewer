const results = (state = [], action) => {
    switch (action.type) {
        case 'SET':
            return action.payload.data
        default:
            return state
    }
}

export default results