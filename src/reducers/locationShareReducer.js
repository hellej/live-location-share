
import history from './../history'


const initialLocationShare = {
  expireTime: '',
  error: null,
  locationHistory: []
}
const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
}

const locationShareReducer = (store = initialLocationShare, action) => {

  switch (action.type) {

    case 'UPDATE_LOCATION_SHARE_FORM':
      return { ...store, [action.name]: action.value }

    case 'UPDATE_SHARED_LOCATION': {
      const locationHistory = store.locationHistory
      return { ...store, locationHistory: locationHistory.concat(action.lngLat) }
    }

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
    const watchPosition = (pos) => {
      const lng = pos.coords.longitude
      const lat = pos.coords.latitude
      console.log('tracked: ', lat, ' ', lng)
      dispatch({ type: 'UPDATE_SHARED_LOCATION', lngLat: { lng, lat } })
    }
    navigator.geolocation.watchPosition(watchPosition, geoError, geoOptions)
  }
}

export const updateSharedLocation = () => {
  return (dispatch) => {
  }
}

export const closeLocationShareForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    history.push('/')
  }
}

const geoError = (error) => {
  console.log('no location available')
}

export default locationShareReducer
