import history from './../history'
import { locationShareService } from './../firebase/index'
import distance from '@turf/distance'
import bearing from '@turf/bearing'

const initialLocation = {
  tracking: false,
  id: null,
  lastUpdatedTime: null,
  lastUpdatedTimeElapsed: null,
  expireTime: '',
  shareLink: '',
  error: null,
  locationFeature: null,
  lngLatHistory: [],
  userLocation: null,
  dist: null,
  angle: null
}

const locationTrackReducer = (store = initialLocation, action) => {

  switch (action.type) {

    case 'UPDATE_TRACKED_LOCATION': {
      const lngLatHistory = store.lngLatHistory
      const lastUpdatedTime = action.trackedLocation.features[0].properties.time

      return {
        ...store,
        tracking: true,
        id: action.id,
        lastUpdatedTime,
        lastUpdatedTimeElapsed: Math.floor((Date.now() - lastUpdatedTime) / 1000),
        lngLatHistory: lngLatHistory.concat(action.trackedLocation),
        locationFeature: action.trackedLocation,
      }
    }

    case 'UPDATE_DISTANCE': {
      if (store.userLocation !== null) {
        let dist = distance(action.trackedLocation.features[0], store.userLocation, { units: 'meters' })
        let angle = bearing(action.trackedLocation.features[0], store.userLocation)
        console.log(dist, angle)
        dist = Math.round(dist)
        angle = Math.round(angle)
        return { ...store, dist, angle }
      } else {
        return store
      }
    }

    case 'SET_LAST_UPDATED_TIME': {
      const lastUpdatedTime = store.lastUpdatedTime
      const lastUpdatedTimeElapsed = store.lastUpdatedTime !== null
        ? Math.floor((action.currentTime - lastUpdatedTime) / 1000)
        : null
      return {
        ...store,
        lastUpdatedTimeElapsed
      }
    }

    case 'UPDATE_USER_LOCATION': {
      if (store.locationFeature !== null) {
        const userLocation = action.geoJSONPoint.features[0]
        let dist = distance(store.locationFeature.features[0], action.geoJSONPoint.features[0], { units: 'meters' })
        let angle = bearing(store.locationFeature.features[0], action.geoJSONPoint.features[0])
        dist = Math.round(dist)
        angle = Math.round(angle)
        return { ...store, dist, angle, userLocation }
      } else {
        return store
      }
    }

    case 'SET_LINK_FOR_TRACK':
      return { ...store, shareLink: action.link, tracking: true }

    case 'SET_TRACKING_ON':
      return { ...store, tracking: true, id: action.shareId }

    case 'RESET_LOCATION_TRACK':
      return initialLocation

    default:
      return store
  }
}

export const startTrackingLocation = (id) => {
  return async (dispatch) => {
    const trackedLocation = await locationShareService.getLocationShare(id)
    if (trackedLocation !== null) {
      dispatch({ type: 'UPDATE_TRACKED_LOCATION', trackedLocation, id })
      dispatch(setLastUpdatedTime())
    }
    const link = getShareLocationLink(id)
    dispatch({ type: 'SET_TRACKING_ON', id })
    dispatch({ type: 'SET_LINK_FOR_TRACK', link })

    locationShareService.onLocationShareChanged(id)(snapshot => {
      const trackedLocation = snapshot.val()
      if (trackedLocation !== null) {
        console.log('trackedlocation: ', trackedLocation)
        dispatch({ type: 'UPDATE_TRACKED_LOCATION', trackedLocation, id })
        dispatch({ type: 'UPDATE_DISTANCE', trackedLocation, id })
      }
    })
  }
}

export const stopTrackingLocation = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'RESET_LOCATION_TRACK' })
    history.push('/')
  }
}

export const setLastUpdatedTime = () => {
  return async (dispatch) => {
    setInterval(() => {
      dispatch({ type: 'SET_LAST_UPDATED_TIME', currentTime: Date.now() })
    }, 3000)
  }
}

export const getLocationShareRequest = () => {
  return async (dispatch) => {
    const shareId = await locationShareService.addLocationShare()
    dispatch({ type: 'SET_TRACKING_ON', shareId })
    history.push(`/tracklocation/${shareId}`)
  }
}

export const submitLocationRequest = (e) => {
  e.preventDefault()
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_LOCATION_REQUEST' })
    history.push('/tracklocation')
  }
}

const getShareLocationLink = (shareId) => {
  return `https://livelocationdemo.firebaseapp.com/sharelocation/${shareId}`
}

export default locationTrackReducer