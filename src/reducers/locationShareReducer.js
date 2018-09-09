import history from './../history'
import { locationShareService } from './../firebase/index'
import { createPointFeatureCollection, createGeoJSONPoint, addTimestampToGeoJSON } from './../mapboxhelper'

const initialLocation = {
  sharing: false,
  id: null,
  shareLink: '',
  expireTime: '',
  lastUpdatedTime: null,
  error: null,
  navWatchId: null,
  locationFeature: null,
  lngLatHistory: []
}

const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
}

const locationShareReducer = (store = initialLocation, action) => {

  switch (action.type) {

    case 'UPDATE_LOCATION_SHARE_FORM':
      return { ...store, [action.name]: action.value }

    case 'SUBMIT_LOCATION_SHARE':
      return { ...store, shareLink: action.shareLink, id: action.id }

    case 'SET_SHARING_TRUE':
      return { ...store, sharing: true }

    case 'UPDATE_NAV_WATCH_ID':
      return { ...store, navWatchId: action.navWatchId }

    case 'UPDATE_SHARED_LOCATION': {
      const lngLatHistory = store.lngLatHistory
      return {
        ...store,
        sharing: true,
        locationHistory: lngLatHistory.concat(action.lngLat),
        locationFeature: action.geoJSONPoint
      }
    }

    case 'EMPTY_LOCATION_SHARE_INPUT':
      return initialLocation

    case 'STOP_SHARING_LOCATION':
      console.log('stop watch: ', store.navWatchId)
      if (store.navWatchId !== null) {
        console.log('cleared navigator watch')
        navigator.geolocation.clearWatch(store.navWatchId)
      }
      return initialLocation

    default:
      return store
  }
}

export const createLocationShare = (e) => {
  e.preventDefault()
  return async (dispatch) => {
    dispatch({ type: 'SET_SHARING_TRUE' })
    const id = await locationShareService.createLocationShare()
    dispatch(startSharingLocation(id))
  }
}

export const startSharingLocation = (id) => {
  return async (dispatch) => {
    console.log('startSharingLocation: ', id)
    dispatch(updateSharedLocation(id))
    history.push(`/sharelocation/${id}`)
    dispatch({ type: 'SUBMIT_LOCATION_SHARE', shareLink: getTrackLocationLink(id), id })
  }
}

export const updateSharedLocation = (id) => {
  return async (dispatch) => {
    const watchPosition = async (pos) => {
      const lng = pos.coords.longitude
      const lat = pos.coords.latitude
      const geojson = addTimestampToGeoJSON(createGeoJSONPoint(lng, lat))
      const geoJSONPoint = createPointFeatureCollection(geojson)
      dispatch({
        type: 'UPDATE_SHARED_LOCATION',
        lngLat: { lng, lat },
        geoJSONPoint
      })
      locationShareService.updateLocationShare(id, geoJSONPoint)
    }
    const navWatchId = navigator.geolocation.watchPosition(watchPosition, geoError, geoOptions)
    dispatch({ type: 'UPDATE_NAV_WATCH_ID', navWatchId })
  }
}

export const stopSharingLocation = () => {
  return async (dispatch) => {
    history.push('/')
    dispatch({ type: 'STOP_SHARING_LOCATION' })
  }
}

const geoError = (error) => {
  console.log('no location available')
}

const getTrackLocationLink = (id) => {
  return `https://livelocationdemo.firebaseapp.com/tracklocation/${id}`
}

export default locationShareReducer
