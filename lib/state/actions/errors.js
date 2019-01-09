export const DISMISS_ALL_ERRORS = 'DISMISS_ALL_ERRORS'

export const dismissAllErrors = () => {
  return {
    type: DISMISS_ALL_ERRORS,
    data: {}
  }
}
