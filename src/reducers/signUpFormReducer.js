
import { showNotification } from './notificationReducer'
import { userService } from './../firebase/index'
import history from './../history'


const initialSignUpForm = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}


const signUpFormReducer = (store = initialSignUpForm, action) => {


  switch (action.type) {

    case 'UPDATE_SIGNUP_FORM':
      return { ...store, [action.name]: action.value }

    case 'EMPTY_SIGNUP_FORM':
      return initialSignUpForm

    default:
      return store
  }

}


export const handleSignUpFormChange = (e) => {
  return { type: 'UPDATE_SIGNUP_FORM', name: e.target.name, value: e.target.value }
}
export const emptySignUpForm = () => {
  return { type: 'EMPTY_SIGNUP_FORM' }
}


export const closeSignUpForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    history.push('/')
  }
}

export const openSignUpForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    dispatch({ type: 'EMPTY_LOGIN_FORM' })
    history.push('/signup')
  }
}

export const openLoginForm = (e) => {
  e.preventDefault()
  return (dispatch) => {
    dispatch({ type: 'EMPTY_SIGNUP_FORM' })
    history.push('/login')
  }
}


export const submitSignUp = (e, form) => {
  return async (dispatch) => {
    e.preventDefault()
    try {
      history.push('/')
      dispatch(showNotification({ type: 'load', text: 'Signing up...' }, 5))
      await userService.handleSignUp(form)
      dispatch({ type: 'EMPTY_SIGNUP_FORM' })
    } catch (error) {
      history.push('/signup')
      console.log('Error in creating profile: \n', error)
      dispatch({ type: 'UPDATE_SIGNUP_FORM', name: 'error', value: error })
      dispatch(showNotification({ type: 'alert', text: error.message }, 6))
    }
  }
}



export default signUpFormReducer
