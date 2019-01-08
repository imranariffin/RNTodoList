import apiMiddleware from '@state/middlewares/api'

describe('middlewares.api', () => {
  describe('when incompatible actions', () => {
    const actions = [{
      type: 'SOME_TYPE'
    }, {
      type: 'API',
      types: [
        'FIRST_ACTION',
        'SECOND_ACTION',
      ]
    }, {
      type: 'API',
      types: [
        'FIRST_ACTION',
        'SECOND_ACTION',
        'THIRD_ACTION',
        'FOURTH_ACTION'
      ]
    }, {
      type: 'API',
      types: [
        'FIRST_ACTION',
        'SECOND_ACTION',
        'THIRD_ACTION',
      ],
      method: 'NotHttpMethod'
    }, {
      type: 'NOT_API',
      types: [
        'FIRST_ACTION',
        'SECOND_ACTION',
        'THIRD_ACTION',
      ],
      method: 'get'
    }]

    actions.forEach(action => {
      it('returns early', async () => {
        const client = { call: jest.fn() }
        const store = { getState: jest.fn(), dispatch: jest.fn() }
        const next = jest.fn(action => action)

        await apiMiddleware(client)(store)(next)(action)

        expect(store.getState).toHaveBeenCalledTimes(0)
        expect(store.dispatch).toHaveBeenCalledTimes(0)
        expect(next).toHaveBeenCalledWith(action)
        expect(next).toHaveBeenCalledTimes(1)
        expect(client.call).toHaveBeenCalledTimes(0)
      })
      it('returns the action', async () => {
        const client = { call: jest.fn() }
        const store = { getState: jest.fn(), dispatch: jest.fn() }
        const next = jest.fn(action => action)

        const returnedAction = await apiMiddleware(client)(store)(next)(action)
        expect(returnedAction).toEqual(next.mock.results[0].value)
      })
    })
  })

  describe('when three-phase asynchronous actions', () => {
    const action = {
      type: 'API',
      types: [
        'FIRST_ACTION',
        'SECOND_ACTION',
        'THIRD_ACTION'
      ],
      data: { a: 'a' },
      method: 'GET'
    }
    it('dispatches first action', () => {
      const client = { call: jest.fn() }
      const store = { getState: jest.fn(), dispatch: jest.fn() }
      const next = jest.fn()

      apiMiddleware(client)(store)(next)(action)

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'FIRST_ACTION',
        data: { a: 'a' },
        method: 'GET'
      })
    })

    describe('when client request successful', () => {
      it('dispatches second action', async () => {
        const responseData = {
          data: {
            data1: 'Some response data'
          }
        }
        const client = {
          call: jest.fn(() => Promise.resolve(responseData))
        }
        const store = { getState: jest.fn(), dispatch: jest.fn() }
        const next = jest.fn()

        await apiMiddleware(client)(store)(next)(action)

        expect(store.dispatch.mock.calls.length).toBe(2);
        expect(store.dispatch.mock.calls[0][0]).toEqual({
          type: 'FIRST_ACTION',
          data: { a: 'a' },
          method: 'GET'
        })
        expect(store.dispatch.mock.calls[1][0]).toEqual({
          type: 'SECOND_ACTION',
          data: {
            data1: 'Some response data'
          }
        })
      })
    })

    describe('when client request failure', () => {
      it('dispatches third action passing along data & error', async () => {
        const error = { message: 'Some error message' }
        const client = {
          call: jest.fn(() => Promise.reject(error))
        }
        const store = { getState: jest.fn(), dispatch: jest.fn() }
        const next = jest.fn()

        await apiMiddleware(client)(store)(next)(action)

        expect(store.dispatch.mock.calls.length).toBe(2);
        expect(store.dispatch.mock.calls[0][0]).toEqual({
          type: 'FIRST_ACTION',
          data: { a: 'a' },
          method: 'GET'
        })
        expect(store.dispatch.mock.calls[1][0]).toEqual({
          type: 'THIRD_ACTION',
          data: {
            a: 'a',
            error: {
              message: 'Some error message'
            }
          }
        })
      })
    })
  })
})
