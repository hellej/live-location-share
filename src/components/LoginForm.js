import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import history, { sameHistoryLocation } from './../history'

import { Button } from './Buttons'
import { StyledFormContainer, Input } from './StyledFormElements'
import { handleLoginFormChange, submitLogin, closeLoginForm, openSignUpForm } from './../reducers/loginFormReducer'


export const StyledButtonDiv = styled.div`
  align-items: center;
  border-radius: 7px; 
  display: flex;
  margin: 10px 4px 0px 4px;
  padding: 5px 0px 5px 0px;
`
const StyledError = styled.div`
  color: white;
  font-size: 13px
  font-style: italic;
  font-weight: 300;
  padding: 5px 0px;
`


class LoginForm extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (sameHistoryLocation(this.props, nextProps)) { history.push('/') } //toggle form visibility by clicking the menu link
  }

  render() {

    const { loginForm, handleLoginFormChange, submitLogin, closeLoginForm, openSignUpForm } = this.props
    const { email, password, error } = loginForm
    const isInvalid = email === '' || password === ''

    return (
      <StyledFormContainer>
        <form>
          <Input
            placeholder='Email'
            type='email'
            name='email'
            value={email}
            onChange={handleLoginFormChange}
          />
          <Input
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={handleLoginFormChange}
          />
          {error && <StyledError>{error.message}</StyledError>}
          <StyledButtonDiv>
            <Button submit disabled={isInvalid} onClick={(e) => submitLogin(e, loginForm)}> Login </Button>
            <Button signup onClick={(e) => openSignUpForm(e)}> Sign Up </Button>
            <Button cancel onClick={(e) => closeLoginForm(e)}> Cancel </Button>
          </StyledButtonDiv>
        </form>
      </StyledFormContainer>
    )
  }
}



const mapStateToProps = (state) => ({
  loginForm: state.loginForm
})

const mapDispatchToProps = {
  handleLoginFormChange,
  closeLoginForm,
  submitLogin,
  openSignUpForm
}

const connectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default connectedLoginForm