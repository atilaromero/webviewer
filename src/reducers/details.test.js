import details from './details'
import {
    detail_receive,
} from '../actions'

it('results', () => {
    const x1 = {source: "A", id: 1, prop: 3}
    const x2 = {source: "A", id: 2, prop: 4}
    expect(detail_receive.name).toBe('detail_receive')
    expect(details([x1], detail_receive(x2))).toEqual(
        [x1, x2]
    )
})
