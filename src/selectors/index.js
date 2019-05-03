export const selectCurrentDocs = state => {
    const {currentposition, pagesize, source} = state.pageconf
    const filtered = state.results.find(item => item.source === source)
    if (!filtered){
        return []
    }
    const sliced = filtered.ids.slice(currentposition, currentposition + pagesize)
    return sliced.map((id) => {
        if (!(source in state.details)){
            return {source, id}
        }
        if (!(id in state.details[source])){
            return {source, id}
        }
        return state.details[source][id]
    })
}