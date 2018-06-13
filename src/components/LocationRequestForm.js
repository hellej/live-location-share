import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import history, { sameHistoryLocation } from './../history'

import { Button } from './Buttons'
import { StyledFormContainer, Input } from './StyledFormElements'
import { handleLocationCodeChange, submitLocationRequest, closeLocationRequestForm } from '../reducers/locationRequestFormReducer'


export const StyledLoginButtonDiv = styled.div`
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


class LocationRequestForm extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (sameHistoryLocation(this.props, nextProps)) { history.push('/') } //toggle form visibility by clicking the menu link
  }

  render() {

    const { locationRequestForm, handleLocationCodeChange, submitLocationRequest, closeLocationRequestForm } = this.props
    const { code, error } = locationRequestForm

    return (
      <StyledFormContainer>
        <form>
          <Input
            placeholder='location request code'
            type='text'
            name='code'
            value={code}
            onChange={handleLocationCodeChange}
          />
          {error && <StyledError>{error.message}</StyledError>}
          <StyledLoginButtonDiv>
            <Button submit onClick={(e) => submitLocationRequest(e, locationRequestForm)}> Send Request </Button>
            <Button cancel onClick={(e) => closeLocationRequestForm(e)}> Cancel </Button>
          </StyledLoginButtonDiv>
        </form>
      </StyledFormContainer>
    )
  }
}



const mapStateToProps = (state) => ({
  locationRequestForm: state.locationRequestForm
})

const mapDispatchToProps = {
  handleLocationCodeChange,
  submitLocationRequest,
  closeLocationRequestForm
}

const connectedLocationRequestForm = connect(mapStateToProps, mapDispatchToProps)(LocationRequestForm)

export default connectedLocationRequestForm