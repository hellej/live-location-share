import React from 'react'
import history from './../history'
import { connect } from 'react-redux'
import { stopTrackingLocation } from '../reducers/locationTrackReducer'
import { StyledMonitorDiv, InfoBlock, InfoBlockValue } from './StyledLayout'

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
    const lastUpdated = locationTrack.lastUpdatedTimeElapsed === null
      ? 'waiting'
      : locationTrack.lastUpdatedTimeElapsed + ' s'

    if (locationTrack.tracking) {
      return (
        <StyledMonitorDiv>
          <InfoBlock button onClick={() => history.push('/')}>
            Menu
          </InfoBlock>
          <InfoBlock splitted>
            Tracking
            <InfoBlockValue button onClick={() => this.props.stopTrackingLocation()}>
              {locationTrack.id !== null ? 'ON' : 'OFF'}
            </InfoBlockValue>
          </InfoBlock>
          <InfoBlock splitted>
            Last Updated
            <InfoBlockValue>
              {lastUpdated}
            </InfoBlockValue>
          </InfoBlock>
          <InfoBlock splitted>
            Distance
            <InfoBlockValue>
              {locationTrack.dist !== null
                ? locationTrack.dist + ' m'
                : '?'}
            </InfoBlockValue>
          </InfoBlock>
          <InfoBlock splitted>
            Angle
            <InfoBlockValue>
              {locationTrack.angle !== null
                ? locationTrack.angle + ' °'
                : '?'}
            </InfoBlockValue>
          </InfoBlock>
          <InfoBlock onClick={this.toggleLinkVisibility} button>
            {this.state.linkVisible ? 'Hide Link' : 'Show Link'}
          </InfoBlock>
          <InfoBlock hidden={!this.state.linkVisible} link>
            <a target="_blank" href={locationTrack.shareLink}>{locationTrack.shareLink}</a>
          </InfoBlock>
        </StyledMonitorDiv >
      )
    } else return null
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