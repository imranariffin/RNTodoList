const loggerMiddleware = (logger) => (store) => next => action => {
  const { getState } = store
  logger.log('prev state:', getState())
  logger.log('action:', action)
  next(action)
  logger.log('next state:', getState())
}

export default loggerMiddleware
