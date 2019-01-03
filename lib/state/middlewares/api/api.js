const api = (client) =>
  ({ dispatch }) => (next) => async (action) => {
    if (
      !action.types || action.types.length !== 3 ||
      !action.types.every(type => typeof(type) === 'string') ||
      !action.method ||
      !['GET', 'POST', 'PUT', 'DELETE'].includes(action.method.toUpperCase())
    ) {
      return next(action)
    }

    const {
      types: [
        pending,
        success,
        failure
      ],
      data,
      method
    } = action

    dispatch({
      type: pending,
      data: {
        ...data
      },
      method
    })

    const request = {
      method,
      body: { ...data }
    }
    try {
      const response = await client.call(request)
      const { data } = response
      dispatch({
        type: success,
        data
      })
    } catch (error) {
      const { message } = error
      dispatch({
        type: failure,
        data: { error }
      })
    }
  }

export default api
