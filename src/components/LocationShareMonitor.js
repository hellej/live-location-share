import React from 'react'
import history from './../history'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import { stopSharingLocation } from '../reducers/locationShareReducer'
import { StyledFaLocationArrow } from './StyledIcons'

const StyledMonitorDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.6px;
  max-width: 95%;
`
const Info = styled.div`
  display: ${props => props.hidden ? 'none' : ''};
  padding-right: ${props => props.splitted ? '0px' : '13px'};
  padding: 6px 13px 6px 13px;
  background-color: rgba(0, 40, 0, 0.95);
  margin: 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 300;
  color: white;
  font-size: 17px;
  width: max-content;
  max-width: 90%;  
  overflow: auto;
  height: min-content;
  pointer-events: auto;
  ${props => props.link && css`
    width: min-content;
    max-width: 90%;
  `}
`
const StyledShareLink = styled.a`
  color: white;
`

class LocationShareMonitor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      linkVisible: false
    }
  }

  toggleLinkVisibility = () => {
    this.setState({ linkVisible: !this.state.linkVisible })
  }

  render() {
    const locationShare = this.props.locationShare

    if (locationShare.sharing) {
      return (
        <StyledMonitorDiv>
          <Info onClick={() => history.push('/')}>
            Menu
          </Info>
          <Info onClick={this.props.stopSharingLocation}>
            Stop Sharing
          </Info>
          <Info onClick={this.toggleLinkVisibility}>
            <StyledFaLocationArrow />
            {' '}{this.state.linkVisible ? 'Hide Link' : 'Show Link'}
          </Info>
          <Info hidden={!this.state.linkVisible} link>
            <StyledShareLink target="_blank" href={locationShare.shareLink}>{locationShare.shareLink}</StyledShareLink>
          </Info>
        </StyledMonitorDiv>
      )
    } else return null
  }
}

const mapStateToProps = (state) => ({
  locationShare: state.locationShare
})

const connectedLocationShareMonitor = connect(mapStateToProps, { stopSharingLocation })(LocationShareMonitor)

export default connectedLocationShareMonitor