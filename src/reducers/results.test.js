import results from './results'
import {
    result_set,
} from '../actions'

it('results', () => {
    const x = [{source: "A", ids: [1,2,3]}]
    expect(results([], {
        type: result_set.name,
        payload: {data: x}
    })).toEqual(x)
    expect(result_set(x)).toEqual({
        type: result_set.name,
        payload: x
    })
    expect(results([], result_set({data: x}))).toEqual(x)
})
