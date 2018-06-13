
import { showNotification } from './notificationReducer'
import { userService } from './../firebase/index'
import history from './../history'


const initialLoginForm = {
  email: '',
  password: '',
  error: null
}


const loginFormReducer = (store = initialLoginForm, action) => {

  switch (action.type) {

    case 'UPDATE_LOGIN_FORM':
      return { ...store, [action.name]: action.value }

    case 'EMPTY_LOGIN_FORM':
      return initialLoginForm

    default:
      return store
  }

}


export const handleLoginFormChange = (e) => {
  return { type: 'UPDATE_LOGIN_FORM', name: e.target.name, value: e.target.value }
}

export const emptyLoginForm = () => {
  return { type: 'EMPTY_LOGIN_FORM' }
}

export const closeLoginForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    history.push('/')
  }
}

export const submitLogin = (e, form) => {
  return async (dispatch) => {
    e.preventDefault()
    try {
      history.push('/')
      dispatch(showNotification({ type: 'load', text: 'Logging in...' }, 5))
      await userService.handleSignIn(form.email, form.password)
      dispatch({ type: 'EMPTY_LOGIN_FORM' })
    } catch (error) {
      history.push('/login')
      console.log('Error in logging in: \n', error)
      dispatch({ type: 'UPDATE_LOGIN_FORM', name: 'error', value: error })
      dispatch(showNotification({ type: 'alert', text: error.message }, 6))
    }
  }
}

export const openSignUpForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    dispatch({ type: 'EMPTY_LOGIN_FORM' })
    history.push('/signup')
  }
}




export default loginFormReducer
