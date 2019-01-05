const loggerMiddleware = (logger) => store => next => action => {
  const { getState } = store
  logger.log('prev state:', getState())
  logger.log('action:', action)
  const returnedAction = next(action)
  logger.log('next state:', getState())
  return returnedAction
}

export default loggerMiddleware
