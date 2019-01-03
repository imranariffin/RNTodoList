const todoListApiClient = {}

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
      const mockIsSuccess =  Math.floor(Math.random() * Math.floor(10)) < 8
      return new Promise((resolve, reject) => {
        if (mockIsSuccess) {
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
      const mockIsSuccess =  Math.floor(Math.random() * Math.floor(10)) < 8
      return new Promise((resolve, reject) => {
        if (mockIsSuccess) {
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
      const mockIsSuccess =  Math.floor(Math.random() * Math.floor(10)) < 8
      return new Promise((resolve, reject) => {
        if (mockIsSuccess) {
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
      const mockIsSuccess =  Math.floor(Math.random() * Math.floor(10)) < 8
      return new Promise((resolve, reject) => {
        if (mockIsSuccess) {
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
