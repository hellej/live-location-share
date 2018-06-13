import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import history, { sameHistoryLocation } from './../history'

import { Button } from './Buttons'
import { StyledFormContainer, Input } from './StyledFormElements'
import { submitLocationShareStart, handleLocationExpireTimeChange, closeLocationShareForm } from '../reducers/locationShareFormReducer'


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


class LocationShareForm extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (sameHistoryLocation(this.props, nextProps)) { history.push('/') } //toggle form visibility by clicking the menu link
  }

  render() {

    const { locationShareForm, submitLocationShareStart, closeLocationShareForm } = this.props
    const { expireTime, error } = locationShareForm

    return (
      <StyledFormContainer>
        <form>
          <Input
            placeholder='Share time '
            type='text'
            name='code'
            value={expireTime}
            onChange={handleLocationExpireTimeChange}
          />
          {error && <StyledError>{error.message}</StyledError>}
          <StyledLoginButtonDiv>
            <Button submit onClick={(e) => submitLocationShareStart(e, locationShareForm)}> Send Request </Button>
            <Button cancel onClick={(e) => closeLocationShareForm(e)}> Cancel </Button>
          </StyledLoginButtonDiv>
        </form>
      </StyledFormContainer>
    )
  }
}



const mapStateToProps = (state) => ({
  locationShareForm: state.locationShareForm
})

const mapDispatchToProps = {
  handleLocationExpireTimeChange,
  submitLocationShareStart,
  closeLocationShareForm
}

const connectedLocationShareForm = connect(mapStateToProps, mapDispatchToProps)(LocationShareForm)

export default connectedLocationShareForm