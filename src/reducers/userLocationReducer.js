const initialUserLocation = {
  expireTime: '',
  error: null,
  userLocation: null,
  locationHistory: []
}
const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
}

const userLocationReducer = (store = initialUserLocation, action) => {

  switch (action.type) {
    case 'UPDATE_USER_LOCATION': {
      const locationHistory = store.locationHistory
      return {
        ...store,
        locationHistory: locationHistory.concat(action.lngLat),
        userLocation: action.geoJSONPoint
      }
    }
    case 'RESET_USER_LOCATION':
      return initialUserLocation

    default:
      return store
  }
}

export const trackUserLocation = () => {
  return (dispatch) => {
    dispatch({ type: 'TRACK_USER_LOCATION' })
    dispatch(updateUserLocation())
  }
}

export const updateUserLocation = () => {
  return (dispatch) => {
    const watchPosition = (pos) => {
      const lng = pos.coords.longitude
      const lat = pos.coords.latitude
      dispatch({
        type: 'UPDATE_USER_LOCATION',
        lngLat: { lng, lat },
        geoJSONPoint: createPointFeatureCollection(createGeoJSONPoint(lng, lat))
      })
    }
    navigator.geolocation.watchPosition(watchPosition, geoError, geoOptions)
  }
}

const geoError = () => {
  console.log('no location available')
}

const createPointFeatureCollection = (pointFeature) => {
  return {
    type: 'FeatureCollection',
    features: [pointFeature]
  }
}

const createGeoJSONPoint = (lng, lat) => {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }
}

export default userLocationReducer
