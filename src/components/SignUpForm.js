import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import history, { sameHistoryLocation } from './../history'

import { Button } from './Buttons'
import { StyledFormContainer, Input } from './StyledFormElements'
import { handleSignUpFormChange, submitSignUp, openLoginForm, closeSignUpForm } from './../reducers/signUpFormReducer'


export const StyledSignUpButtonDiv = styled.div`
  align-items: center;
  border-radius: 7px; 
  display: flex;
  margin: 10px 4px 0px 4px;
  padding: 5px 0px 5px 0px;
`
const StyledError = styled.div`
font-size: 13px
font-style: italic;
padding: 5px 0px;
`


class SignUpForm extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (sameHistoryLocation(this.props, nextProps)) { history.push('/') } //toggle form visibility by clicking the menu link
  }

  render() {

    const { signUpForm, handleSignUpFormChange, submitSignUp, closeSignUpForm, openLoginForm } = this.props
    const { username, email, passwordOne, passwordTwo, error } = signUpForm
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || username === ''

    return (
      <StyledFormContainer >
        <form>
          <Input
            placeholder='Username'
            type='text'
            name='username'
            value={username}
            onChange={handleSignUpFormChange}
          />
          <Input
            placeholder='Email'
            type='email'
            name='email'
            value={email}
            onChange={handleSignUpFormChange}
          />
          <Input
            placeholder='Password'
            type='password'
            name='passwordOne'
            value={passwordOne}
            onChange={handleSignUpFormChange}
          />
          <Input
            placeholder='Password'
            type='password'
            name='passwordTwo'
            value={passwordTwo}
            onChange={handleSignUpFormChange}
          />
          {error && <StyledError>{error.message}</StyledError>}
          <StyledSignUpButtonDiv>
            <Button submit disabled={isInvalid} onClick={(e) => submitSignUp(e, signUpForm)}> Sign Up </Button>
            <Button signup onClick={(e) => openLoginForm(e)}> Sign In </Button>
            <Button cancel onClick={(e) => closeSignUpForm(e)}> Cancel </Button>
          </StyledSignUpButtonDiv>
        </form>
      </StyledFormContainer>
    )
  }
}



const mapStateToProps = (state) => ({
  signUpForm: state.signUpForm
})

const mapDispatchToProps = {
  handleSignUpFormChange,
  submitSignUp,
  closeSignUpForm,
  openLoginForm
}

const connectedSignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm)

export default connectedSignUpForm