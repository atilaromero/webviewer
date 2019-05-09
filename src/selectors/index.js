export const selectDocsInSource = state => {
    const { source } = state.pageconf
    const filtered = state.results.find(item => item.source === source)
    if (!filtered){
        return []
    }
    return filtered.ids
}

export const selectDocsInPage = state => {
    const {currentposition, pagesize, source} = state.pageconf
    const filtered = state.results.find(item => item.source === source)
    if (!filtered){
        return []
    }
    const sliced = filtered.ids.slice(currentposition, currentposition + pagesize)
    return sliced.map((id) => {
        if (!(source in state.details)){
            return {source, id, isFetching: false}
        }
        if (!(id in state.details[source])){
            return {source, id, isFetching: false}
        }
        return state.details[source][id]
    })
}