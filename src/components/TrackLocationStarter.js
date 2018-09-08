import React from 'react'
import { connect } from 'react-redux'
import { startTrackingLocation, getLocationShareRequest } from '../reducers/locationTrackReducer'

class TrackLocationStarter extends React.Component {

  componentDidMount = async () => {
    let locationShareId = this.props.match.params.id
    console.log('ID IN TrackLocation mount(): ', locationShareId)
    if (locationShareId === undefined) {
      console.log('no track id -> create request')
      await this.props.getLocationShareRequest()
    } else {
      this.props.startTrackingLocation(locationShareId)
    }
  }

  render() {
    return (
      null
    )
  }
}

const mapStateToProps = (state) => ({
  locationTrack: state.locationTrack
})

const mapDispatchToProps = {
  startTrackingLocation,
  getLocationShareRequest
}

const connectedTrackLocationStarter = connect(mapStateToProps, mapDispatchToProps)(TrackLocationStarter)

export default connectedTrackLocationStarter