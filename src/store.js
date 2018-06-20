import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import notificationReducer from './reducers/notificationReducer'
import loginFormReducer from './reducers/loginFormReducer'
import signUpFormReducer from './reducers/signUpFormReducer'
import locationRequestFormReducer from './reducers/locationRequestFormReducer'
import locationShareReducer from './reducers/locationShareReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  loginForm: loginFormReducer,
  signUpForm: signUpFormReducer,
  locationRequestForm: locationRequestFormReducer,
  locationShare: locationShareReducer
})

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store