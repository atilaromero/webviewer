import pendingDetails from './pendingDetails'
import {
    detail_request,
    detail_receive,
    detail_cancel,
} from '../actions'

it('results', () => {
    const x0 = {}
    const x1 = {A: [1] }
    const x2 = {A: [1,2] }
    const x3 = {A: [2] }
    const x4 = {A: [] }
    expect(pendingDetails(x0, detail_request({source: "A", id: 1}))
    ).toEqual(
        x1
    )
    expect(pendingDetails(x1, detail_request({source: "A", id: 2}))
    ).toEqual(
        x2
    )
    expect(pendingDetails(x2, detail_cancel({source: "A", id: 1}))
    ).toEqual(
        x3
    )
    expect(pendingDetails(x3, detail_receive({source: "A", id: 2}))
    ).toEqual(
        x4
    )
})
