
import history from './../history'


const initialLocationShare = {
  expireTime: '',
  error: null
}

const locationShareFormReducer = (store = initialLocationShare, action) => {

  switch (action.type) {

    case 'UPDATE_LOCATION_SHARE_FORM':
      return { ...store, [action.name]: action.value }

    case 'EMPTY_LOCATION_SHARE_INPUT':
      return initialLocationShare

    default:
      return store
  }

}


export const handleLocationExpireTimeChange = (e) => {
  return { type: 'UPDATE_LOCATION_FORM', name: e.target.name, value: e.target.value }
}


export const submitLocationShareStart = (e) => {
  e.preventDefault()
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_LOCATION_SHARE' })
    history.push('/')
  }
}

export const closeLocationShareForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    history.push('/')
  }
}


export default locationShareFormReducer
