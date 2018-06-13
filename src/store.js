import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import notificationReducer from './reducers/notificationReducer'
import loginFormReducer from './reducers/loginFormReducer'
import signUpFormReducer from './reducers/signUpFormReducer'
import locationRequestFormReducer from './reducers/locationRequestFormReducer'
import locationShareFormReducer from './reducers/locationShareFormReducer';

const reducer = combineReducers({
  notification: notificationReducer,
  loginForm: loginFormReducer,
  signUpForm: signUpFormReducer,
  locationRequestForm: locationRequestFormReducer,
  locationShareForm: locationShareFormReducer
})

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store