import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import history, { sameHistoryLocation } from './../history'

import { Button } from './Buttons'
import { StyledFormContainer } from './StyledFormElements'
import { submitLocationShareStart, handleLocationExpireTimeChange, closeLocationShareForm } from '../reducers/locationShareReducer'


export const StyledButtonDiv = styled.div`
  align-items: center;
  border-radius: 7px; 
  display: flex;
  margin: 3px 4px 0px 4px;
  padding: 5px 0px 5px 0px;
`
const StyledError = styled.div`
  color: white;
  font-size: 15px
  font-style: italic;
  font-weight: 300;
  padding: 5px 0px;
`
const StyledText = styled.span`
  color: white;
  font-size: 15px;
  font-weight: 300;
  align-items: flex-start;  
  margin: auto;
`
const SelectWrapper = styled.div`
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  background: transparent;
  background-clip: border-box;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: row;
  flex: 0 1 14.5em;
  flex: none!important;
  text-align: center;
`
const StyledSelect = styled.select`
  align-items: center;
  background-repeat: no-repeat;
  background-color: transparent!important;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  height: 30px; //2.6em;
  //margin: 0px 15px 0px 0px;
  text-align: center;
  width: 75px;
  padding-left: 13px;
  vertical-align: middle;
  -webkit-appearance: none!important;
  &:focus { 
    border: 1px solid rgba(255, 255, 255, 0.9);
    outline: inherit !important;
    color: inherit !important;
  }
  &:hover { 
    border-color: white;
    box-shadow: inset 0 0 0 0.5px white;  
  }
`
const StyledOption = styled.option`
  text-align: center;
  display: block;
  padding-left: 10px;
  box-sizing: border-box;
`


class LocationShareForm extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (sameHistoryLocation(this.props, nextProps)) { history.push('/') } //toggle form visibility by clicking the menu link
  }

  render() {

    const { locationShare, submitLocationShareStart, closeLocationShareForm } = this.props
    const { error } = locationShare

    return (
      <StyledFormContainer>
        <form>
          {error && <StyledError>{error.message}</StyledError>}
          <StyledButtonDiv>
            <StyledText> Select share time: </StyledText>
            <SelectWrapper>
              <StyledSelect defaultValue={0.5}>
                <StyledOption value={0.25}>15 min</StyledOption>
                <StyledOption value={0.5}>30 min</StyledOption>
                <StyledOption value={0.75}>45 min</StyledOption>
                <StyledOption value={1}>1 h</StyledOption>
                <StyledOption value={1.5}>1.5 h</StyledOption>
              </StyledSelect>
            </SelectWrapper>
          </StyledButtonDiv>
          <StyledButtonDiv>
            <Button submit onClick={(e) => submitLocationShareStart(e, locationShare)}> Start Sharing </Button>
            <Button cancel onClick={(e) => closeLocationShareForm(e)}> Cancel </Button>
          </StyledButtonDiv>
        </form>
      </StyledFormContainer>
    )
  }
}



const mapStateToProps = (state) => ({
  locationShare: state.locationShare
})

const mapDispatchToProps = {
  handleLocationExpireTimeChange,
  submitLocationShareStart,
  closeLocationShareForm
}

const connectedLocationShareForm = connect(mapStateToProps, mapDispatchToProps)(LocationShareForm)

export default connectedLocationShareForm