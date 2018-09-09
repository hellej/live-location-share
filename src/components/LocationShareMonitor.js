import React from 'react'
import history from './../history'
import { connect } from 'react-redux'
import { stopSharingLocation } from '../reducers/locationShareReducer'
import { StyledFaLocationArrow } from './StyledIcons'
import { StyledMonitorDiv, InfoBlock } from './StyledLayout'

class LocationShareMonitor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      linkVisible: true
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
          <InfoBlock button onClick={() => history.push('/')}>
            Menu
          </InfoBlock>
          <InfoBlock button onClick={this.props.stopSharingLocation}>
            Stop Sharing
          </InfoBlock>
          <InfoBlock button onClick={this.toggleLinkVisibility}>
            <StyledFaLocationArrow />
            {' '}{this.state.linkVisible ? 'Hide Link' : 'Show Link'}
          </InfoBlock>
          <InfoBlock hidden={!this.state.linkVisible} link>
            <a target="_blank" href={locationShare.shareLink}>{locationShare.shareLink}</a>
          </InfoBlock>
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
