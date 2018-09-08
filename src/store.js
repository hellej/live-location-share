import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import locationShareReducer from './reducers/locationShareReducer'
import locationTrackReducer from './reducers/locationTrackReducer'
import userLocationReducer from './reducers/userLocationReducer'

const reducer = combineReducers({
  locationShare: locationShareReducer,
  locationTrack: locationTrackReducer,
  userLocation: userLocationReducer,
})

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
