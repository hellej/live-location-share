
import history from './../history'


const initialLocationRequest = {
  code: '',
  error: null
}

const locationRequestFormReducer = (store = initialLocationRequest, action) => {

  switch (action.type) {

    case 'UPDATE_LOCATION_REQUEST_FORM':
      return { ...store, [action.name]: action.value }

    case 'EMPTY_LOCATION_REQUEST_INPUT':
      return initialLocationRequest

    default:
      return store
  }

}


export const handleLocationCodeChange = (e) => {
  return { type: 'UPDATE_LOCATION_REQUEST_FORM', name: e.target.name, value: e.target.value }
}


export const emptyLocationRequestForm = () => {
  return { type: 'EMPTY_LOCATION_REQUEST_INPUT' }
}


export const submitLocationRequest = (e) => {
  e.preventDefault()
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_LOCATION_REQUEST' })
    history.push('/')
  }
}

export const closeLocationRequestForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    history.push('/')
  }
}


export default locationRequestFormReducer
