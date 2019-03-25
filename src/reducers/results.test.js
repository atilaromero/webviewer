import results from './results'
import actions from '../actions'

it('results', () => {
    expect(results([], {
        type: actions.result_set,
        payload: {data: [{source: "A", ids: [1,2,3]}]}
    })).toEqual(
        [{source: "A", ids: [1,2,3]}]
    )
})
