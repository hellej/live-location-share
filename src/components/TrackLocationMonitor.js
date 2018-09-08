import React from 'react'
import history from './../history'
import { connect } from 'react-redux'
import { stopTrackingLocation } from '../reducers/locationTrackReducer'
import styled, { css } from 'styled-components'

const StyledMonitorDiv = styled.div`
  max-width: 95%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  letter-spacing: 0.6px;
  max-width: 95%;
`
const Info = styled.div`
  display: ${props => props.hidden ? 'none' : ''};
  padding: 6px 13px 6px 13px;
  padding-right: ${props => props.splitted ? '0px' : '13px'};
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
const Value = styled.span`
  background-color: rgba(0, 86, 90, 0.95);
  padding: 6px 10px 6px 6px;
  border-radius 0 30px 30px 0;
  margin-left: 7px;
  pointer-events: auto;
`
const OnOff = styled(Value)`
  cursor: pointer;
`

class TrackLocationMonitor extends React.Component {

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
    const locationTrack = this.props.locationTrack
    const lastUpdated = locationTrack.lastUpdatedTimeElapsed !== null
      ? locationTrack.lastUpdatedTimeElapsed + ' s'
      : 'waiting'

    if (locationTrack.tracking) {
      return (
        <StyledMonitorDiv>
          <Info onClick={() => history.push('/')}>
            Menu
          </Info>
          <Info splitted={true} >
            Tracking
            <OnOff onClick={() => this.props.stopTrackingLocation()}>
              {locationTrack.id !== null ? 'ON' : 'OFF'}
            </OnOff>
          </Info>
          <Info splitted={true} >
            Last Updated
            <Value>
              {lastUpdated}
            </Value>
          </Info>
          <Info splitted={true} >
            Distance
            <Value>
              {locationTrack.dist !== null
                ? locationTrack.dist + ' m'
                : '?'}
            </Value>
          </Info>
          <Info splitted={true} >
            Angle
            <Value>
              {locationTrack.angle !== null
                ? locationTrack.angle + ' °'
                : '?'}
            </Value>
          </Info>
          <Info onClick={this.toggleLinkVisibility}>
            {this.state.linkVisible ? 'Hide Link' : 'Show Link'}
          </Info>
          <Info hidden={!this.state.linkVisible} link>
            <StyledShareLink target="_blank" href={locationTrack.shareLink}>{locationTrack.shareLink}</StyledShareLink>
          </Info>
        </StyledMonitorDiv >
      )
    }
    return null
  }
}

const mapStateToProps = (state) => ({
  locationTrack: state.locationTrack
})

const mapDispatchToProps = {
  stopTrackingLocation
}

const connectedTrackLocationMonitor = connect(mapStateToProps, mapDispatchToProps)(TrackLocationMonitor)

export default connectedTrackLocationMonitor