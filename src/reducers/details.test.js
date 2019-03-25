import details from './details'
import actions from '../actions'

it('results', () => {
    const x1 = {source: "A", id: 1, prop: 3}
    const x2 = {source: "A", id: 2, prop: 4}
    expect(details([x1], {
        type: actions.detail_receive,
        payload: x2
    })).toEqual(
        [x1, x2]
    )
})
