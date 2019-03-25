import pendingDetails from './pendingDetails'
import actions from '../actions'

it('results', () => {
    const x0 = {}
    const x1 = {A: new Set([1]) }
    const x2 = {A: new Set([1,2]) }
    const x3 = {A: new Set([2]) }
    const x4 = {A: new Set([]) }
    expect(pendingDetails(x0, {
        type: actions.detail_request,
        payload: {source: "A", id: 1}
    })).toEqual(
        x1
    )
    expect(pendingDetails(x1, {
        type: actions.detail_request,
        payload: {source: "A", id: 2}
    })).toEqual(
        x2
    )
    expect(pendingDetails(x2, {
        type: actions.detail_fail,
        payload: {source: "A", id: 1}
    })).toEqual(
        x3
    )
    expect(pendingDetails(x3, {
        type: actions.detail_receive,
        payload: {source: "A", id: 2}
    })).toEqual(
        x4
    )
})
