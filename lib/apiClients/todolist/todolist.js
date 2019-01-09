const todoListApiClient = {}

const mockIsSuccess = () => Math.floor(Math.random() * Math.floor(10)) < 9

todoListApiClient.call = (req) => {
  const {
    method,
    body
  } = req
  switch (method.toUpperCase()) {
    case 'POST': {
      const {
        text
      } = body
      return new Promise((resolve, reject) => {
        if (mockIsSuccess()) {
          return resolve({
            data: {
              id: `${Math.random()}`,
              text,
              completed: false
            }
          })
        }
        reject({
            message: 'Something wrong happened :-('
        })
      })
    }
    case 'GET': {
      return new Promise((resolve, reject) => {
        if (mockIsSuccess()) {
          return resolve({
            data: {
              items: [{
                id: `${Math.random()}`,
                text: `An incompleted item`,
                completed: false
              }, {
                id: `${Math.random()}`,
                text: `A completed item`,
                completed: true
              }]
            }
          })
        }
        reject({
          message: 'Something wrong happened :-('
        })
      })
    }
    case 'PUT': {
      const {
        id,
        text,
        completed
      } = body
      return new Promise((resolve, reject) => {
        if (mockIsSuccess()) {
          return resolve({
            data: {
              id,
              text,
              completed
            }
          })
        }
        reject({
          message: 'Something wrong happened :-('
        })
      })
    }
    case 'DELETE': {
      const {
        id,
        text,
        completed
      } = body
      return new Promise((resolve, reject) => {
        if (mockIsSuccess()) {
          return resolve({
            data: { id }
          })
        }
        reject({
          message: 'Something wrong happened :-('
       })
      })
    }
    default: {
      throw Error('Unrecognized request')
    }
  }
}

export default todoListApiClient
